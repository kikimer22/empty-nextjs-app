'use client';

import { type FC, memo } from 'react';
import NavLink from '@/components/links/NavLink';
import { ROUTES, ROUTES_NAMES } from '@/constants/routes';

type NavLinksProps = {
  signedIn: boolean;
  tabIndex?: number;
  className?: string;
};

const NavLinks: FC<NavLinksProps> = memo(
  ({ signedIn, tabIndex, className = '' }) => {

    const handleClick = () => {
      const elem = document.activeElement as HTMLElement | null;
      if (elem && typeof elem.blur === 'function') {
        elem.blur();
      }
    };

    return (
      <ul
        tabIndex={tabIndex}
        aria-label="Site navigation"
        className={`menu gap-1 ${className}`.trim()}
      >
        <li onClick={handleClick}>
          <NavLink href={ROUTES.ABOUT}>{ROUTES_NAMES.ABOUT}</NavLink>
        </li>
        {signedIn ? (
          <>
            <li onClick={handleClick}>
              <NavLink href={ROUTES.POSTS}>{ROUTES_NAMES.POSTS}</NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink href={ROUTES.USER_INFO}>{ROUTES_NAMES.USER_INFO}</NavLink>
            </li>
          </>
        ) : (
          <>
            <li onClick={handleClick}>
              <NavLink href={ROUTES.SIGN_UP}>{ROUTES_NAMES.SIGN_UP}</NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink href={ROUTES.SIGN_IN}>{ROUTES_NAMES.SIGN_IN}</NavLink>
            </li>
          </>
        )}
      </ul>
    );
  },
);

NavLinks.displayName = 'NavLinks';

export default NavLinks;
