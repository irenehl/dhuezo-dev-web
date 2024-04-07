import { FC } from 'react';

const TechnologiesGrid: FC = () => (
  <div className="grid w-full grid-cols-3 gap-2">
    <a href="/" className="grid-card">
      <img src="/technologies/node.svg" alt="NodeJS" className="size-10" />
      NodeJS
    </a>
    <a href="/" className="grid-card">
      <img src="/technologies/nestjs.svg" alt="NestJS" className="size-10" />
      NestJS
    </a>
    <a href="/" className="grid-card">
      <img src="/technologies/ts.svg" alt="TypeScript" className="size-10" />
      TypeScript
    </a>
    <a href="/" className="grid-card-inverted">
      <img src="/technologies/react.svg" alt="ReactJS" className="size-10" />
      ReactJS
    </a>
    <a href="/" className="grid-card">
      <img src="/technologies/mongo.svg" alt="MongoDB" className="size-10" />
      MongoDB
    </a>
    <a href="/" className="grid-card">
      <img
        src="/technologies/express.svg"
        alt="ExpressJS"
        className="size-10"
      />
      ExpressJS
    </a>
    <a href="/" className="grid-card">
      <img src="/technologies/graphql.svg" alt="GraphQL" className="size-10" />
      GraphQL
    </a>
    <a href="/" className="grid-card">
      <img src="/technologies/nextjs.svg" alt="NextJS" className="size-10" />
      NextJS
    </a>
    <a href="/" className="grid-card-inverted">
      <img
        src="/technologies/postgresql.svg"
        alt="PostgreSQL"
        className="size-10"
      />
      PostgreSQL
    </a>
    <a href="/" className="grid-card">
      <img
        src="/technologies/tailwind.svg"
        alt="Tailwind"
        className="size-10"
      />
      Tailwind
    </a>
    <a href="/" className="grid-card">
      <img src="/technologies/git.svg" alt="Git" className="size-10" />
      Git
    </a>
  </div>
);

export default TechnologiesGrid;
