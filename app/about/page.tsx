import Image from 'next/image';

export default async function Page() {
  return (
    <div className="flex-1 hero py-8 md:py-0">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <Image
              src="https://media.licdn.com/dms/image/v2/C5603AQG_6in5FuGUhw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1524643761268?e=1760572800&v=beta&t=zaUSdf8cLVeLNhWHWtyQKUFR8uJ2G1Iw9-G-PFzJZQQ"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="Ruslan Salnikov - Software Engineer"
              width={200}
              height={200}
            />
            <div>
              <h1 className="text-5xl font-bold">Software Engineer</h1>
              <p className="py-6">
                Languages: TypeScript, JavaScript, HTML(PUG), CSS(SASS, SCSS, LESS, Tailwind CSS, Styled Components).
                <br/>
                Frameworks/Libraries: Angular, React, Vue, Jest, JQuery, Bootstrap, Material UI.
                <br/>
                Engine Technologies: JS runtime, Workers, Service Workers, JS cache, CSS Houdini.
                <br/>
                Tools: Git, npm, yarn, cli, Gulp, Grunt, webpack, webstorm, vscode, postmen, ios simulator JIRA, Asana.
                <br/>
                Etc: rest API, PWA, Responsive web design, mobile-first, scrum.
              </p>
              <a className="btn btn-primary"
                 href="https://www.linkedin.com/in/ruslan-salnikov-7a93a4136/"
                 target="_blank">My linkedin</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
