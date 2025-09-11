'use client';

import Link from 'next/link';
import { useActiveLink } from '@/hooks/useActiveLink';
import { ROUTES } from '@/constants/routes';

interface PostLinkProps {
  id: string;
  title: string;
  className?: string;
}

export default function PostLink({ id, title, className = '' }: PostLinkProps) {
  const activeClass = useActiveLink({ href: ROUTES.POST(id) });
  return (
    <Link href={ROUTES.POST(id)} className={`${activeClass} ${className}`.trim()}>
      <span className="font-bold">{title}</span>
    </Link>
  );
}

