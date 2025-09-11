import { memo } from 'react';

const Loader = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full">
      <div className="text-center">
        <span className="loading loading-spinner loading-xl text-primary"></span>
        <p className="mt-4 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default memo(Loader);
