import Image from 'next/image';

const ProfileCard = () => {
  return (
    <section className={'p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'}>
      <div className={'h-20 relative'}>
        <Image
          alt={'profile image background'}
          src={
            'https://images.unsplash.com/photo-1567378890217-fb9f52e95b28?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          fill
          className={'rounded-md object-cover'}
        />
        <Image
          alt={'profile image'}
          src={
            'https://images.unsplash.com/photo-1450096315186-13dc369ab43e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          width={48}
          height={48}
          className={
            'rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10'
          }
        />
      </div>
      <div className={'h-20 flex flex-col gap-2 items-center'}>
        <span className={'font-semibold'}>Edward May</span>

        <div className={'flex items-center gap-4'}>
          <div className={'flex'}>
            <Image
              alt={'follower image'}
              src={
                'https://images.unsplash.com/photo-1450096315186-13dc369ab43e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              width={12}
              height={12}
              className={'rounded-full object-cover w-3 h-3'}
            />
            <Image
              alt={'follower image'}
              src={
                'https://images.unsplash.com/photo-1450096315186-13dc369ab43e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              width={12}
              height={12}
              className={'rounded-full object-cover w-3 h-3'}
            />
            <Image
              alt={'follower image'}
              src={
                'https://images.unsplash.com/photo-1450096315186-13dc369ab43e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              width={12}
              height={12}
              className={'rounded-full object-cover w-3 h-3'}
            />
          </div>

          <span className={'text-xs text-gray-500'}>500 followers</span>
        </div>

        <button className={'bg-blue-500 text-white text-xs p-2 rounded-md'} type={'button'}>
          My Profile
        </button>
      </div>
    </section>
  );
};

export default ProfileCard;
