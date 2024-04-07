import { FC, PropsWithChildren } from 'react';
import { Footer } from '@components/footer';
import { NavbarMobile } from '../navbar';
import ParticlesBackrgound from '../particle/ParticleBackground';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <ParticlesBackrgound />
    <NavbarMobile />
    <div className="mx-auto max-w-screen-lg p-4">{children}</div>
    <Footer />
  </>
);

export default Layout;
