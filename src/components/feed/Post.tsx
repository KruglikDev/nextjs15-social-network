import Comments from '@/components/feed/Comments';
import type { Post as PostType, User } from '@prisma/client';
import Image from 'next/image';

type PostProps = PostType & {
  user: User;
} & { likes: [{ userId: string }] } & { _count: { comments: number } };

const Post = ({ post }: { post: PostProps }) => {
  const username = post.user.name && post.user.surname ? `${post.user.name} ${post.user.surname}` : post.user.username;

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
      <div className={'flex items-center justify-between text-sm my-4 flex-wrap'}>
        <div className={'flex gap-8'}>
          <div className={'flex items-center gap-4 bg-slate-50 p-2 rounded-xl'}>
            <Image className={'cursor-pointer'} src={'/like.png'} alt={'Like button'} width={16} height={16} />
            <span className={'text-gray-300'}>|</span>
            <span className={'text-gray-300'}>
              {1} <span className={'hidden md:inline'}>Likes</span>
            </span>
          </div>
          <div className={'flex items-center gap-4 bg-slate-50 p-2 rounded-xl'}>
            <Image className={'cursor-pointer'} src={'/comment.png'} alt={'Like button'} width={16} height={16} />
            <span className={'text-gray-300'}>|</span>
            <span className={'text-gray-300'}>
              {post._count.comments} <span className={'hidden md:inline'}>Comments</span>
            </span>
          </div>
        </div>
        <div>
          <div className={'flex items-center gap-4 bg-slate-50 p-2 rounded-xl mt-2 sm:mt-0'}>
            <Image className={'cursor-pointer'} src={'/share.png'} alt={'Like button'} width={16} height={16} />
            <span className={'text-gray-300'}>|</span>
            <span className={'text-gray-300'}>
              <span className={'hidden md:inline'}>Share</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </article>
  );
};

export default Post;
