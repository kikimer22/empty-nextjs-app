import Loader from '@/components/Loader';

export default async function Loading() {
  return <div className="flex-1 flex flex-col items-center justify-center min-h-[243px]"><Loader/></div>;
}
