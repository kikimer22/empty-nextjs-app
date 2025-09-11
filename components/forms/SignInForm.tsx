'use client';

import { useActionState } from 'react';
import { signInWithCredentials } from '@/actions/auth';
import { ROUTES_NAMES } from '@/constants/routes';
import { useRedirectAfterAction } from '@/hooks/useRedirectAfterAction';
import type { ActionResult } from '@/lib/types';
import { INITIAL_ACTION_STATE } from '@/constants/constants';
import { isErrorResult } from '@/utils/utils';

export default function SignInForm() {
  const [state, formAction, isPending] = useActionState<ActionResult, FormData>(signInWithCredentials, INITIAL_ACTION_STATE);
  useRedirectAfterAction(state);

  return (
    <div className="w-full">
      <form action={formAction} className="flex flex-col gap-4">
        {/*email*/}
        <div className="form-control">
          <label className="floating-label" htmlFor="signin-email">
            <span>Email</span>
            <input id="signin-email" className="input validator w-full placeholder:select-none"
                   type="email"
                   name="email"
                   required
                   pattern="^[^@]+@[^@]+\.[^@]+$"
                   placeholder="Email"
                   title="Enter valid email address"
            />
            <div className="validator-hint hidden">Enter valid email address</div>
          </label>
        </div>
        {/*Password*/}
        <div className="form-control">
          <label className="floating-label" htmlFor="signin-password">
            <span>Password</span>
            <div className="input validator w-full">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round"
                   strokeLinecap="round"
                   strokeWidth="2.5"
                   fill="none"
                   stroke="currentColor"
                >
                  <path
                    d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                </g>
              </svg>
              <input id="signin-password" className="w-full placeholder:select-none"
                     type="password"
                     name="password"
                     required
                     placeholder="Password"
                     minLength={3}
                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                     title="Must be more than 3 characters"
              />
            </div>
            <p className="validator-hint hidden">Must be more than 3 characters</p>
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
                <span>{ROUTES_NAMES.SIGN_IN}</span>
            }
          </button>
        </div>
      </form>
      {isErrorResult(state) && state.error && (
        <div className="border-2 border-red-500 rounded-md p-4">
          <p className="text-red-500 mt-2" role="alert">{state.error}</p>
        </div>
      )}
    </div>
  );
}
