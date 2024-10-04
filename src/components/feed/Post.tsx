import Spinner from '@/components/Spinner';
import Comments from '@/components/feed/Comments';
import PostInfo from '@/components/feed/PostInfo';
import PostInteraction from '@/components/feed/PostInteraction';
import { auth } from '@clerk/nextjs/server';
import type { Post as PostType, User } from '@prisma/client';
import Image from 'next/image';
import { Suspense } from 'react';

type PostProps = PostType & {
  user: User;
} & { likes: [{ userId: string }] } & { _count: { comments: number } };

const Post = ({ post }: { post: PostProps }) => {
  const username = post.user.name && post.user.surname ? `${post.user.name} ${post.user.surname}` : post.user.username;
  const likesArray = post.likes.map(p => p.userId);
  const { userId } = auth();

  return (
    <article className={'flex flex-col gap-4'}>
      {/*USER*/}
      <div className={'flex items-center justify-between'}>
        <div className={'flex items-center gap-4'}>
          <Image
            src={post.user.avatar || '/noAvatar.png'}
            className={'w-10 h-10 rounded-full object-cover'}
            width={40}
            height={40}
            alt={username}
          />
          <span>{username}</span>
        </div>
        {userId === post.user.id && <PostInfo postId={post.id} />}
      </div>
      {/*DESC*/}
      <div className={'flex flex-col gap-4'}>
        {post.img && (
          <div className={'w-full min-h-96 relative'}>
            <Image className={'object-cover rounded-md'} alt={post.desc} fill src={post.img} />
          </div>
        )}
        <p>{post.desc}</p>
      </div>
      {/*INTER*/}
      <Suspense fallback={<Spinner />}>
        <PostInteraction postId={post.id} likes={likesArray} commentNumber={post._count.comments} />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Comments postId={post.id} />
      </Suspense>
    </article>
  );
};

export default Post;
