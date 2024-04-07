import { FC, useState } from 'react';

const NavbarMobile: FC = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="top-0 z-10 flex w-full items-end justify-end px-4 py-2">
      <button
        type="button"
        aria-label="Menú lateral"
        className={showNav ? 'relative z-50' : ''}
        onClick={() => setShowNav(!showNav)}
      >
        <div
          className={`transition-all ${
            showNav ? 'bg-white opacity-0' : ''
          } my-2 h-1 w-10 rounded-xl bg-white`}
        />
        <div
          className={`transition-all duration-500 ${
            showNav ? 'rotate-180 transform-gpu bg-secondary' : 'bg-white'
          } my-2 h-1 w-10 rounded-xl`}
        />
        <div
          className={`transition-all ${
            showNav ? 'bg-white opacity-0' : ''
          } my-2 h-1 w-10 rounded-xl bg-white`}
        />
      </button>
    </div>
  );
};

export default NavbarMobile;
