'use client';

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
  return (
    <>
      <form action=''>
        <button type={'submit'} className={'w-full bg-blue-500 text-white text-sm rounded-md p-2'}>
          {isFollowing ? 'Following' : isFollowingSent ? 'Friend Request Sent' : 'Follow Request'}
        </button>
      </form>
      <form action='' className={'self-end'}>
        <button type={'submit'} className={'text-red-400 text-xs cursor-pointer'}>
          {isUserBlocked ? 'Unblock User' : 'Block User'}
        </button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
