import Comments from '@/components/feed/Comments';
import PostInteraction from '@/components/feed/PostInteraction';
import type { Post as PostType, User } from '@prisma/client';
import Image from 'next/image';

type PostProps = PostType & {
  user: User;
} & { likes: [{ userId: string }] } & { _count: { comments: number } };

const Post = ({ post }: { post: PostProps }) => {
  const username = post.user.name && post.user.surname ? `${post.user.name} ${post.user.surname}` : post.user.username;
  const likesArray = post.likes.map(p => p.userId);

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
        <Image className={'cursor-pointer'} alt={'more icon'} width={16} height={16} src={'/more.png'} />
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
      <PostInteraction postId={post.id} likes={likesArray} commentNumber={post._count.comments} />
      <Comments postId={post.id} />
    </article>
  );
};

export default Post;
