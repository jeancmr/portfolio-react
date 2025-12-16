interface StackItemProps {
  tech: {
    name: string;
    icon: string;
  };
}

export const StackItem = ({ tech }: StackItemProps) => {
  return (
    <li
      key={tech.name}
      className="flex flex-col items-center justify-center gap-3 bg-neutral-700 px-8 py-4 w-40 rounded-md"
    >
      <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
      <span className="text-white">{tech.name}</span>
    </li>
  );
};
