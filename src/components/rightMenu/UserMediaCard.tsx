import prisma from '@/lib/client';
import type { User } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

const UserMediaCard = async ({ user }: { user: User }) => {
  const postWithMedia = await prisma.post.findMany({
    where: {
      userId: user.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: 'desc',
    },
  });

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
      <div className={'flex gap-4 flex-wrap'}>
        {postWithMedia.length
          ? postWithMedia.map(post => (
              <div key={post.id} className={'relative w-1/4 h-24'}>
                {post.img && <Image src={post.img} alt={post.desc} fill className={'object-cover rounded-md'} />}
              </div>
            ))
          : 'No media found'}
      </div>
    </section>
  );
};

export default UserMediaCard;
