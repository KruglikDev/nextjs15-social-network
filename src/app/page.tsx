import AddPost from '@/components/AddPost';
import Stories from '@/components/Stories';
import Feed from '@/components/feed/Feed';
import LeftMenu from '@/components/leftMenu/LeftMenu';
import RightMenu from '@/components/rightMenu/RightMenu';

const Homepage = () => {
  return (
    <div className='flex gap-6 pt-6'>
      <aside className={'hidden xl:block w-[20%]'}>
        <LeftMenu type={'home'} />
      </aside>
      <main className={'w-full lg:w-[70%]'}>
        <div className={'flex flex-col gap-6'}>
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </main>
      <aside className={'hidden lg:block w-[30%]'}>
        <RightMenu />
      </aside>
    </div>
  );
};

export default Homepage;
