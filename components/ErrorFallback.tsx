'use client';

import React from 'react';

type Props = {
  error: Error & { digest?: string };
  action: () => void;
  title?: string;
};

export default function ErrorFallback({ error, action, title }: Props) {
  return (
    <div className="min-h-24 p-4">
      <h2 className="text-lg font-semibold">{title ?? 'Something went wrong'}</h2>
      <p className="mt-2 text-error">{error?.message ?? 'Unknown error'}</p>
      <button className="btn btn-sm btn-primary mt-3" onClick={() => action()}>Try again</button>
    </div>
  );
}
