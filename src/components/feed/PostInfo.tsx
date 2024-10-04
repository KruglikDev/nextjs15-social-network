'use client';

import { deletePost } from '@/lib/actions';
import Image from 'next/image';
import { useState } from 'react';

const PostInfo = ({ postId }: { postId: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  const deletePostWithId = deletePost.bind(null, postId);
  return (
    <div className={'relative'}>
      <Image
        onClick={() => setIsOpen(!isOpen)}
        className={'cursor-pointer'}
        alt={'more icon'}
        width={16}
        height={16}
        src={'/more.png'}
      />
      {isOpen && (
        <div
          className={'w-32 absolute top-4 right-0 bg-white p-4 rounded-lg flex flex-col gap-2 text-xs shadow-xl z-30'}
        >
          <span className={'cursor-pointer'}>View</span>
          <span className={'cursor-pointer'}>Repost</span>
          <form action={deletePostWithId}>
            <button className={'text-red-500'} type={'submit'}>
              Delete
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PostInfo;
