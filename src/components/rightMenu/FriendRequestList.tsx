'use client';

import { acceptFollowRequest, declineFollowRequest } from '@/lib/actions';
import type { FollowRequest, User } from '@prisma/client';
import Image from 'next/image';
import { useOptimistic, useState } from 'react';

type FriendRequestListProps = FollowRequest & {
  sender: User;
};

const FriendRequestList = ({ requests }: { requests: FriendRequestListProps[] }) => {
  const [requestState, setRequestState] = useState(requests);
  const [optimisticRequests, removeOptimisticRequest] = useOptimistic(requestState, (state, value: number) =>
    state.filter(req => req.id !== value),
  );

  const acceptRequest = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await acceptFollowRequest(userId);
      setRequestState(prev => prev.filter(req => req.id !== requestId));
    } catch (err) {
      console.error(err);
    }
  };

  const declineRequest = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await declineFollowRequest(userId);
      setRequestState(prev => prev.filter(req => req.id !== requestId));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {optimisticRequests.map(request => {
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
              <form action={() => acceptRequest(request.id, request?.sender?.id)}>
                <button type={'submit'}>
                  <Image src={'/accept.png'} width={20} height={20} alt={'accept icon'} className={'cursor-pointer'} />
                </button>
              </form>
              <form action={() => declineRequest(request.id, request?.sender?.id)}>
                <button type={'submit'}>
                  <Image src={'/reject.png'} width={20} height={20} alt={'reject icon'} className={'cursor-pointer'} />
                </button>
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FriendRequestList;
