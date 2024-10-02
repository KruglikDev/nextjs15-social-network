import Feed from '@/components/feed/Feed';
import LeftMenu from '@/components/leftMenu/LeftMenu';
import RightMenu from '@/components/rightMenu/RightMenu';
import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type ProfilePageProps = {
  params: {
    username: string;
  };
};

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const user = await prisma.user.findFirst({
    where: {
      username: params.username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  });

  if (!user) return notFound();
  const username = user.name && user.surname ? `${user.name} ${user.surname}` : user.username;
  const { userId: currentUserId } = auth();

  let isBlocked = false;

  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUserId,
      },
    });
    if (res) isBlocked = true;
  } else {
    isBlocked = false;
  }

  if (isBlocked) return notFound();

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
                src={user.cover || '/noCover.png'}
                fill
                className={'object-cover rounded-md'}
              />
              <Image
                alt={'profile picture'}
                src={user.avatar || '/noAvatar.png'}
                width={128}
                height={128}
                className={
                  'w-32 h-32 rounded-full object-cover left-0 right-0 m-auto absolute -bottom-16 ring-4 ring-white'
                }
              />
            </div>

            <h1 className={'mt-20 mb-4 text-2xl font-medium'}>{username}</h1>

            <div className={'flex items-center justify-center gap-12 mb-4'}>
              <div className={'flex flex-col items-center'}>
                <span className={'font-medium'}>{user._count.posts}</span>
                <span className={'text-sm'}>{user._count.posts === 1 ? 'Post' : 'Posts'}</span>
              </div>

              <div className={'flex flex-col items-center'}>
                <span className={'font-medium'}>{user._count.followers}</span>
                <span className={'text-sm'}>{user._count.followers === 1 ? 'Follower' : 'Followers'}</span>
              </div>
              <div className={'flex flex-col items-center'}>
                <span className={'font-medium'}>{user._count.followings}</span>
                <span className={'text-sm'}>Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </main>
      <aside className={'hidden lg:block w-[30%]'}>
        <RightMenu user={user} />
      </aside>
    </div>
  );
};

export default ProfilePage;
