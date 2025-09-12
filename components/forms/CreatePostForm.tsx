'use client';

import { useActionState } from 'react';
import { createPost } from '@/actions/post';
import { useRedirectAfterAction } from '@/hooks/useRedirectAfterAction';
import type { ActionResult } from '@/lib/types';
import { INITIAL_ACTION_STATE } from '@/constants/constants';
import { isErrorResult } from '@/utils/utils';

export default function CreatePostForm() {
  const [state, formAction, isPending] = useActionState<ActionResult, FormData>(createPost, INITIAL_ACTION_STATE);
  useRedirectAfterAction(state);

  return (
    <form action={formAction} className="space-y-4">
      {/*title*/}
      <div className="form-control">
        <label className="floating-label text-base" htmlFor="create-post-title">
          <span>Title</span>
          <input id="create-post-title" className="input input-lg validator w-full placeholder:select-none"
                 type="text"
                 name="title"
                 required
                 minLength={1}
                 placeholder="Title"
                 title="Title is required"
          />
          <div className="validator-hint hidden">Title is required</div>
        </label>
      </div>
      {/*content*/}
      <div className="form-control">
        <label className="floating-label text-base" htmlFor="create-post-content">
          <span>Content</span>
          <textarea
            id="create-post-content"
            name="content"
            required
            minLength={1}
            className="textarea textarea-lg textarea-bordered w-full"
            rows={6}
            placeholder="Content"
            title="Content is required"
          />
        </label>
      </div>
      {/*submit*/}
      <div className="form-control">
        <button className="btn btn-primary w-full"
                disabled={isPending}
                type="submit"
        >
          {
            isPending ?
              <span className="loading loading-spinner loading-md text-primary"></span> :
              <span>Creat</span>
          }
        </button>
      </div>
      {isErrorResult(state) && state.error && (
        <div className="border-2 border-red-500 rounded-md p-4">
          <p className="text-red-500 mt-2" role="alert">{state.error}</p>
        </div>
      )}
    </form>
  );
};
