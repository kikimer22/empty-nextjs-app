'use client';

import { usePathname } from 'next/navigation';

type UseActiveLinkProps = {
  href: string;
  commonClasses?: string;
  activeClasses?: string;
};

export function useActiveLink({
  href,
  commonClasses = 'link link-hover underline-offset-4 transition-colors duration-200',
  activeClasses = 'link-secondary font-bold',
}: UseActiveLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
  return isActive ? `${commonClasses} ${activeClasses}` : commonClasses;
}
