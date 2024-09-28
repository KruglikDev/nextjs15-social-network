import Image from 'next/image';

type AdSizeProps = {
  size: 'sm' | 'md' | 'lg';
};

const Ad = ({ size }: AdSizeProps) => {
  const cutTextLenght = (text: string) => {
    if (size === 'sm') {
      return text.slice(0, 30);
    }
    if (size === 'md') {
      return text.slice(0, 100);
    }
    return text;
  };

  return (
    <div className={'p-4 bg-white rounded-lg shadow-md text-sm'}>
      {/*TOP*/}
      <div className={'flex items-center justify-between text-gray-500 font-medium'}>
        <span>Sponsored Ads</span>
        <Image src={'/more.png'} alt={'more icon'} width={16} height={16} />
      </div>
      {/*BOTTOM*/}
      <div className={`flex flex-col mt-4 ${size === 'sm' ? 'gap-2' : 'gap-4'}`}>
        <div className={`relative w-full ${size === 'sm' ? 'h-24' : size === 'md' ? 'h-36' : 'h-48'}`}>
          <Image
            src={
              'https://images.unsplash.com/photo-1554456854-55a089fd4cb2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt={'ad image'}
            fill
            className={'rounded-lg object-cover'}
          />
        </div>
        <div className={'flex items-center gap-4'}>
          <Image
            src={
              'https://images.unsplash.com/photo-1554456854-55a089fd4cb2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt={'ad image small'}
            width={24}
            height={24}
            className={'rounded-full w-6 h-6 object-cover'}
          />
          <span className={'text-blue-500 font-medium'}>BigChef Lounge</span>
        </div>
        <p className={size === 'sm' ? 'text-xs' : 'text-sm'}>
          {cutTextLenght(
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores, aspernatur dicta dolor doloremque\n' +
              '          explicabo fugit ipsum magnam neque perferendis praesentium provident quaerat, quam quos recusandae sapiente\n' +
              '          similique ut voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores, aspernatur dicta dolor doloremque\n' +
              '          explicabo fugit ipsum magnam neque perferendis praesentium provident quaerat, quam quos recusandae sapiente\n' +
              '          similique ut voluptatem.',
          )}
        </p>
        <button type={'button'} className={'bg-gray-200 text-gray-500 p-2 text-xs rounded-lg'}>
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ad;
