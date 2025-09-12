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
              <h1 className="text-5xl font-bold mb-8">Software Engineer</h1>

              <div className="md:hidden">
                <h4 className="text-xl mb-4 text-primary">Languages:</h4>
                <ul className="timeline timeline-vertical mb-8">
                  <li>
                    <div className="timeline-start timeline-box text-secondary">TypeScript</div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-end timeline-box">JavaScript</div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-start timeline-box">HTML(PUG)</div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-end timeline-box">CSS(SASS, SCSS, LESS)</div>
                    <hr />
                  </li>
                </ul>
                <h4 className="text-xl mb-4 text-primary">Frameworks/Libraries:</h4>
                <ul className="timeline timeline-vertical mb-8">
                  <li>
                    <div className="timeline-start timeline-box text-secondary">React</div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-end timeline-box">Angular</div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-start timeline-box">Vue</div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-end timeline-box">Playwright, <br/> Vitest, <br/> Jest</div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-start timeline-box">Storybook</div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-end timeline-box">Tailwind, <br/> Daisy UI, <br/> Material UI, <br/> Bootstrap</div>
                    <hr />
                  </li>
                </ul>
                <h4 className="text-xl mb-4 text-primary">Engine Technologies:</h4>
                <ul className="timeline timeline-vertical mb-8">
                  <li>
                    <div className="timeline-start timeline-box">Workers, PWA</div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-end timeline-box">JS runtime, cache</div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-start timeline-box">Browser API</div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-end timeline-box">REST API</div>
                    <hr />
                  </li>
                </ul>
                <h4 className="text-xl mb-4 text-primary">Tools:</h4>
                <ul className="timeline timeline-vertical mb-8">
                  <li>
                    <div className="timeline-start timeline-box">Git</div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-end timeline-box">npm, yarn, pnpm</div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-start timeline-box">webpack, vite</div>
                    <hr />
                  </li>
                </ul>
                <h4 className="text-xl mb-4 text-primary">Etc:</h4>
                <ul className="timeline timeline-vertical mb-8">
                  <li>
                    <div className="timeline-start timeline-box">scrum</div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-end timeline-box">JIRA, Asana</div>
                    <hr />
                  </li>
                </ul>
              </div>
              <div className="mockup-code w-full hidden md:block">
                <pre data-prefix="1" className="bg-primary text-primary-content"><code>Languages:</code></pre>
                <pre data-prefix="2" className="text-secondary"><code>TypeScript</code></pre>
                <pre data-prefix="3"><code>JavaScript</code></pre>
                <pre data-prefix="4"><code>HTML(PUG)</code></pre>
                <pre data-prefix="5"><code>CSS(SASS, SCSS, LESS)</code></pre>
                <pre data-prefix="6" className="bg-primary text-primary-content"><code>Frameworks/Libraries:</code></pre>
                <pre data-prefix="7" className="text-secondary"><code>React</code></pre>
                <pre data-prefix="8"><code>Angular</code></pre>
                <pre data-prefix="9"><code>Vue</code></pre>
                <pre data-prefix="10"><code>Playwright, Vitest, Jest</code></pre>
                <pre data-prefix="10"><code>Storybook</code></pre>
                <pre data-prefix="11"><code>Tailwind, <br/> -- Daisy UI, <br/> -- Material UI, <br/> -- Bootstrap</code></pre>
                <pre data-prefix="12" className="bg-primary text-primary-content"><code>Engine Technologies:</code></pre>
                <pre data-prefix="13"><code>Workers, PWA</code></pre>
                <pre data-prefix="14"><code>JS runtime, cache</code></pre>
                <pre data-prefix="15"><code>Browser API</code></pre>
                <pre data-prefix="16"><code>REST API</code></pre>
                <pre data-prefix="17" className="bg-primary text-primary-content"><code>Tools:</code></pre>
                <pre data-prefix="18"><code>Git</code></pre>
                <pre data-prefix="19"><code>npm, yarn, pnpm</code></pre>
                <pre data-prefix="20"><code>webpack, vite</code></pre>
                <pre data-prefix="21" className="bg-primary text-primary-content"><code>Etc:</code></pre>
                <pre data-prefix="20"><code>scrum</code></pre>
                <pre data-prefix="20"><code>JIRA, Asana</code></pre>
              </div>
              <div className="flex mt-8 justify-end">
                <a className="btn btn-primary"
                   href="https://www.linkedin.com/in/ruslan-salnikov-7a93a4136/"
                   target="_blank">My Linkedin</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
