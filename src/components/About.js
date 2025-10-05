// import React from "react";
// countup
// import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variant";
import AboutImg from "../assets/about_img.jpg";

const About = () => {
  const [ref] = useInView({
    treshold: 0.5,
  });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] bg-top"
          >
            <img src={AboutImg} alt="About_Image" />
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h4 className="h4 mb-2">
              A dedicated AI enthusiast and developer focused on creating
              impactful solutions using Machine Learning, Deep Learning, and
              Generative AI. I have hands-on experience building autonomous AI
              agents, NLP models like spam classifiers, and real-time computer
              vision systems. With a solid academic background in IT (AI &
              Robotics).
            </h4>
            <p className="mb-3">
              I am keen to apply my skills in LLMs, LangChain, and full-stack
              development to push the boundaries of what's possible with
              intelligent systems.
            </p>
            {/* stats */}
            {/* <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div> */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[25px] my-3">
                  <p className="text-accent">Tech Stack</p>
                </div>
                <div className="h3 text-sm tracking-[2px]">
                  Python | AI/ML | Full-Stack Development Machine Learning |
                  Deep Learning | LLMs LangChain | LangGraph | MERN Stack | NLP
                  | GenAI
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              {/* <button className="btn btn-lg ">Contact Me</button> */}
              <button className="btn btn-lg ">
                <a
                  href="https://github.com/shreyashlodhi"
                  target="_blank"
                  rel="noreferrer"
                  // className="text-gradient btn-link"
                >
                  My Github
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
