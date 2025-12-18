import { iconsPath } from '../../data/iconsPath';
import { Form } from '../ui/Form';

export const Contact = () => {
  return (
    <section className="bg-neutral-900 border-b border-gray-400" id="contact">
      <div className="max-w-7xl grid grid-cols-2 mx-auto px-20 py-16 gap-8">
        <article>
          <h2 className="text-white font-bold text-2xl mb-5">Get in Touch</h2>

          <p className="text-gray-400">
            I'm currently available for freelance work and full time positions. Feel free to reach
            out to discuss potential collaborations or opportunities.
          </p>

          <div className="flex items-center gap-3 mt-6 mb-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-sky-500"
              >
                <path d={iconsPath.email} />
              </svg>
            </div>
            <span className="text-white">jean.madiedo08@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 mt-6 mb-12">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-sky-500"
              >
                <path d={iconsPath.location} />
              </svg>
            </div>
            <span className="text-white">Cartagena, Colombia</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/jeancmr" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 fill-gray-400"
                >
                  <path d={iconsPath.github} />
                </svg>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/jeancmr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 fill-gray-400"
                >
                  <path d={iconsPath.linkedin} />
                </svg>
              </div>
            </a>
          </div>
        </article>

        <Form />
      </div>
    </section>
  );
};
