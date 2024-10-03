'use client';
import UpdateButton from '@/components/rightMenu/UpdateButton';
import { updateProfile } from '@/lib/actions';
import type { User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useActionState, useRef } from 'react';

const UpdateUser = ({ user }: { user: User }) => {
  const [state, formAction] = useActionState(updateProfile, {
    success: false,
    error: false,
  });
  const router = useRouter();

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
        <form action={formData => formAction({ formData })} className={'p-12 bg-white flex flex-col gap-2 '}>
          <h1>Update Profile</h1>
          <div className={'mt-4 text-xs text-gray-500'}>Use the navbar profile to change the avatar or username.</div>

          <div className={'flex flex-col gap-4 my-4'}>
            <div className={'flex items-center gap-2 cursor-pointer'}>
              <div className={'flex flex-col gap-4 w-full'}>
                <label htmlFor='' className={'text-xs text-gray-500'}>
                  Cover Image
                </label>
                <input
                  className={'ring-1 ring-gray-300 p-[13px] rounded-md text-sm'}
                  type='text'
                  placeholder={user?.cover || 'cover'}
                  name={'cover'}
                />
              </div>
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
                name={'name'}
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
                name={'surname'}
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
                name={'description'}
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
                name={'city'}
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
                name={'school'}
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
                name={'work'}
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
                name={'website'}
              />
            </div>
          </div>

          <UpdateButton />

          {state.success && <span className={'text-green-500'}>Profile has been updated!</span>}
          {state.error && <span className={'text-red-500'}>Something went wrong!</span>}
        </form>
        <div
          className={'cursor-pointer hover:text-gray-500 w-fit p-2 mx-2 absolute top-0 right-0'}
          onKeyDown={() => {
            dialog.current?.close();
            if (state.success) router.refresh();
            state.success = false;
            state.error = false;
          }}
          onClick={() => {
            dialog.current?.close();
            if (state.success) router.refresh();
            state.success = false;
            state.error = false;
          }}
        >
          <strong>X</strong>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateUser;
