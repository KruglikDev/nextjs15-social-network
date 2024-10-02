'use client';

import type { FollowRequest, User } from '@prisma/client';
import Image from 'next/image';

type FriendRequestListProps = FollowRequest & {
  sender: User;
};

const FriendRequestList = ({ requests }: { requests: FriendRequestListProps[] }) => {
  return (
    <div>
      {requests.map(request => {
        const username =
          request?.sender?.name && request?.sender?.surname
            ? `${request?.sender?.name} ${request?.sender?.surname}`
            : request?.sender?.username;

        return (
          <div key={request.id} className={'flex items-center justify-between'}>
            <div className={'flex items-center gap-4'}>
              <Image
                src={request?.sender?.avatar || '/noAvatar.png'}
                alt={username}
                width={40}
                height={40}
                className={'rounded-full w-10 h-10 object-cover'}
              />
              <span className={'font-semibold'}>{username}</span>
            </div>
            <div className={'flex gap-3 justify-end'}>
              <Image src={'/accept.png'} width={20} height={20} alt={'accept icon'} className={'cursor-pointer'} />
              <Image src={'/reject.png'} width={20} height={20} alt={'reject icon'} className={'cursor-pointer'} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FriendRequestList;
