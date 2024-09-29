import Ad from '@/components/Ad';
import Spinner from '@/components/Spinner';
import Birthdays from '@/components/rightMenu/Birthdays';
import FriendRequests from '@/components/rightMenu/FriendRequests';
import UserInfoCard from '@/components/rightMenu/UserInfoCard';
import UserMediaCard from '@/components/rightMenu/UserMediaCard';
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
