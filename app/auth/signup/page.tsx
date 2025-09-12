import BackBtn from '@/components/btns/BackBtn';
import GoogleBtn from '@/components/btns/GoogleBtn';
import GithubBtn from '@/components/btns/GithubBtn';
import SignUpForm from '@/components/forms/SignUpForm';
import Link from 'next/link';
import { ROUTES, ROUTES_NAMES } from '@/constants/routes';

export default async function SignUpPage() {
  return (
    <div
      className="flex-1 bg-base-200 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Brand / Illustration */}
        <div className="hidden lg:flex">
          <div className="card bg-base-100 shadow-xl w-full p-8 gap-6 justify-center">
            <h2 className="text-3xl font-bold">Create your account</h2>
            <p className="opacity-70">Sign up...</p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
              <div className="stat place-items-center bg-base-200 rounded-box p-4">
                <div className="stat-title">Clean</div>
              </div>
              <div className="stat place-items-center bg-base-200 rounded-box p-4">
                <div className="stat-title">Secure</div>
              </div>
              <div className="stat place-items-center bg-base-200 rounded-box p-4">
                <div className="stat-title">Free</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Auth Card */}
        <div className="card bg-base-100 shadow-2xl border border-base-200">
          <div className="card-body p-8">
            <div className="mb-2">
              <BackBtn/>
            </div>
            <div className="text-center mb-4">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <p className="text-sm opacity-70">Hallo new friend!</p>
            </div>

            <div className="flex flex-col gap-3">
              <GoogleBtn/>
              <GithubBtn/>
            </div>

            <div className="divider my-6">Or create with email</div>

            <SignUpForm/>

            <div className="mt-6 text-center text-sm opacity-70">
              By signing up, you agree to our <span className="link">Terms</span> and <span className="link">Privacy Policy</span>.
            </div>

            <div className="mt-4 text-center">
              <p className="opacity-70">Already have an account?</p>
              <Link href={ROUTES.SIGN_IN} className="link link-primary font-medium">{ROUTES_NAMES.SIGN_IN}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
