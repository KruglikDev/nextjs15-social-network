import Image from 'next/image';
import Link from 'next/link';

const UserInfoCard = ({ userId }: { userId?: string }) => {
  return (
    <section className={'p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'}>
      {/*TOP*/}
      <div className={'flex justify-between items-center font-medium'}>
        <span className={'text-gray-500'}>User Information</span>
        <Link href={'/'} className={'text-blue-500 text-xs'}>
          See all
        </Link>
      </div>
      {/*BOTTOM*/}
      <div className={'flex flex-col gap-4 text-gray-500'}>
        <div className={'flex items-center gap-2'}>
          <span className={'text-xl text-black'}>Jan Fleming</span>
          <span className={'text-sm'}>@julius</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias aliquid assumenda beatae dicta
          eligendi est excepturi incidunt laboriosam nam nobis numquam obcaecati praesentium provident quae ratione
          vitae! Dolores, praesentium!
        </p>
        <div className={'flex items-center gap-2'}>
          <Image src={'/map.png'} alt={'Map icon'} width={16} height={16} />
          <span>
            Living in <b>Denver</b>
          </span>
        </div>
        <div className={'flex items-center gap-2'}>
          <Image src={'/school.png'} alt={'School icon'} width={16} height={16} />
          <span>
            Went to <b>Denver High School</b>
          </span>
        </div>
        <div className={'flex items-center gap-2'}>
          <Image src={'/work.png'} alt={'Work icon'} width={16} height={16} />
          <span>
            Works at <b>Apple Inc.</b>
          </span>
        </div>

        <div className={'flex items-center justify-between flex-wrap'}>
          <div className={'flex gap-1 items-center'}>
            <Image src={'/link.png'} alt={'Link icon'} width={16} height={16} />
            <Link className={'text-blue-500 font-medium'} href={'https://lama.dev'}>
              lama.dev
            </Link>
          </div>

          <div className={'flex gap-1 items-center'}>
            <Image src={'/date.png'} alt={'date icon'} width={16} height={16} />
            <span>Joined November 2025</span>
          </div>
        </div>

        <button type={'button'} className={'bg-blue-500 text-white text-sm rounded-md p-2'}>
          Follow
        </button>
        <span className={'text-red-400 self-end text-xs cursor-pointer'}>Block User</span>
      </div>
    </section>
  );
};

export default UserInfoCard;
