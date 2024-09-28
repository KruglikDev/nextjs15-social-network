import Link from 'next/link';

const UserMediaCard = ({ userId }: { userId?: string }) => {
  return (
    <section className={'p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'}>
      <div className={'flex justify-between items-center font-medium'}>
        <span className={'text-gray-500'}>User Media</span>
        <Link href={'/'} className={'text-blue-500 text-xs'}>
          See all
        </Link>
      </div>
    </section>
  );
};

export default UserMediaCard;
