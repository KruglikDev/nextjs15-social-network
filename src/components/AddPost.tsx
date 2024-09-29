import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';

const AddPost = () => {
  const { userId } = auth();

  const testAction = async (formData: FormData) => {
    'use server';
    if (!userId) return;
    const desc = formData.get('desc') as string;
    try {
      const res = await prisma.post.create({
        data: {
          userId: userId,
          desc: desc,
        },
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className={'p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'}>
      {/*Avatar*/}
      <Image
        width={48}
        height={48}
        src={
          'https://images.unsplash.com/photo-1663670761152-3b9f3edfdefc?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        alt={'Avatar'}
        className={'w-12 h-12 object-cover rounded-full'}
      />
      <div className={'flex-1'}>
        {/*TEXT INPUT*/}
        <form action={testAction} className={'flex gap-4'}>
          <textarea
            name={'desc'}
            placeholder={"What's on your mind?"}
            className={'flex-1 bg-slate-100 rounded-lg p-2'}
          />
          <Image
            width={20}
            height={20}
            src={'/emoji.png'}
            alt={'Avatar'}
            className={'w-5 h-5 cursor-pointer self-end'}
          />
          <button type={'submit'}>SEND</button>
        </form>
        {/*POST OPTIONS*/}
        <div className={'flex items-center gap-4 mt-4 text-gray-400 flex-wrap'}>
          <div className={'flex items-center gap-2 cursor-pointer'}>
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
    </section>
  );
};

export default AddPost;
