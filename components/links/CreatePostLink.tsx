'use client';

import Link from 'next/link';
import { ROUTES, ROUTES_NAMES } from '@/constants/routes';
import { usePathname } from 'next/navigation';

export default function CreatePostLink() {
  const pathname = usePathname();
  const isCreate = pathname === ROUTES.CREATE_POST;
  return (
    <Link
      href={ROUTES.CREATE_POST}
      className={`btn btn-sm btn-primary${isCreate ? ' btn-disabled pointer-events-none opacity-50' : ''}`}
      aria-disabled={isCreate}
      tabIndex={isCreate ? -1 : 0}
    >
      {ROUTES_NAMES.CREATE_POST}
    </Link>
  );
}
