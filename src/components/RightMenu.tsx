import Ad from '@/components/Ad';
import Birthdays from '@/components/Birthdays';
import FriendRequests from '@/components/FriendRequests';

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className={'flex flex-col gap-6'}>
      <FriendRequests />
      <Birthdays />
      <Ad size={'md'} />
    </div>
  );
};

export default RightMenu;
