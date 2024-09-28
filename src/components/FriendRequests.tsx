import Image from 'next/image';
import Link from 'next/link';

const FriendRequests = () => {
  return (
    <section className={'p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'}>
      {/*TOP*/}
      <div className={'flex justify-between items-center font-medium'}>
        <span className={'text-gray-500'}>Friend Requests</span>
        <Link href={'/'} className={'text-blue-500 text-xs'}>
          See all
        </Link>
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
          <Image src={'/accept.png'} width={20} height={20} alt={'accept icon'} className={'cursor-pointer'} />
          <Image src={'/reject.png'} width={20} height={20} alt={'reject icon'} className={'cursor-pointer'} />
        </div>
      </div>
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
          <Image src={'/accept.png'} width={20} height={20} alt={'accept icon'} className={'cursor-pointer'} />
          <Image src={'/reject.png'} width={20} height={20} alt={'reject icon'} className={'cursor-pointer'} />
        </div>
      </div>
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
          <Image src={'/accept.png'} width={20} height={20} alt={'accept icon'} className={'cursor-pointer'} />
          <Image src={'/reject.png'} width={20} height={20} alt={'reject icon'} className={'cursor-pointer'} />
        </div>
      </div>
    </section>
  );
};

export default FriendRequests;
