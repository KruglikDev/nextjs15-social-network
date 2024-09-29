import Ad from '@/components/Ad';
import Birthdays from '@/components/Birthdays';
import FriendRequests from '@/components/FriendRequests';
import Spinner from '@/components/Spinner';
import UserInfoCard from '@/components/UserInfoCard';
import UserMediaCard from '@/components/UserMediaCard';
import type { User } from '@prisma/client';
import { Suspense } from 'react';

const RightMenu = ({ user }: { user: User }) => {
  return (
    <div className={'flex flex-col gap-6'}>
      {user ? (
        <>
          <Suspense fallback={<Spinner />}>
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback={<Spinner />}>
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ad size={'md'} />
    </div>
  );
};

export default RightMenu;
