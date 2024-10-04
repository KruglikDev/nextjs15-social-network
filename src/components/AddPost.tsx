'use client';

import AddPostButton from '@/components/AddPostButton';
import Spinner from '@/components/Spinner';
import { addPost } from '@/lib/actions';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { useRef, useState } from 'react';

const AddPost = () => {
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoaded } = useUser();

  const dialog = useRef<HTMLDialogElement>(null);

  if (!isLoaded) {
    return <Spinner />;
  }

  return (
    <section className={'p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'}>
      {/*Avatar*/}
      <Image
        width={48}
        height={48}
        src={user?.imageUrl || '/noAvatar.png'}
        alt={user?.username || 'user avatar'}
        className={'w-12 h-12 object-cover rounded-full'}
      />
      <div className={'flex-1'}>
        {/*TEXT INPUT*/}
        <form
          onSubmit={() => {
            setDesc('');
            setImg('');
          }}
          action={formData => addPost(formData, img || '')}
          className={'flex gap-4'}
        >
          <textarea
            name={'desc'}
            value={desc}
            onChange={e => setDesc(e.target.value)}
            placeholder={"What's on your mind?"}
            className={'flex-1 bg-slate-100 rounded-lg p-2'}
          />
          <div>
            <Image
              width={20}
              height={20}
              src={'/emoji.png'}
              alt={'Avatar'}
              className={'w-5 h-5 cursor-pointer self-end'}
            />
            <AddPostButton />
          </div>
        </form>
        {/*POST OPTIONS*/}
        <div className={'flex items-center gap-4 mt-4 text-gray-400 flex-wrap'}>
          <div
            className={'flex items-center gap-2 cursor-pointer'}
            onKeyDown={() => {
              dialog.current?.showModal();
              setIsOpen(true);
            }}
            onClick={() => {
              dialog.current?.showModal();
              setIsOpen(true);
            }}
          >
            <Image width={20} height={20} src={'/addImage.png'} alt={'Add photo icon'} />
            Photo
          </div>
          <div className={'flex items-center gap-2 cursor-pointer'}>
            <Image width={20} height={20} src={'/addVideo.png'} alt={'Add video icon'} />
            Video
          </div>
          <div className={'flex items-center gap-2 cursor-pointer'}>
            <Image width={20} height={20} src={'/poll.png'} alt={'Add poll icon'} />
            Poll
          </div>
          <div className={'flex items-center gap-2 cursor-pointer'}>
            <Image width={20} height={20} src={'/addevent.png'} alt={'Add event icon'} />
            Event
          </div>
        </div>
      </div>
      {/*IMAGE MODAL*/}
      {isOpen && (
        <dialog className={'mt-4 p-2 flex gap-2 rounded-md shadow-lg'} ref={dialog}>
          <input value={img} onChange={e => setImg(e.target.value)} className={'ring-2 ring-gray-300'} type='text' />
          <button
            className={'text-blue-500'}
            type={'button'}
            onClick={() => {
              dialog.current?.close();
              setIsOpen(false);
            }}
          >
            Add Image
          </button>
          <button
            className={'text-red-500'}
            type={'button'}
            onClick={() => {
              dialog.current?.close();
              setIsOpen(false);
              setImg('');
            }}
          >
            Cancel
          </button>
        </dialog>
      )}
    </section>
  );
};

export default AddPost;
