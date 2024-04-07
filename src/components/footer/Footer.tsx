import { FC } from 'react';

const Footer: FC = () => (
  <div className="relative bg-black p-4 pb-16 md:px-24">
    <h3 className="py-6 text-xl font-bold md:text-2xl">Join me on</h3>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <a
        className="flex items-center justify-start gap-3 hover:text-secondary-orange"
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/irenehl"
      >
        <img className="size-7" src="/social-media/github.svg" alt="github" />
        GitHub
      </a>
      <a
        className="flex items-center justify-start gap-3 hover:text-secondary-accent"
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.linkedin.com/in/irenehl/"
      >
        <img
          className="size-7"
          src="/social-media/linkedin.svg"
          alt="linkedin"
        />
        LinkedIn
      </a>
      <a
        className="flex items-center justify-start gap-3 hover:text-secondary-red"
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.upwork.com/freelancers/~018bada0af7350bb83?mp_source=share"
      >
        <img className="size-7" src="/social-media/upwork.svg" alt="upwork" />
        Upwork
      </a>
      <a
        className="flex items-center justify-start gap-3 hover:text-accent-dark"
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.getonbrd.com/p/daniela-huezo"
      >
        <img className="size-7" src="/social-media/gob.svg" alt="getonboard" />
        Get on Board
      </a>
    </div>
  </div>
);

export default Footer;
