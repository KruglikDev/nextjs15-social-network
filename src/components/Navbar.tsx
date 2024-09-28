import MobileMenu from '@/components/MobileMenu';
import Spinner from '@/components/Spinner';
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={'h-24 flex items-center justify-between'}>
      <div className={'md:hidden lg:block w-[20%]'}>
        <Link className={'font-bold text-xl text-blue-600'} href={'/'}>
          LAMASOCIAL
        </Link>
      </div>

      <div className={'hidden md:flex w-[50%] text-sm'}>
        <div className={'flex gap-6 text-gray-600 items-center'}>
          <Link className={'flex gap-2 items-center'} href={'/'}>
            <Image width={16} height={16} src={'/home.png'} alt={'HomePage'} />
            <span>HomePage</span>
          </Link>
          <Link className={'flex gap-2 items-center'} href={'/'}>
            <Image width={16} height={16} src={'/friends.png'} alt={'Friends'} />
            <span>Friends</span>
          </Link>
          <Link className={'flex gap-2 items-center'} href={'/'}>
            <Image width={16} height={16} src={'/stories.png'} alt={'Stories'} />
            <span>Stories</span>
          </Link>
        </div>
      </div>

      <div className={'w-[30%] flex items-center gap-4 xl:gap-8 justify-end'}>
        <ClerkLoading>
          <Spinner />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className={'cursor-pointer'}>
              <Image width={20} height={20} src={'/people.png'} alt={'People'} />
            </div>
            <div className={'cursor-pointer'}>
              <Image width={20} height={20} src={'/messages.png'} alt={'Messages'} />
            </div>
            <div className={'cursor-pointer'}>
              <Image width={20} height={20} src={'/notifications.png'} alt={'Notifications'} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className={'flex items-center gap-2 text-sm cursor-pointer'}>
              <Image width={20} height={20} src={'/people.png'} alt={'Login'} />
              <Link href={'/sign-in'}>Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
