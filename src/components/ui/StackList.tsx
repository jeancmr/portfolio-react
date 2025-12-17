import { techStack } from '../../data/techStack';
import { StackItem } from './StackItem';

export const StackList = () => {
  return (
    <ol className="flex flex-wrap gap-6 mt-6">
      {techStack.map((tech) => (
        <StackItem key={tech.name} tech={tech} />
      ))}
    </ol>
  );
};
