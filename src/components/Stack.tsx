import { techStack } from '../data/techStack';

export const Stack = () => {
  return (
    <section className="bg-neutral-800">
      <article className="px-20 py-16 max-w-7xl mx-auto">
        <h2 className="text-white font-bold text-2xl">My Stack</h2>
        <ol className="flex flex-wrap gap-6 mt-6 mb-20">
          {techStack.map((tech) => (
            <li
              key={tech.name}
              className="flex flex-col items-center justify-center gap-2 bg-neutral-700 px-8 py-4 w-40 rounded-md"
            >
              <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
              <span className="text-white text-sm font-bold">{tech.name}</span>
            </li>
          ))}
        </ol>
      </article>
    </section>
  );
};
