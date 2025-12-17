export const Hero = () => {
  return (
    <section className=" bg-neutral-900 border-b border-gray-400">
      <header className="grid grid-cols-2  justify-center items-center px-20 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 justify-center">
          <h1 className="text-8xl text-white font-bold">System Engineer Fullstack developer</h1>
          <p className="text-xl text-gray-400">
            I'm a system engineer focused on web development. I build user interfaces and web
            applications with modern technologies.
          </p>

          <div className="flex gap-4 items-center">
            {/* <button className="text-white font-bold text-lg px-5 py-3 bg-sky-500 border border-gray-500 rounded-md cursor-pointer">
              View My Work
            </button> */}
            <a
              href="#featured-projects"
              className="text-white font-bold text-lg px-5 py-3 bg-sky-500 border hover:bg-sky-600 border-gray-500 rounded-md cursor-pointer"
            >
              View My Work
            </a>
            <button className="text-white font-bold text-lg px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-gray-500 rounded-md cursor-pointer">
              Contact Me
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/profilepic.webp"
            alt="Developer Photo"
            className="h-52 w-52 rounded-full object-cover"
          />
        </div>
      </header>
      {/* <div className="w-full h-px bg-gray-400" /> */}
    </section>
  );
};
