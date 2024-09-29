import Ad from '@/components/Ad';
import Birthdays from '@/components/Birthdays';
import FriendRequests from '@/components/FriendRequests';
import UserInfoCard from '@/components/UserInfoCard';
import UserMediaCard from '@/components/UserMediaCard';
import type { User } from '@prisma/client';

const RightMenu = ({ user }: { user: User }) => {
  return (
    <div className={'flex flex-col gap-6'}>
      {user ? (
        <>
          <UserInfoCard user={user} />
          <UserMediaCard user={user} />
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ad size={'md'} />
    </div>
  );
};

export default RightMenu;
