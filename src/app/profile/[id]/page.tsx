import Feed from '@/components/Feed';
import LeftMenu from '@/components/LeftMenu';
import RightMenu from '@/components/RightMenu';

const ProfilePage = () => {
  return (
    <div className='flex gap-6 pt-6'>
      <aside className={'hidden xl:block w-[20%]'}>
        <LeftMenu type={'profile'} />
      </aside>
      <main className={'w-full lg:w-[70%]'}>
        <div className={'flex flex-col gap-6'}>
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
