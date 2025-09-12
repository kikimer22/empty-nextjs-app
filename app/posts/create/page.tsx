import CreatePostForm from '@/components/forms/CreatePostForm';

export default function CreatePostPage() {
  return (
    <div className="max-w-xl mx-auto py-4 px-6 md:py-8 md:px-0">
      <h1 className="text-2xl font-bold mb-4">Create post</h1>
      <CreatePostForm/>
    </div>
  );
}
