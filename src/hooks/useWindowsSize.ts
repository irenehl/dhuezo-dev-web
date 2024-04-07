import { useState, useEffect } from 'react';

function getBreakpoints(width: number) {
  if (width < 640) return 'sm';
  if (width < 768) return 'md';
  if (width < 1024) return 'lg';
  return 'xl';
}

export default function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  const [breakpoint, setBreakpoint] = useState('sm');

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
      setBreakpoint(getBreakpoints(window.innerWidth));
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return { size, breakpoint };
}
