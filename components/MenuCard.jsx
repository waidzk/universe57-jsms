import { motion } from 'framer-motion';
import { sidebarVariants } from '../utils/motion';

const MenuCard = ({ isMenuOpen, setMenuOpen }) => (
  <motion.div
    variants={sidebarVariants}
    initial="closed"
    animate={isMenuOpen ? 'open' : 'closed'}
    transition={{ duration: 0.5 }}
    className="fixed lg:w-1/3 w-full h-screen right-0 top-0 bottom-0 z-50 glassmorphism lg:rounded-l-3xl"
  >
    <div className="px-10 py-5 h-full bg-[rgba(26,35,46,0.5)] lg:rounded-l-3xl">
      <div className="text-xs flex justify-end pt-5">
        <span
          className="cursor-pointer"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon stroke-white icon-tabler icon-tabler-x"
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
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </span>
      </div>
      <ul className="flex flex-col h-full text-white">
        <li>
          Play <div className="h-[2px] bg-white opacity-10" />
        </li>
        <li>
          Home
          <div className="h-[2px] bg-white opacity-10" />
        </li>
        <li>
          Contact
          <div className="h-[2px] bg-white opacity-10" />
        </li>
        <li>
          About
          <div className="h-[2px] bg-white opacity-10" />
        </li>
      </ul>
    </div>
  </motion.div>
);

export default MenuCard;
