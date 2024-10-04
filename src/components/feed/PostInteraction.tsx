'use client';

import { switchLike } from '@/lib/actions';
import { useAuth } from '@clerk/nextjs';
import Image from 'next/image';
import { useOptimistic, useState } from 'react';

type UserInteractionProps = {
  postId: number;
  likes: string[];
  commentNumber: number;
};

const UserInteraction = ({ postId, likes, commentNumber }: UserInteractionProps) => {
  const { userId } = useAuth();

  const [likeState, setLikeState] = useState({
    likesCount: likes.length,
    isLiked: userId ? likes.includes(userId) : false,
  });
  const [optimisticLike, setOptimisticLike] = useOptimistic(likeState, (state, _value) => {
    return {
      likesCount: state.isLiked ? state.likesCount - 1 : state.likesCount + 1,
      isLiked: !state.isLiked,
    };
  });

  const likeAction = async () => {
    setOptimisticLike('');

    try {
      await switchLike(postId);
      setLikeState(prevState => ({
        likesCount: prevState.isLiked ? prevState.likesCount - 1 : prevState.likesCount + 1,
        isLiked: !prevState.isLiked,
      }));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={'flex items-center justify-between text-sm my-4 flex-wrap'}>
      <div className={'flex gap-8'}>
        <div className={'flex items-center gap-4 bg-slate-50 p-2 rounded-xl'}>
          <form action={likeAction}>
            <button type={'submit'}>
              <Image
                className={'cursor-pointer'}
                src={optimisticLike.isLiked ? '/liked.png' : '/like.png'}
                alt={'Like button'}
                width={16}
                height={16}
              />
            </button>
          </form>
          <span className={'text-gray-300'}>|</span>
          <span className={'text-gray-300'}>
            {optimisticLike.likesCount} <span className={'hidden md:inline'}>Likes</span>
          </span>
        </div>
        <div className={'flex items-center gap-4 bg-slate-50 p-2 rounded-xl'}>
          <Image className={'cursor-pointer'} src={'/comment.png'} alt={'Like button'} width={16} height={16} />
          <span className={'text-gray-300'}>|</span>
          <span className={'text-gray-300'}>
            {commentNumber} <span className={'hidden md:inline'}>Comments</span>
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
  );
};

export default UserInteraction;
