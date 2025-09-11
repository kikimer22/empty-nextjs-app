'use client';

import { memo } from 'react';
import { logOut } from '@/actions/auth';

interface SignOutBtnProps {
  className?: string;
}

export default memo(function SignOutBtn({ className }: SignOutBtnProps) {
  return (
    <button
      onClick={logOut}
      className={className}
    >
      Sign Out
    </button>
  );
});
