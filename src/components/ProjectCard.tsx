"use client";

import { useState } from "react";
import {motion, AnimatePresence} from "framer-motion";

type Project = {
  name: string;
  description: string;
  image: string;
  live: string;
  github: string;
  stack: string[];
  highlights: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (

    <motion.div
      layout
      whileHover={{y: -6}}
      transition={{duration: 0.2}}
      className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur shadow-2xl"
    >
  
      {/* CLICKABLE AREA */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left"
      >
        {/* IMAGE */}
        <div className="h-72 overflow-hidden border-b border-zinc-800">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition duration-300 hover:scale-105"
          />
        </div>

        {/* CONTENT */}
        <div className="p-5">

          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>

              <p className="text-gray-400 text-sm mt-2 leading-relaxed">{project.description}</p>
            </div>

            <div className="text-xs px-2 py-1 rounded-full bg-zinc-700 whitespace-nowrap">
              {project.stack.length} tools
            </div>
          </div>

          {/* STACK */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.stack.slice(0, open ? project.stack.length :5).map((item) => (
              <span
                key={item}
                className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-gray-300"
              >
                {item}
              </span>
            ))}

            {project.stack.length > 5 && !open && (
              <span>
                +{project.stack.length - 5} more
              </span>
            )}
          </div>
        </div>
      </button>
      

      {/* EXPANDED SECTION */}
      <AnimatePresence>
        {open && (
          <motion.div
            layout
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: "auto"}}
            exit={{opacity: 0, height: 0}}
            transition={{duration: 0.25}}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-zinc-800">

              <div className="pt-5">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-3">
                  Systems Built
                </h4>

                <ul className="space-y-2">
                  {project.highlights.map((item) => (
                    <li 
                      key={item}
                      className="text-sm text-gray-300 leading-relaxed"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
                
              {/* Buttons */}
              <div className="flex gap-3 mt-6">
                <a
                  href={project.live}
                  target="_blank"
                  className="text-sm px-4 py-2 rounded-lg bg-white text-black font-medium hover:opacity-90 transition"
                >
                  Live Site
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm px-4 py-2 rounded-lg border border-zinc-700 text-gray-300 hover:opacity-90 transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div> 
  );
}