import React from "react";
// icons
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variant";

const services = [
  {
    name: "AI & LLM Development",
    description:
      "Building sophisticated AI agents and applications using LangChain, LangGraph, and Large Language Models (LLMs) to create intelligent, autonomous workflows.",
    link: "Learn More",
  },
  {
    name: "Fullstack Development",
    description:
      "Crafting robust and scalable full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js), PostgreSQL, and modern tools like Next.js.",
    link: "Learn More",
  },
  {
    name: "Machine Learning & NLP",
    description:
      "Developing and optimizing machine learning models for tasks like classification and sentiment analysis, with a focus on Natural Language Processing (NLP) techniques.",
    link: "Learn More",
  },
];
const Services = () => {
  return (
    <section id="services" className="section">
      <div className=" container mx-auto">
        <div className="flex flexcol lg:flex-row">
          {/* text & image*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h4 max-w-[455px] mb-16">
              I specialize in bridging the gap between cutting-edge artificial
              intelligence and practical web solutions. My expertise lies in
              developing intelligent systems, from building autonomous AI agents
              with LangGraph and LLMs to creating seamless full-stack
              applications with the MERN stack. I have a strong foundation in
              Machine Learning, Natural Language Processing (NLP), and Computer
              Vision, which allows me to build and deploy models that solve
              real-world problems. Essentially, I turn complex algorithms into
              user-friendly, impactful software.
            </h3>
            <a
              href="https://github.com/shreyashlodhi?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-sm">See my work</button>
            </a>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service-list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px] ">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
