import Image from 'next/image';
import Link from 'next/link';

const Birthdays = () => {
  return (
    <section className={'p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'}>
      {/*TOP*/}
      <div className={'flex justify-between items-center font-medium'}>
        <span className={'text-gray-500'}>Birthdays</span>
      </div>
      {/*USER*/}
      <div className={'flex items-center justify-between'}>
        <div className={'flex items-center gap-4'}>
          <Image
            src={
              'https://images.unsplash.com/photo-1615233500147-5b196365bf3e?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt={'user avatar'}
            width={40}
            height={40}
            className={'rounded-full w-10 h-10 object-cover'}
          />
          <span className={'font-semibold'}>Wayne</span>
        </div>
        <div className={'flex gap-3 justify-end'}>
          <button type={'button'} className={'bg-blue-500 text-white text-xs px-2 py-1 rounded-md'}>
            Celebrate
          </button>
        </div>
      </div>
      {/*UPCOMING*/}
      <div className={'p-4 bg-slate-100 rounded-lg flex items-center gap-4'}>
        <Image src={'/gift.png'} alt={'gift icon'} width={24} height={24} />
        <Link href={'/'} className={'flex flex-col gap-1 text-xs'}>
          <span className={'text-gray-700 font-semibold'}>Upcoming Birthdays</span>
          <span className={'text-gray-500'}>See other 16 have upcoming birthdays</span>
        </Link>
      </div>
    </section>
  );
};

export default Birthdays;
