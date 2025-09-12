'use client';

import Image from 'next/image';
import NavLink from '@/components/links/NavLink';
import SignOutBtn from '@/components/btns/SignOutBtn';
import { Session } from 'next-auth';

interface Props {
  session: Session | null;
}

export default function UserDropdown({ session }: Props) {
  const handleClick = () => {
    const elem = document.activeElement as HTMLElement | null;
    if (elem && typeof elem.blur === 'function') {
      elem.blur();
    }
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar placeholder">
        {session?.user?.image ? (
          <div className="w-10 rounded-full">
            <Image
              src={session.user.image}
              width={40}
              height={40}
              alt={session.user.name ?? 'Avatar'}
            />
          </div>
        ) : (
          <div className="bg-neutral text-neutral-content rounded-full w-10">
            <h4
              className="text-3xl text-primary">{session?.user?.name?.[0]?.toUpperCase() ?? session?.user?.email?.[0]?.toUpperCase() ?? 'X'}</h4>
          </div>
        )}
      </div>
      <div className="dropdown-content rounded-box z-[1] mt-3 w-56 p-2 shadow bg-base-200">
        {session &&
          <h4 className="pt-2 px-6 mb-1 text-xl text-primary">{session.user?.name ?? session.user?.email}</h4>
        }
        <ul tabIndex={0} className="menu menu-lg">
          <li onClick={handleClick}>
            {session ? (
              <SignOutBtn className="link link-hover"/>
            ) : (
              <NavLink href="/auth/signin">Sign In</NavLink>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
