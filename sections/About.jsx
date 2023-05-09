'use client';
import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Universe 57" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        In the game based on{" "}
        <span className="font-extrabold text-white">Universe 57</span>, players
        embark on an epic space adventure to explore the wonders of this
        extraordinary universe. With stunning graphics and realistic physics,
        players can visit the giant planet that orbits the sun, navigate through
        asteroid fields, and engage in interstellar battles with other players.
        The game also features the breathtaking nebulas and galactic clusters
        that make <span className="font-extrabold text-white">Universe 57</span>{" "}
        so unique, and players can discover and colonize new planets while
        managing resources and building their space fleets. With endless
        possibilities and challenges, the{" "}
        <span className="font-extrabold text-white">Universe 57</span> game is
        an immersive and thrilling experience for gamers who seek the excitement
        of space exploration.
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px] animate-bounce"
      />
    </motion.div>
  </section>
);

export default About;
