import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';
import type { User } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

const UserInfoCard = async ({ user }: { user: User }) => {
  const username = user.name && user.surname ? `${user.name} ${user.surname}` : user.username;
  const createdAtDate = new Date(user.createdAt);
  const formattedDate = createdAtDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;
  const { userId: currentUserId } = auth();

  if (currentUserId) {
    const blockRes = await prisma.block.findFirst({
      where: {
        // Кто блокировал Id
        blockerId: currentUserId,
        // Список заблокированных
        blockedId: user.id,
      },
    });
    if (blockRes) {
      isUserBlocked = true;
    } else {
      isUserBlocked = false;
    }
    const followingRes = await prisma.follower.findFirst({
      where: {
        // The ID of the user who is following another user
        followerId: currentUserId,
        // The ID of the user being followed
        followingId: user.id,
      },
    });
    if (followingRes) {
      isFollowing = true;
    } else {
      isFollowing = false;
    }
    const followingSentRes = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user.id,
      },
    });
    if (followingSentRes) {
      isFollowingSent = true;
    } else {
      isFollowingSent = false;
    }
  }

  return (
    <section className={'p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'}>
      {/*TOP*/}
      <div className={'flex justify-between items-center font-medium'}>
        <span className={'text-gray-500'}>User Information</span>
        <Link href={'/'} className={'text-blue-500 text-xs'}>
          See all
        </Link>
      </div>
      {/*BOTTOM*/}
      <div className={'flex flex-col gap-4 text-gray-500'}>
        <div className={'flex items-center gap-2'}>
          <span className={'text-xl text-black'}>{username}</span>
          <span className={'text-sm'}>@{user.username}</span>
        </div>
        {user.description && <p>{user.description}</p>}
        {user.city && (
          <div className={'flex items-center gap-2'}>
            <Image src={'/map.png'} alt={'Map icon'} width={16} height={16} />
            <span>
              Living in <b>{user.city}</b>
            </span>
          </div>
        )}
        {user.school && (
          <div className={'flex items-center gap-2'}>
            <Image src={'/school.png'} alt={'School icon'} width={16} height={16} />
            <span>
              Went to <b>{user.school}</b>
            </span>
          </div>
        )}
        {user.work && (
          <div className={'flex items-center gap-2'}>
            <Image src={'/work.png'} alt={'Work icon'} width={16} height={16} />
            <span>
              Works at <b>{user.work}</b>
            </span>
          </div>
        )}

        <div className={'flex items-center justify-between flex-wrap'}>
          {user.website && (
            <div className={'flex gap-1 items-center'}>
              <Image src={'/link.png'} alt={'Link icon'} width={16} height={16} />
              <Link className={'text-blue-500 font-medium'} href={user.website}>
                {user.website}
              </Link>
            </div>
          )}

          <div className={'flex gap-1 items-center'}>
            <Image src={'/date.png'} alt={'date icon'} width={16} height={16} />
            <span>Joined {formattedDate}</span>
          </div>
        </div>

        <button type={'button'} className={'bg-blue-500 text-white text-sm rounded-md p-2'}>
          Follow
        </button>
        <span className={'text-red-400 self-end text-xs cursor-pointer'}>Block User</span>
      </div>
    </section>
  );
};

export default UserInfoCard;
