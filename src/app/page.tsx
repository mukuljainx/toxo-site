import { Footer } from "@/components/footer";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";

export default function Home() {
  return (
    <div>
      <div className="main-content ">
        <section id="hero" className="h-screen">
          <div className="flex flex-col justify-center items-center h-full slide">
            {/* <h1 className="text-5xl font-bold mb-4">Bridge</h1> */}

            <Image
              className="mb-4"
              alt="Logo"
              src="./images/logo-dark.svg"
              width={200}
              height={100}
            />
            <h2 className="text-4xl font-medium text-center mb-4">
              The ultimate productivity tool for Chrome
            </h2>
            <Zoom>
              <Image
                src="/images/home.png"
                alt="Bridge"
                width={1440}
                height={400}
              />
            </Zoom>
            <h5>*Fancy Site coming soon!</h5>
          </div>
        </section>
        <section
          id="tabs-management"
          className="flex items-center justify-center slide"
        >
          <div className="flex flex-col gap-10">
            <div className="text-center">
              <h2 className="text-4xl mb-4">Tab Management</h2>
              <div className="">
                <p>
                  Bridge helps you manage your tabs efficiently, so you can
                  focus on what&#39;s important.
                </p>
                <ol>
                  <li>Create Site Groups</li>
                  <li>Reorder group or site within them</li>
                  <li>Add tags to group filter them based on it</li>
                  <li>Search within all groups</li>
                </ol>
              </div>
            </div>
            <div>
              <Zoom>
                <Image
                  src="/images/home.png"
                  alt="Sidebar"
                  width={1440}
                  height={400}
                />
              </Zoom>
            </div>
          </div>
        </section>
        <section
          id="sidebar"
          className="flex items-center justify-center slide"
        >
          <div className="flex flex-col gap-10">
            <div className="text-center">
              <h2 className="text-4xl mb-4">Sidebar</h2>
              <div className="">
                <p>
                  Easily access your saved sites from any site site, just open
                  the sidebar and go anywhere!
                </p>
                <p>
                  You can add new sites and drag and drop your sites to reorder
                  them, and even create folders to organize your sites on the
                  go.
                </p>
                <p>Navigate to to task, notes and Pomodoro clock in sidebar</p>
              </div>
            </div>
            <div>
              <Zoom>
                <Image
                  src="/images/side-bar.png"
                  alt="Sidebar"
                  width={1440}
                  height={400}
                />
              </Zoom>
            </div>
          </div>
        </section>
        <section id="tasks" className="flex items-center justify-center slide">
          <div className="flex flex-col gap-10">
            <div className="text-center">
              <h2 className="text-4xl mb-4">Tasks</h2>
              <div className="">
                <p>
                  Keep track of your tasks and to-dos with Bridge&#39;s task
                  management feature.
                </p>
                <p>
                  Use advance filters to see tasks based on due date, priority,
                  tags and more.
                </p>
              </div>
            </div>
            <div>
              <Zoom>
                <Image
                  src="/images/tasks.png"
                  alt="Sidebar"
                  width={1440}
                  height={400}
                />
              </Zoom>
            </div>
          </div>
        </section>
        <section id="notes" className="flex items-center justify-center slide">
          <div className="flex flex-col gap-10 justify-center">
            <div className="text-center">
              <h2 className="text-4xl mb-4">Notes</h2>
              <div className="">
                <div>
                  <p>
                    Bridge&#39;s notes feature allows you to jot down quick
                    notes and ideas, ensuring you never miss an important
                    thought. Organize your notes with tags and search through
                    them effortlessly.
                  </p>
                  <p>
                    Use advance filters to see tasks based on due date,
                    priority, tags and more.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Zoom>
                <Image
                  src="/images/notes.png"
                  alt="Sidebar"
                  width={1440}
                  height={400}
                />
              </Zoom>
            </div>
          </div>
        </section>
        <section
          id="global-search"
          className="flex items-center justify-center slide"
        >
          <div className="flex flex-col gap-10 justify-center">
            <div className="text-center">
              <h2 className="text-4xl mb-4">Global Search</h2>
              <div className="">
                <div>
                  <p>
                    Bridge&#39;s global search feature allows you to search
                    across all your data, including tabs, tasks, notes and more.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Zoom>
                <Image
                  src="/images/search.png"
                  alt="Sidebar"
                  width={1440}
                  height={400}
                />
              </Zoom>
            </div>
          </div>
        </section>
        <section
          id="command"
          className="flex items-center justify-center slide"
        >
          <div className="flex flex-col gap-10 justify-center">
            <div className="text-center">
              <h2 className="text-4xl mb-4">Commands</h2>
              <div className="">
                <div>
                  <p>
                    Bridge&#39;s command feature allows you to quickly access
                    different parts of the app using commands.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Zoom>
                <Image
                  src="/images/command.png"
                  alt="Sidebar"
                  width={1440}
                  height={400}
                />
              </Zoom>
            </div>
          </div>
        </section>
        <section
          id="command"
          className="flex items-center justify-center slide"
        >
          <div className="flex flex-col gap-10 justify-center">
            <div className="text-center">
              <h2 className="text-4xl mb-4">Pomodoro</h2>
              <div className="">
                <div>
                  <p>
                    Bridge&#39;s Pomodoro feature allows you to use the Pomodoro
                    technique to boost productivity.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Zoom>
                <Image
                  src="/images/pomodoro.png"
                  alt="Sidebar"
                  width={1440}
                  height={400}
                />
              </Zoom>
            </div>
          </div>
        </section>
        <section
          id="command"
          className="flex items-center justify-center slide"
        >
          <div className="flex flex-col gap-10 justify-center">
            <div className="text-center">
              <h2 className="text-4xl mb-4">Theme</h2>
              <div className="">
                <div>
                  <p>
                    Bridge&#39;s theme feature allows you to personalize the
                    look and feel of the app.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Zoom>
                <Image
                  src="/images/theme.png"
                  alt="Sidebar"
                  width={1440}
                  height={400}
                />
              </Zoom>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
