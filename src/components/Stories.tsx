import Image from 'next/image';

const stories = [
  {
    id: 0,
    name: 'Ricky',
    imgLink:
      'https://images.unsplash.com/photo-1653849551287-9f09ce356d0c?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 1,
    name: 'Lily',
    imgLink:
      'https://images.unsplash.com/photo-1717834811178-6b1d9c8d6df1?q=80&w=1495&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Jordan',
    imgLink:
      'https://images.unsplash.com/photo-1706397095754-8a5dfa87c2b7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Olivia',
    imgLink:
      'https://images.unsplash.com/photo-1619033742043-b9a1adf35b30?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Michael',
    imgLink:
      'https://images.unsplash.com/photo-1718135315033-62a429ecc78c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Stories = () => {
  return (
    <section className={'p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide'}>
      <div className={'flex gap-8 w-max'}>
        {stories.map(story => {
          return (
            <div key={story.id} className={'flex flex-col items-center gap-2 cursor-pointer'}>
              <Image
                alt={'Story image'}
                width={80}
                height={80}
                className={'w-20 h-20 rounded-full ring-2 object-cover hover:ring-4'}
                src={story.imgLink}
              />
              <span className={'font-medium'}>{story.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stories;
