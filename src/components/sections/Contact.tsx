import { Form } from '../ui/Form';

export const Contact = () => {
  return (
    <section className="bg-neutral-900 border-b border-gray-400">
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
                <path d="M0 352L0 128C0 75 43 32 96 32l320 0c53 0 96 43 96 96l0 224c0 53-43 96-96 96l-120 0c-5.2 0-10.2 1.7-14.4 4.8L166.4 539.2c-4.2 3.1-9.2 4.8-14.4 4.8-13.3 0-24-10.7-24-24l0-72-32 0c-53 0-96-43-96-96z" />
              </svg>
            </div>
            <span className="text-white">jean.madiedo08@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 mt-6 mb-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-sky-500"
              >
                <path d="M477.9 75.5c4.5-11.8 1.7-25.2-7.2-34.1s-22.3-11.8-34.1-7.2l-416 160C7.9 199-.3 211.2 0 224.7s9.1 25.4 21.9 29.6l176.8 58.9 58.9 176.8c4.3 12.8 16.1 21.6 29.6 21.9s25.7-7.9 30.6-20.5l160-416z" />
              </svg>
            </div>
            <span className="text-white">Cartagena, Colombia</span>
          </div>
        </article>

        <Form />
      </div>
    </section>
  );
};
