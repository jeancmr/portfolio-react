import { useForm } from '../../hooks/useForm';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

export const Form = () => {
  const { name, email, message, onInputChange, onResetForm } = useForm(initialForm);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email, message });
    onResetForm();
  };
  return (
    <form onSubmit={handleSubmit} className="p-8 bg-neutral-700 rounded-lg">
      <div className="flex flex-col gap-4">
        <div>
          <span className="text-white mb-1.5 block cursor-default">Name</span>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={name}
            onChange={onInputChange}
            className="p-4 rounded-md bg-neutral-900 text-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 w-full"
          />
        </div>

        <div>
          <span className="text-white mb-1.5 block cursor-default">Email</span>
          <input
            type="email"
            name="email"
            placeholder="johndoe@example.com"
            value={email}
            onChange={onInputChange}
            className="p-4 rounded-md bg-neutral-900 text-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 w-full"
          />
        </div>

        <div>
          <span className="text-white mb-1.5 block cursor-default">Message</span>
          <textarea
            placeholder="Tell me about your project..."
            value={message}
            name="message"
            onChange={onInputChange}
            className="p-4 rounded-md bg-neutral-900 text-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 h-32 resize-none w-full"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-sky-500 text-white font-bold py-3 px-6 rounded-md hover:bg-sky-600 transition-colors cursor-pointer"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};
