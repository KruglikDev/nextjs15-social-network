import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';

const ProfileCard = async () => {
  const { userId } = auth();

  if (!userId) return null;

  const user = await prisma.user.findFirst({
    where: { id: userId },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });

  if (!user) return null;

  const username = user.name && user.surname ? `${user.name} ${user.surname}` : user.username;

  return (
    <section className={'p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'}>
      <div className={'h-20 relative'}>
        <Image
          alt={'profile image background'}
          src={user.cover || '/noCover.png'}
          fill
          className={'rounded-md object-cover'}
        />
        <Image
          alt={'profile image'}
          src={user.avatar || '/noAvatar.png'}
          width={48}
          height={48}
          className={
            'rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10'
          }
        />
      </div>
      <div className={'h-20 flex flex-col gap-2 items-center'}>
        <span className={'font-semibold'}>{username}</span>

        <div className={'flex items-center gap-4'}>
          <div className={'flex'}>
            <Image
              alt={'follower image'}
              src={
                'https://images.unsplash.com/photo-1450096315186-13dc369ab43e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              width={12}
              height={12}
              className={'rounded-full object-cover w-3 h-3'}
            />
            <Image
              alt={'follower image'}
              src={
                'https://images.unsplash.com/photo-1450096315186-13dc369ab43e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              width={12}
              height={12}
              className={'rounded-full object-cover w-3 h-3'}
            />
            <Image
              alt={'follower image'}
              src={
                'https://images.unsplash.com/photo-1450096315186-13dc369ab43e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              width={12}
              height={12}
              className={'rounded-full object-cover w-3 h-3'}
            />
          </div>

          <span className={'text-xs text-gray-500'}>{user._count.followers} followers</span>
        </div>

        <Link
          href={`/profile/${user.username}`}
          className={'bg-blue-500 text-white text-xs p-2 rounded-md'}
          type={'button'}
        >
          My Profile
        </Link>
      </div>
    </section>
  );
};

export default ProfileCard;
