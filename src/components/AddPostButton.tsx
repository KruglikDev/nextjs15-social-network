'use client';

import Spinner from '@/components/Spinner';
import { useFormStatus } from 'react-dom';

const AddPostButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className={
        'cursor-pointer p-2 mt-2 rounded-md text-white bg-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed'
      }
      disabled={pending}
      type={'submit'}
    >
      {pending ? <Spinner /> : 'Send'}
    </button>
  );
};

export default AddPostButton;
