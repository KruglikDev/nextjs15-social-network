import Image from 'next/image';

const Post = () => {
  return (
    <article className={'flex flex-col gap-4'}>
      {/*USER*/}
      <div className={'flex items-center justify-between'}>
        <div className={'flex items-center gap-4'}>
          <Image
            src={
              'https://images.unsplash.com/photo-1514626585111-9aa86183ac98?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            className={'w-10 h-10 rounded-full object-cover'}
            width={40}
            height={40}
            alt={'User"s avatar'}
          />
          <span>Maggie Chan</span>
        </div>
        <Image className={'cursor-pointer'} alt={'more icon'} width={16} height={16} src={'/more.png'} />
      </div>
      {/*DESC*/}
      <div className={'flex flex-col gap-4'}>
        <div className={'w-full min-h-96 relative'}>
          <Image
            className={'object-cover rounded-md'}
            alt={'Post image'}
            fill
            src={
              'https://images.unsplash.com/photo-1656407900470-05e57070903a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
          />
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      {/*INTER*/}
      <div className={'flex items-center justify-between text-sm mt-4'}>
        <div className={'flex gap-8'}>
          <div className={'flex items-center gap-4 bg-slate-50 p-2 rounded-xl'}>
            <Image className={'cursor-pointer'} src={'/like.png'} alt={'Like button'} width={16} height={16} />
            <span className={'text-gray-300'}>|</span>
            <span className={'text-gray-300'}>
              123 <span className={'hidden md:inline'}>Likes</span>
            </span>
          </div>
          <div className={'flex items-center gap-4 bg-slate-50 p-2 rounded-xl'}>
            <Image className={'cursor-pointer'} src={'/comment.png'} alt={'Like button'} width={16} height={16} />
            <span className={'text-gray-300'}>|</span>
            <span className={'text-gray-300'}>
              123 <span className={'hidden md:inline'}>Comments</span>
            </span>
          </div>
        </div>
        <div>
          <div className={'flex items-center gap-4 bg-slate-50 p-2 rounded-xl'}>
            <Image className={'cursor-pointer'} src={'/share.png'} alt={'Like button'} width={16} height={16} />
            <span className={'text-gray-300'}>|</span>
            <span className={'text-gray-300'}>
              123 <span className={'hidden md:inline'}>Shares</span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
