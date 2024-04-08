import { FC } from 'react';

type CardProps = {
  role: string;
  description: string;
  technologies: string[];
};

const Card: FC<CardProps> = ({ role, description, technologies }) => {
  return (
    <div className="gradient-border with-transition my-3 space-y-4 rounded-xl border bg-black/90 p-4 hover:scale-105">
      <h3 className="font-bold ">{role}</h3>
      <p className="text-sm text-gray-400">{description}</p>
      <div className="flex items-end justify-end gap-1 text-xs font-medium md:gap-2 md:text-sm">
        {technologies.map((tech) => (
          <span key={tech} className="rounded-lg bg-gray-800 px-2 py-1 md:px-3">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
