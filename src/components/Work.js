import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variant";
// img
import AIChatbot from "../assets/AIChatbot.png";
import AIResearcher from "../assets/AIResearcher.png";
import AIMockInterviewer from "../assets/AIMockInterviewer.png";

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 justify-between"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> Work.
              </h2>
              <p className="max-w-sm mb-16">
                I architect and engineer AI systems using Large Language Models
                (LLMs) and agentic frameworks like LangGraph. My projects focus
                on building autonomous, intelligent applications that can
                reason, interact, and solve complex problems.
              </p>
              <a
                href="https://github.com/shreyashlodhi?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-sm">View all projects</button>
              </a>
            </div>
            <a
              href="https://ai-chatbot-fastapi.streamlit.app/"
              target="_blank"
              rel="noreferrer"
            >
              {/* image */}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={AIChatbot}
                  alt=""
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">
                    FastAPI | LangGraph | Streamlit
                  </span>
                </div>
                {/* title */}

                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">
                    Multi-Model AI Chatbot
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 justify-between"
          >
            <a
              href="https://github.com/shreyashlodhi/ai-research-assistant"
              target="_blank"
              rel="noreferrer"
            >
              {/* image */}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={AIResearcher}
                  alt=""
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">
                    LangGraph | Autonomous Agents
                  </span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">
                    AI Research Assistant
                  </span>
                </div>
              </div>
            </a>
            <a
              href="https://ai-mock-interview-doq76svw0-shreyash-lodhis-projects.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              {/* image */}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={AIMockInterviewer}
                  alt=""
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">
                    {" "}
                    Next.js | Gemini AI | PostgreSQL
                  </span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">
                    AI-Powered Mock Interview Platform
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
