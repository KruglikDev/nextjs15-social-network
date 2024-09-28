import Image from 'next/image';
import Link from 'next/link';

const usersPhotos = [
  {
    id: '01',
    imgLink:
      'https://images.unsplash.com/photo-1560743173-567a3b5658b1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '02',
    imgLink:
      'https://images.unsplash.com/photo-1560743173-567a3b5658b1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '03',
    imgLink:
      'https://images.unsplash.com/photo-1560743173-567a3b5658b1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '04',
    imgLink:
      'https://images.unsplash.com/photo-1560743173-567a3b5658b1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '05',
    imgLink:
      'https://images.unsplash.com/photo-1560743173-567a3b5658b1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '06',
    imgLink:
      'https://images.unsplash.com/photo-1560743173-567a3b5658b1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const UserMediaCard = ({ userId }: { userId?: string }) => {
  return (
    <section className={'p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'}>
      {/*TOP*/}
      <div className={'flex justify-between items-center font-medium'}>
        <span className={'text-gray-500'}>User Media</span>
        <Link href={'/'} className={'text-blue-500 text-xs'}>
          See all
        </Link>
      </div>
      {/*BOTTOM*/}
      <div className={'flex gap-4 justify-between flex-wrap'}>
        {usersPhotos.map(photo => (
          <div key={photo.id} className={'relative w-1/4 h-24'}>
            <Image src={photo.imgLink} alt={'user"s photo'} fill className={'object-cover rounded-md'} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserMediaCard;
