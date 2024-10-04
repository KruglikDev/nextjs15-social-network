'use client';

import { useUser } from '@clerk/nextjs';
import type { Comment, User } from '@prisma/client';
import Image from 'next/image';
import { useOptimistic, useState } from 'react';

type CommentListProps = Comment & { user: User };

const CommentList = ({ comments, postId }: { comments: CommentListProps[]; postId: number }) => {
  const [commentState, setCommentState] = useState(comments);
  const [desc, setDesc] = useState('');
  const [optimisticComments, setOptimisticComments] = useOptimistic(commentState, (state, value: CommentListProps) => [
    value,
    ...state,
  ]);

  const { user } = useUser();

  return (
    <>
      {user && (
        <div className={'flex items-center gap-4'}>
          <Image
            src={user?.imageUrl || '/noAvatar.png'}
            alt={'user avatar'}
            width={32}
            height={32}
            className={'w-8 h-8 rounded-full'}
          />
          <form
            action={''}
            className={'flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'}
          >
            <input
              value={desc}
              onChange={e => setDesc(e.target.value)}
              type='text'
              placeholder={'Write a comment...'}
              className={'bg-transparent outline-none flex-1'}
            />
            <Image src={'/emoji.png'} alt={'emoji icon'} width={16} height={16} className={'cursor-pointer'} />
          </form>
        </div>
      )}
      {/*COMMENTS*/}
      <div>
        {/*COMMENT*/}
        {optimisticComments.map(comment => (
          <div key={comment.id} className={'flex gap-4 justify-between mt-6'}>
            {/*AVATAR*/}
            <Image
              src={comment?.user.avatar || '/noAvatar.png'}
              alt={'user avatar'}
              width={40}
              height={40}
              className={'w-10 h-10 rounded-full'}
            />
            {/*DESC*/}
            <div className={'flex flex-col gap-2 flex-1'}>
              <span className={'font-medium'}>
                {comment.user.name && comment.user.surname
                  ? `${comment.user.name} ${comment.user.surname}`
                  : comment.user.username}
              </span>
              <p>{comment.desc}</p>
              <div className={'flex items-center gap-8 text-xs text-gray-500 mt-2'}>
                <div className={'flex items-center gap-4'}>
                  <Image
                    alt={'like icon'}
                    src={'/like.png'}
                    width={12}
                    height={12}
                    className={'cursor-pointer w-4 h-4'}
                  />
                  <span className={'text-gray-300'}>|</span>
                  <span className={'text-gray-500'}>0 Likes</span>
                </div>
                <div>Reply</div>
              </div>
            </div>
            {/*ICON*/}
            <Image alt={'more icon'} src={'/more.png'} width={16} height={16} className={'cursor-pointer w-4 h-4'} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentList;
