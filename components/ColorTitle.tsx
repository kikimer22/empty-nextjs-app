'use client';

import { ReactNode } from 'react';
import { useActiveLink } from '@/hooks/useActiveLink';
import { ROUTES } from '@/constants/routes';

interface ColorTitleProps {
  id: string;
  className?: string;
  children?: ReactNode;
}

export default function ColorTitle({ id, className = '', children }: ColorTitleProps) {
  const activeClass = useActiveLink({ href: ROUTES.POST(id) });
  return (
    <h4 className={`${activeClass} ${className}`.trim()}>{children}</h4>
  );
}

