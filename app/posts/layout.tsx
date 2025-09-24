import { ReactNode } from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import ColorTitle from '@/components/ColorTitle';
import CreatePostLink from '@/components/links/CreatePostLink';
import { ROUTES } from '@/constants/routes';
import { Post } from '@/lib/types';

export default async function PostsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-10 gap-4 py-4">
      <aside className="order-2 md:order-1 md:col-span-3">
        <PostsList/>
      </aside>
      <main className="order-1 md:order-2 md:col-span-7">
        {children}
      </main>
    </div>
  );
}

async function PostsList() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: true },
    orderBy: { createdAt: 'desc' },
    take: 10,
  }) as Post[] | null;

  if (!posts) {
    return (
      <div className="alert alert-error">
        Failed to load posts.
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="flex justify-between items-center mb-2">
          <h2 className="card-title">Posts</h2>
          <CreatePostLink />
        </div>
        <RenderPostsListOrEmptyState posts={(posts as Post[])}/>
      </div>
    </div>
  );
}

const RenderPostsListOrEmptyState = ({ posts }: { posts: Post[] }) => {
  console.log(posts);
  if (posts.length === 0) {
    return (
      <div className="alert alert-info">
        No posts...
      </div>
    );
  }

  const postLength = posts.length > 10 ? 10 : posts.length;

  return (
    <ul className="list rounded-box bg-base-100 shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Last {postLength} posts</li>
      {posts.map(({ id, title, author }, index) => (
        <li key={id}>
          <Link href={ROUTES.POST(id)} className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">{posts.length - index}</div>
            <div className="list-col-grow">
              <ColorTitle id={id} className="font-bold">{title}</ColorTitle>
              <div className="text-xs font-semibold opacity-60">by <span
                className="uppercase">{author.name ?? author.email}</span></div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
