import Feed from '@/components/Feed';
import LeftMenu from '@/components/LeftMenu';
import RightMenu from '@/components/RightMenu';
import Image from 'next/image';

const ProfilePage = () => {
  return (
    <div className='flex gap-6 pt-6'>
      <aside className={'hidden xl:block w-[20%]'}>
        <LeftMenu type={'profile'} />
      </aside>
      <main className={'w-full lg:w-[70%]'}>
        <div className={'flex flex-col gap-6'}>
          <div className={'flex flex-col items-center justify-center'}>
            <div className={'w-full h-64 relative'}>
              <Image
                alt={'profile background'}
                src={
                  'https://images.unsplash.com/photo-1650149044622-472659e87813?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                fill
                className={'object-cover rounded-md'}
              />
              <Image
                alt={'profile picture'}
                src={
                  'https://images.unsplash.com/photo-1628243879340-c318bcb5d833?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                width={128}
                height={128}
                className={
                  'w-32 h-32 rounded-full object-cover left-0 right-0 m-auto absolute -bottom-16 ring-4 ring-white'
                }
              />
            </div>

            <h1 className={'mt-20 mb-4 text-2xl font-medium'}>Ezra Weaver</h1>

            <div className={'flex items-center justify-center gap-12 mb-4'}>
              <div className={'flex flex-col items-center'}>
                <span className={'font-medium'}>123</span>
                <span className={'text-sm'}>Posts</span>
              </div>

              <div className={'flex flex-col items-center'}>
                <span className={'font-medium'}>1.2K</span>
                <span className={'text-sm'}>Followers</span>
              </div>
              <div className={'flex flex-col items-center'}>
                <span className={'font-medium'}>12K</span>
                <span className={'text-sm'}>Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </main>
      <aside className={'hidden lg:block w-[30%]'}>
        <RightMenu userId={'test'} />
      </aside>
    </div>
  );
};

export default ProfilePage;
