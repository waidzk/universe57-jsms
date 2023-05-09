'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import MenuCard from './MenuCard';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01 " />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler stroke-white icon-tabler-device-gamepad-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z" />
          <path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232" />
          <path d="M8 9v2" />
          <path d="M7 10h2" />
          <path d="M14 10h2" />
        </svg>
        <h2 className="font-extrabold lg:text-[24px] text-[18px] leading-[30px] text-white">
          UNIVERSE 57
        </h2>
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain cursor-pointer"
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
      </div>
      <MenuCard isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
    </motion.nav>
  );
};

export default Navbar;
