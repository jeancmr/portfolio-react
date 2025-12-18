import { StackList } from '../ui/StackList';

export const Stack = () => {
  return (
    <section className="bg-neutral-800 border-b border-gray-400" id="stack">
      <article className="px-20 py-16 max-w-7xl mx-auto">
        <h2 className="text-white font-bold text-2xl">My Stack</h2>
        <StackList />
      </article>
    </section>
  );
};
