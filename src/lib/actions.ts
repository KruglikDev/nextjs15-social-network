'use server';

import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export const switchFollow = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error('User is not authenticated');

  try {
    const existingFollow = await prisma.follower.findFirst({
      where: { followerId: currentUserId, followingId: userId },
    });

    if (existingFollow) {
      await prisma.follower.delete({
        where: { id: existingFollow.id },
      });
    } else {
      const existingFollowRequest = await prisma.followRequest.findFirst({
        where: { senderId: currentUserId, receiverId: userId },
      });

      if (existingFollowRequest) {
        await prisma.followRequest.delete({ where: { id: existingFollowRequest.id } });
      } else {
        await prisma.followRequest.create({
          data: { senderId: currentUserId, receiverId: userId },
        });
      }
    }
  } catch (err) {
    console.error(err);
    throw new Error('Something went wrong');
  }
};

export const switchBlock = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error('User is not authenticated');

  try {
    const existingBlock = await prisma.block.findFirst({
      where: { blockerId: currentUserId, blockedId: userId },
    });

    if (existingBlock) {
      await prisma.block.delete({ where: { id: existingBlock.id } });
    } else {
      await prisma.block.create({
        data: { blockerId: currentUserId, blockedId: userId },
      });
    }
  } catch (err) {
    console.error(err);
    throw new Error('Something went wrong');
  }
};

export const acceptFollowRequest = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error('User is not authenticated');

  try {
    const existingRequest = await prisma.followRequest.findFirst({
      where: { senderId: userId, receiverId: currentUserId },
    });

    if (existingRequest) {
      await prisma.followRequest.delete({
        where: {
          id: existingRequest.id,
        },
      });

      await prisma.follower.create({
        data: {
          followerId: userId,
          followingId: currentUserId,
        },
      });
    }
  } catch (err) {
    console.error(err);
    throw new Error('Something went wrong');
  }
};

export const declineFollowRequest = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error('User is not authenticated');

  try {
    const existingRequest = await prisma.followRequest.findFirst({
      where: { senderId: userId, receiverId: currentUserId },
    });

    if (existingRequest) {
      await prisma.followRequest.delete({
        where: {
          id: existingRequest.id,
        },
      });
    }
  } catch (err) {
    console.error(err);
    throw new Error('Something went wrong');
  }
};

export const updateProfile = async (
  _prevState: { success: boolean; error: boolean },
  payload: { formData: FormData },
) => {
  const { formData } = payload;
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error('User is not authenticated');

  const fields = Object.fromEntries(formData);
  const filteredFields = Object.fromEntries(Object.entries(fields).filter(([_key, value]) => value !== ''));

  const Profile = z.object({
    cover: z.string().optional(),
    name: z.string().max(60).optional(),
    surname: z.string().max(60).optional(),
    description: z.string().max(255).optional(),
    city: z.string().max(60).optional(),
    school: z.string().max(60).optional(),
    work: z.string().max(60).optional(),
    website: z.string().max(60).optional(),
  });

  const validatedFields = Profile.safeParse(filteredFields);

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return { success: false, error: true };
  }

  try {
    await prisma.user.update({
      where: { id: currentUserId },
      data: validatedFields.data,
    });
    return { success: true, error: false };
  } catch (err) {
    console.error(err);
    return { success: false, error: true };
  }
};

export const switchLike = async (postId: number) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error('User is not authenticated');

  try {
    const existingLike = await prisma.like.findFirst({
      where: { postId: postId, userId: currentUserId },
    });

    if (existingLike) {
      await prisma.like.delete({
        where: {
          id: existingLike.id,
        },
      });
    } else {
      await prisma.like.create({
        data: { postId: postId, userId: currentUserId },
      });
    }
  } catch (err) {
    console.error(err);
    throw new Error('Something went wrong');
  }
};

export const addComment = async (postId: number, desc: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error('User is not authenticated');

  try {
    const createdComment = await prisma.comment.create({
      data: { postId: postId, userId: currentUserId, desc: desc },
      include: {
        user: true,
      },
    });

    return createdComment;
  } catch (err) {
    console.error(err);
    throw new Error('Something went wrong');
  }
};

export const addPost = async (formData: FormData, img: string) => {
  const { userId: currentUserId } = auth();
  const text = formData.get('desc') as string;

  const Desc = z.string().min(1).max(255);
  const validatedDesc = Desc.safeParse(text);

  if (!validatedDesc.success) {
    return 'Text must be from 1 to 255 chars long';
  }
  if (!currentUserId) throw new Error('User is not authenticated');

  try {
    await prisma.post.create({
      data: { userId: currentUserId, desc: validatedDesc.data, img },
    });

    revalidatePath('/');
  } catch (err) {
    console.error(err);
    throw new Error('Something went wrong');
  }
};

export const addStory = async (img: string) => {
  const { userId: currentUserId } = auth();

  const Img = z.string().min(6).max(255);
  const validatedImg = Img.safeParse(img);

  if (!validatedImg.success) {
    return 'Invalid image link';
  }
  if (!currentUserId) throw new Error('User is not authenticated');

  try {
    const existingStory = await prisma.story.findFirst({
      where: { userId: currentUserId },
    });

    if (existingStory) {
      await prisma.story.delete({
        where: { id: existingStory.id },
      });
    }

    const createdStory = await prisma.story.create({
      data: { userId: currentUserId, img: validatedImg.data, expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) },
      include: {
        user: true,
      },
    });

    return createdStory;
  } catch (err) {
    console.error(err);
    throw new Error('Something went wrong');
  }
};

export const deletePost = async (postId: number) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error('User is not authenticated');

  try {
    await prisma.post.delete({
      where: { id: postId, userId: currentUserId },
    });

    revalidatePath('/');
  } catch (err) {
    console.error(err);
    throw new Error('Something went wrong');
  }
};
