import { iconsPath } from '../../data/iconsPath';

export const NavBar = () => {
  return (
    <nav className="bg-neutral-900 border-b border-gray-800">
      <header className="px-20 max-w-7xl mx-auto flex justify-between p-3">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-8 h-8 fill-sky-500"
          >
            <path d={iconsPath.code} />
          </svg>
          <p className="text-white text-xl font-thin">Jean Madiedo</p>
        </div>
        <ul className="flex items-center gap-8 text-gray-400">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#featured-projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a
          href="https://drive.google.com/file/d/1KezrGeYHefLAVRto3eDxiza65W4alEnk/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-bold px-4 py-2 bg-sky-500 border hover:bg-sky-600 border-gray-500 rounded-md cursor-pointer transition-colors"
        >
          Resume
        </a>
      </header>
    </nav>
  );
};
