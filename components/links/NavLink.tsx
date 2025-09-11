'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { useActiveLink } from '@/hooks/useActiveLink';

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export default function NavLink({ href, children, className = '', ariaLabel, ...rest }: NavLinkProps) {
  const activeClassName = useActiveLink({ href });
  return (
    <Link
      href={href}
      className={`${activeClassName} ${className}`.trim()}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </Link>
  );
}
