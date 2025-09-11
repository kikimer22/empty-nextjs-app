import Link from 'next/link';
import { auth } from '@/auth';
import ThemeController from '@/components/ThemeController';
import NavLinks from '@/components/NavLinks';
import UserDropdown from '@/components/UserDropdown';
import { ROUTES } from '@/constants/routes';
import { memo } from 'react';

const Header = async () => {
  const session = await auth();

  return (
    <header
      className="navbar bg-base-100 backdrop-blur supports-[backdrop-filter]:bg-base-100/70 sticky top-0 z-30 border-b border-base-200 gap-4">
      <div className="max-lg:flex-1 lg:navbar-start gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" aria-label="Open menu" className="btn btn-ghost btn-square lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </div>
          <div tabIndex={0} className="dropdown-content mt-3 z-[1] p-2">
            {/* Mobile menu */}
            <ul className=" ">
              <NavLinks signedIn={!!session}
                        className={'menu-md menu-vertical px-1 shadow bg-base-100 rounded-box min-w-32'}/>
            </ul>
          </div>
        </div>
        <Link href={ROUTES.HOME}
              className="link link-ghost text-md lg:text-xl font-black text-primary no-underline">
          Demo by Salnikov Ruslan
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <NavLinks signedIn={!!session} tabIndex={0} className="menu-lg menu-horizontal px-1"/>
      </div>
      <div className="flex lg:navbar-end gap-2 lg:gap-4">
        <ThemeController/>
        <UserDropdown session={session}/>
      </div>
    </header>
  );
};

export default memo(Header);
