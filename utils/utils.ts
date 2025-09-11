import { ActionResult } from '@/lib/types';

export function isSuccessResult<T = unknown>(v: ActionResult<T> | undefined): v is { ok: true; data?: T; redirectTo?: string } {
  return typeof v === 'object' && v !== null && 'ok' in v && (v as { ok?: unknown }).ok === true;
}

export function isErrorResult<T = unknown>(v: ActionResult<T> | undefined): v is { ok?: false; error: string } {
  return typeof v === 'object' && v !== null && 'error' in v && typeof (v as { error?: unknown }).error === 'string';
}
