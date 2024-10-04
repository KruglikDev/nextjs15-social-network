import StoryList from '@/StoryList';
import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';

const Stories = async () => {
  const { userId } = auth();

  if (!userId) return;

  const stories = await prisma.story.findMany({
    where: {
      expiresAt: {
        gt: new Date(),
      },
      OR: [
        {
          user: {
            followers: {
              some: {
                followerId: userId,
              },
            },
          },
        },
        {
          userId: userId,
        },
      ],
    },
    include: {
      user: true,
    },
  });

  return (
    <section className={'p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide'}>
      <div className={'flex gap-8 w-max'}>
        <StoryList stories={stories} />
      </div>
    </section>
  );
};

export default Stories;
