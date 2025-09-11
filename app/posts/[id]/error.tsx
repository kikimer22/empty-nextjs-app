'use client';

import ErrorFallback from '@/components/ErrorFallback';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return <ErrorFallback error={error} action={reset} title="Post Error"/>;
}
