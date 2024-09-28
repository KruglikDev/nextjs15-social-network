import Image from 'next/image';

const Comments = () => {
  return (
    <div>
      {/*WRITE*/}
      <div className={'flex items-center gap-4'}>
        <Image
          src={
            'https://images.unsplash.com/photo-1627817227571-91d46ce1194e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt={'user avatar'}
          width={32}
          height={32}
          className={'w-8 h-8 rounded-full'}
        />
        <div className={'flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'}>
          <input type='text' placeholder={'Write a comment...'} className={'bg-transparent outline-none flex-1'} />
          <Image src={'/emoji.png'} alt={'emoji icon'} width={16} height={16} className={'cursor-pointer'} />
        </div>
      </div>
      {/*COMMENTS*/}
      <div>
        {/*COMMENT*/}
        <div className={'flex gap-4 justify-between mt-6'}>
          {/*AVATAR*/}
          <Image
            src={
              'https://images.unsplash.com/photo-1627817227571-91d46ce1194e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt={'user avatar'}
            width={40}
            height={40}
            className={'w-10 h-10 rounded-full'}
          />
          {/*DESC*/}
          <div className={'flex flex-col gap-2 flex-1'}>
            <span className={'font-medium'}>Bernie Sanders</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa dolor esse exercitationem
              impedit ipsa laboriosam repudiandae voluptatum? A architecto earum explicabo fugiat possimus. Aliquam
              delectus molestias quo soluta temporibus.
            </p>
            <div className={'flex items-center gap-8 text-xs text-gray-500 mt-2'}>
              <div className={'flex items-center gap-4'}>
                <Image
                  alt={'like icon'}
                  src={'/like.png'}
                  width={12}
                  height={12}
                  className={'cursor-pointer w-4 h-4'}
                />
                <span className={'text-gray-300'}>|</span>
                <span className={'text-gray-500'}>123 Likes</span>
              </div>
              <div>Reply</div>
            </div>
          </div>
          {/*ICON*/}
          <Image alt={'more icon'} src={'/more.png'} width={16} height={16} className={'cursor-pointer w-4 h-4'} />
        </div>
      </div>
    </div>
  );
};

export default Comments;
