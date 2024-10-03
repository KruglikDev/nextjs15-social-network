import { useFormStatus } from 'react-dom';

const UpdateButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type={'submit'} className={'bg-blue-500 p-2 mt-2 rounded-md text-white'}>
      Update
      {pending && ' Loading...'}
    </button>
  );
};

export default UpdateButton;
