'use client';
import type { User } from '@prisma/client';
import Image from 'next/image';
import { useRef } from 'react';

const UpdateUser = ({ user }: { user: User }) => {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <div>
      <span
        className={'text-blue-500 text-xs cursor-pointer'}
        onKeyDown={() => dialog.current?.showModal()}
        onClick={() => dialog.current?.showModal()}
      >
        Update
      </span>
      <dialog
        className={'top-0 left-0 z-50 backdrop:bg-black backdrop:bg-opacity-65 rounded-lg w-full md:w-1/2 xl:w-1/3'}
        ref={dialog}
      >
        <form action='' className={'p-12 bg-white flex flex-col gap-2 '}>
          <h1>Update Profile</h1>
          <div className={'mt-4 text-xs text-gray-500'}>Use the navbar profile to change the avatar or username.</div>

          <div className={'flex flex-col gap-4 my-4'}>
            <label htmlFor=''>Cover Picture</label>
            <div className={'flex items-center gap-2 cursor-pointer'}>
              <Image
                src={user.cover || '/noCover.png'}
                alt={'Cover Picture'}
                width={48}
                height={32}
                className={'w-12 h-8 rounded-md object-cover'}
              />
              <span className={'underline text-xs text-gray-600'}>Change</span>
            </div>
          </div>

          <div className={'flex flex-wrap justify-between gap-2 xl:gap-4'}>
            {/*INPUT*/}
            <div className={'flex flex-col gap-4'}>
              <label htmlFor='' className={'text-xs text-gray-500'}>
                First Name
              </label>
              <input
                className={'ring-1 ring-gray-300 p-[13px] rounded-md text-sm'}
                type='text'
                placeholder={user?.name || 'John'}
              />
            </div>

            {/*INPUT*/}
            <div className={'flex flex-col gap-4'}>
              <label htmlFor='' className={'text-xs text-gray-500'}>
                Surname
              </label>
              <input
                className={'ring-1 ring-gray-300 p-[13px] rounded-md text-sm'}
                type='text'
                placeholder={user?.surname || 'Doe'}
              />
            </div>

            {/*INPUT*/}
            <div className={'flex flex-col gap-4'}>
              <label htmlFor='' className={'text-xs text-gray-500'}>
                Description
              </label>
              <input
                className={'ring-1 ring-gray-300 p-[13px] rounded-md text-sm'}
                type='text'
                placeholder={user?.description || 'Example...'}
              />
            </div>

            {/*INPUT*/}
            <div className={'flex flex-col gap-4'}>
              <label htmlFor='' className={'text-xs text-gray-500'}>
                City
              </label>
              <input
                className={'ring-1 ring-gray-300 p-[13px] rounded-md text-sm'}
                type='text'
                placeholder={user?.city || 'Chicago'}
              />
            </div>

            {/*INPUT*/}
            <div className={'flex flex-col gap-4'}>
              <label htmlFor='' className={'text-xs text-gray-500'}>
                School
              </label>
              <input
                className={'ring-1 ring-gray-300 p-[13px] rounded-md text-sm'}
                type='text'
                placeholder={user?.school || 'Alaska High School'}
              />
            </div>

            {/*INPUT*/}
            <div className={'flex flex-col gap-4'}>
              <label htmlFor='' className={'text-xs text-gray-500'}>
                Work
              </label>
              <input
                className={'ring-1 ring-gray-300 p-[13px] rounded-md text-sm'}
                type='text'
                placeholder={user?.work || 'IBM Inc.'}
              />
            </div>

            {/*INPUT*/}
            <div className={'flex flex-col gap-4'}>
              <label htmlFor='' className={'text-xs text-gray-500'}>
                Website
              </label>
              <input
                className={'ring-1 ring-gray-300 p-[13px] rounded-md text-sm'}
                type='text'
                placeholder={user?.website || 'lama.dev'}
              />
            </div>
          </div>

          <button type={'submit'} className={'bg-blue-500 p-2 mt-2 rounded-md text-white'}>
            Update
          </button>
        </form>
        <div
          className={'cursor-pointer hover:text-gray-500 w-fit p-2 mx-2 absolute top-0 right-0'}
          onKeyDown={() => dialog.current?.close()}
          onClick={() => dialog.current?.close()}
        >
          <strong>X</strong>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateUser;
