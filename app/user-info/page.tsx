import { auth } from '@/auth';
import Image from 'next/image';

export default async function UserInfo() {
  const session = await auth();

  if (!session) {
    return null;
  }

  return (
    <div className="flex-1 h-full flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg p-8 bg-base-100 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold">UserInfo</h1>
        {session.user?.name && <p className="mb-3">User signed in with name: {session.user.name}</p>}
        {session.user?.email && <p className="mb-6">User signed in with email: {session.user.email}</p>}
        {session.user?.image && (
          <div className="flex justify-center">
            <Image
              src={session.user.image}
              width={48}
              height={48}
              alt={session.user.name ?? session.user.email ?? 'Avatar'}
              style={{ borderRadius: '50%' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
