import { auth } from '@/auth';

export default async function IndexPage() {
  const session = await auth();

  return (
    <div
      className="flex-1 hero"
      style={{
        backgroundImage:
          'url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)',
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello, <span className="text-secondary text-6xl">{session?.user?.name ?? 'Guest'}</span></h1>
          <p className="mb-5">
            This is my small Demo
          </p>
        </div>
      </div>
    </div>
  );
}
