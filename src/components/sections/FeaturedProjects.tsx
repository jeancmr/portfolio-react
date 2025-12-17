import { featuredProjects } from '../../data/featuredProjects';

export const FeaturedProjects = () => {
  return (
    <section className="bg-neutral-800 border-b border-gray-400" id="featured-projects">
      <article className="px-20 py-16 max-w-7xl mx-auto">
        <h2 className="text-white font-bold text-2xl mb-2.5">Featured Projects</h2>
        <p className="text-gray-400">Some of my recent work</p>

        <ul className="grid grid-cols-3 gap-4 mt-8">
          {featuredProjects.map((project) => (
            <li key={project.name} className="bg-neutral-900 rounded-lg mb-6">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="info p-6">
                <h3 className="text-white font-bold text-xl mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-neutral-700 text-white px-2 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
