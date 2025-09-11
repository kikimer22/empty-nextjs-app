import { useEffect } from 'react';
import type { ActionResult } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { isSuccessResult } from '@/utils/utils';

export const useRedirectAfterAction = (state: ActionResult) => {
  const router = useRouter();

  useEffect(() => {
    if (isSuccessResult(state) && state.redirectTo) {
      const to = state.redirectTo;
      router.replace(to.startsWith('/') ? to : `/${to}`);
      router.refresh();
    }
  }, [state]);
};
