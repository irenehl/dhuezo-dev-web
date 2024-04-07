import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../home';

const AnimatedRoute: FC = () => (
  <AnimatePresence>
    <motion.div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </motion.div>
  </AnimatePresence>
);

export default AnimatedRoute;
