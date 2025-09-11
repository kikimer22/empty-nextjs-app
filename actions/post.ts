'use server';

import type { ActionResult } from '@/lib/types';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { ROUTES } from '@/constants/routes';

export async function createPost(
  _: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const session = await auth();
  if (!session?.user?.id) return { error: 'Unauthorized' };

  const title = (formData.get('title') as string | null)?.trim() ?? '';
  const content = (formData.get('content') as string | null)?.trim() ?? '';
  if (!title || !content) return { error: 'Title and content are required' };

  try {
    const existingPosts = await prisma.post.findMany({
      where: { authorId: session.user.id },
      orderBy: { createdAt: 'asc' },
      select: { id: true },
    });

    if (existingPosts.length >= 10) {
      const oldestPostId = existingPosts[0].id;
      await prisma.post.delete({ where: { id: oldestPostId } });
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        published: true,
        authorId: session.user.id,
      },
    });
    return { ok: true, data: post.id, redirectTo: ROUTES.POST(post.id) };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to create post' };
  }
}
