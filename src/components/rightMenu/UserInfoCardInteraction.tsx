'use client';

import { switchFollow } from '@/lib/actions';
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
  const [optimisticFollow, setOptimisticFollow] = useOptimistic(userState, state => ({
    ...state,
    following: state.following && false,
    followingRequestSent: !state.following && !state.followingRequestSent,
  }));

  const follow = async () => {
    setOptimisticFollow('');
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

  return (
    <>
      <form action={follow}>
        <button type={'submit'} className={'w-full bg-blue-500 text-white text-sm rounded-md p-2'}>
          {optimisticFollow.following
            ? 'Following'
            : optimisticFollow.followingRequestSent
              ? 'Friend Request Sent'
              : 'Follow'}
        </button>
      </form>
      <form action='' className={'self-end'}>
        <button type={'submit'} className={'text-red-400 text-xs cursor-pointer'}>
          {optimisticFollow.blocked ? 'Unblock User' : 'Block User'}
        </button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
