import Spinner from '@/components/Spinner';
import Post from '@/components/feed/Post';
import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';
import type { Post as PostType } from '@prisma/client';
import { Suspense } from 'react';

const Feed = async ({ username }: { username?: string }) => {
  const { userId } = auth();

  let posts: PostType[] = [];

  if (username) {
    posts = await prisma.post.findMany({
      where: {
        user: {
          username: username,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  if (!username && userId) {
    const following = await prisma.follower.findMany({
      where: {
        followerId: userId,
      },
      select: {
        followingId: true,
      },
    });

    const followingIds = following.map(f => f.followingId);
    const ids = [...followingIds, userId];

    posts = await prisma.post.findMany({
      where: {
        userId: {
          in: ids,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  return (
    <section className={'p-4 bg-white shadow-md rounded-lg flex flex-col gap-12'}>
      <Suspense fallback={<Spinner />}>
        {posts?.length ? posts.map(post => <Post key={post.id} post={post} />) : 'No posts found.'}
      </Suspense>
    </section>
  );
};

export default Feed;
