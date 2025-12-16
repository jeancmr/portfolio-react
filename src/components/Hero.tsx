export const Hero = () => {
  return (
    <header className="grid grid-cols-2 bg-neutral-900 gap-8 items-center px-20 py-16">
      <div className="flex flex-col gap-6 justify-center">
        <h1 className="text-8xl text-white font-bold">System Engineer - Fullstack developer</h1>
        <p className="text-xl text-gray-400">
          I'm a passionate developer with experience in building web applications.
        </p>

        <div className="flex gap-4 items-center">
          <button className="text-white font-bold text-lg px-5 py-3 bg-sky-500 border border-gray-500 rounded-md cursor-pointer">
            View My Work
          </button>
          <button className="text-white font-bold text-lg px-4 py-2 bg-neutral-900 border border-gray-500 rounded-md cursor-pointer">
            Contact Me
          </button>
        </div>
      </div>
      <div className="photo">
        <img
          src="/profilepic.webp"
          alt="Developer Photo"
          className="h-52 w-52 rounded-full object-cover"
        />
      </div>
    </header>
  );
};
