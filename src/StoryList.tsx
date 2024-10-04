'use client';

import { addStory } from '@/lib/actions';
import { useUser } from '@clerk/nextjs';
import type { Story, User } from '@prisma/client';
import Image from 'next/image';
import { useOptimistic, useRef, useState } from 'react';

type StoryType = Story & {
  user: User;
};

const StoryList = ({ stories }: { stories: StoryType[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [storyList, setStoryList] = useState(stories);
  const [img, setImg] = useState('');
  const [optimisticStories, setOptimisticStories] = useOptimistic(storyList, (state, value: StoryType) => [
    ...state,
    value,
  ]);
  const { user, isLoaded } = useUser();
  const dialog = useRef<HTMLDialogElement>(null);

  if (!user && !isLoaded) return 'Loading...';
  if (!user && isLoaded) return null;

  const add = async () => {
    if (!img) return;

    setOptimisticStories({
      id: Math.random(),
      img,
      createdAt: new Date(Date.now()),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      userId: user.id,
      user: {
        id: user.id,
        avatar: user.imageUrl || '/noAvatar.png',
        createdAt: new Date(Date.now()),
        username: 'Sending...',
        name: user.firstName,
        cover: '',
        surname: user.lastName,
        description: '',
        city: '',
        school: '',
        work: '',
        website: '',
      },
    });
    try {
      const createdStory = (await addStory(img)) as StoryType;
      setStoryList([createdStory]);
      setImg('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/*CREATE STORY*/}
      <div className={'flex flex-col items-center gap-2 cursor-pointer relative'}>
        <Image
          onKeyDown={() => {
            dialog.current?.showModal();
            setIsOpen(true);
          }}
          onClick={() => {
            dialog.current?.showModal();
            setIsOpen(true);
          }}
          alt={'User avatar'}
          width={80}
          height={80}
          className={'w-20 h-20 rounded-full ring-2 object-cover hover:ring-4'}
          src={user?.imageUrl || '/noAvatar.png'}
        />
        {img ? (
          <form action={add} className={'w-full'}>
            <button className={'w-full text-xs bg-blue-500 rounded-md text-white'} type={'submit'}>
              Send
            </button>
          </form>
        ) : (
          <span className={'font-medium'}>Add Story</span>
        )}
      </div>
      {/*STORY*/}
      {optimisticStories.map(story => (
        <div key={story.id} className={'flex flex-col items-center gap-2 cursor-pointer'}>
          <Image
            alt={story.user.username}
            width={80}
            height={80}
            className={'w-20 h-20 rounded-full ring-2 object-cover hover:ring-4'}
            src={story.user.avatar || '/noAvatar.png'}
          />
          <span className={'font-medium'}>{story.user.name || story.user.username}</span>
        </div>
      ))}
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
    </>
  );
};

export default StoryList;
