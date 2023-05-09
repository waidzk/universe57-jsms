'use client';
import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the Universes" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same universe
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative lg:mt-[68px] mt-0 flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-contain"
        />
        <div className="absolute lg:bottom-20 bottom-56 lg:right-20 right-5 lg:w-[70px] w-[48px] lg:h-[70px] h-[48px] p-[6px] rounded-full bg-[#5d6680]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <img src="people-02.png" alt="people" className="inline-flex w-full h-full" />
        </div>
        <div className="absolute lg:top-10 top-52 left-20 lg:w-[70px] w-[48px] lg:h-[70px] h-[48px] p-[6px] rounded-full bg-[#5d6680]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <img src="people-01.png" alt="people" className="inline-flex w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] lg:w-[70px] w-[48px] lg:h-[70px] h-[48px] rounded-full bg-[#5d6680]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <img src="people-03.png" alt="people" className="inline-flex w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
