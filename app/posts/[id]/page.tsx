import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const post = await prisma.post.findUnique({
    where: { id },
    include: { author: true },
  });

  if (!post || !post.published) return notFound();

  return (
    <div className="prose p-6">
      <div className="card bg-base-100 shadow-md">
        <article className="card-body">
          <h1 className="card-title">{post.title}</h1>
          <p className="text-sm text-gray-500">by: {post.author.name ?? post.author.email}</p>
          <div className="divider"></div>
          <div className="text-xl">{post.content}</div>
        </article>
      </div>
    </div>
  );
}
