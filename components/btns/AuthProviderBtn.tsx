import React from 'react';

type Props = {
  onClick: () => void | Promise<void>;
  children: React.ReactNode;
  className?: string;
};

export default function AuthProviderBtn({ onClick, children, className }: Props) {
  return (
    <button className={`btn w-full ${className ?? ''}`.trim()} onClick={onClick}>
      {children}
    </button>
  );
}
