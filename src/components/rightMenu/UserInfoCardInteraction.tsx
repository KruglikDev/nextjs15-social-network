'use client';

import { switchBlock, switchFollow } from '@/lib/actions';
import { useOptimistic, useState } from 'react';

type UserInfoCardInteractionProps = {
  userId: string;
  currentUserId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
};

const UserInfoCardInteraction = ({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: UserInfoCardInteractionProps) => {
  const [userState, setUserState] = useState({
    blocked: isUserBlocked,
    following: isFollowing,
    followingRequestSent: isFollowingSent,
  });
  const [optimisticState, setOptimisticState] = useOptimistic(userState, (state, value: 'follow' | 'block') =>
    value === 'follow'
      ? {
          ...state,
          following: state.following && false,
          followingRequestSent: !state.following && !state.followingRequestSent,
        }
      : {
          ...state,
          blocked: !state.blocked,
        },
  );

  const follow = async () => {
    setOptimisticState('follow');
    try {
      await switchFollow(userId);
      setUserState(prevState => ({
        ...prevState,
        following: prevState.following && false,
        followingRequestSent: !prevState.following && !prevState.followingRequestSent,
      }));
    } catch (err) {
      console.error(err);
    }
  };

  const block = async () => {
    setOptimisticState('block');
    try {
      await switchBlock(userId);
      setUserState(prevState => ({
        ...prevState,
        blocked: !prevState.blocked,
      }));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form action={follow}>
        <button type={'submit'} className={'w-full bg-blue-500 text-white text-sm rounded-md p-2'}>
          {optimisticState.following
            ? 'Following'
            : optimisticState.followingRequestSent
              ? 'Friend Request Sent'
              : 'Follow'}
        </button>
      </form>
      <form action={block} className={'self-end'}>
        <button type={'submit'} className={'text-red-400 text-xs cursor-pointer'}>
          {optimisticState.blocked ? 'Unblock User' : 'Block User'}
        </button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
