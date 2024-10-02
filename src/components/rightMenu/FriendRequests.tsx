import FriendRequestList from '@/components/rightMenu/FriendRequestList';
import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';

const FriendRequests = async () => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) return null;
  const requests = await prisma.followRequest.findMany({
    where: {
      receiverId: currentUserId,
    },
    include: {
      sender: true,
    },
  });

  if (!requests || !requests.length) return null;

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
      <FriendRequestList requests={requests} />
    </section>
  );
};

export default FriendRequests;
