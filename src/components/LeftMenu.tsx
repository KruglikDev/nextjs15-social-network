import ProfileCard from '@/components/ProfileCard';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

const leftMenuItems = [
  {
    id: '001',
    icon: '/posts.png',
    alt: 'posts icon',
    text: 'My Posts',
    link: '/',
  },
  {
    id: '002',
    icon: '/activity.png',
    alt: 'activity icon',
    text: 'Activity',
    link: '/',
  },
  {
    id: '003',
    icon: '/market.png',
    alt: 'Marketplace icon',
    text: 'Marketplace',
    link: '/',
  },
  {
    id: '004',
    icon: '/events.png',
    alt: 'Events icon',
    text: 'Events',
    link: '/',
  },
  {
    id: '005',
    icon: '/albums.png',
    alt: 'Albums icon',
    text: 'Albums',
    link: '/',
  },
  {
    id: '006',
    icon: '/videos.png',
    alt: 'Videos icon',
    text: 'Videos',
    link: '/',
  },
  {
    id: '007',
    icon: '/news.png',
    alt: 'News icon',
    text: 'News',
    link: '/',
  },
  {
    id: '008',
    icon: '/courses.png',
    alt: 'Courses icon',
    text: 'Courses',
    link: '/',
  },
  {
    id: '009',
    icon: '/lists.png',
    alt: 'Lists icon',
    text: 'Lists',
    link: '/',
  },
  {
    id: '010',
    icon: '/settings.png',
    alt: 'Settings icon',
    text: 'Settings',
    link: '/',
  },
];

type LeftMenuProps = {
  type: 'home' | 'profile';
};

const LeftMenu = ({ type }: LeftMenuProps) => {
  return (
    <div className={'flex flex-col gap-6'}>
      {type === 'home' && <ProfileCard />}
      <div className={'p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2'}>
        {leftMenuItems.map(item => (
          <Fragment key={item.id}>
            <Link href={item.link} className={'flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'}>
              <Image src={item.icon} alt={item.alt} width={20} height={20} />
              <span>{item.text}</span>
            </Link>
            <hr className={'border-t-1 border-gray-50 w-36 self-center'} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default LeftMenu;
