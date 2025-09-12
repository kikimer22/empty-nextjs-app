export default function PostsPage() {
  return (
    <div className="prose p-6 flex flex-col items-center justify-center h-full">
      <div className="card bg-base-100 w-full md:w-80 shadow-md">
        <article className="card-body">
          <h1 className="card-title">Select post</h1>
          <p className="text-sm text-gray-500">or Create</p>
        </article>
      </div>
    </div>
  );
}
