"use client";

import { useState } from "react";

type Project = {
  name: string;
  description: string;
  image: string;
  live: string;
  stack: string[];
  highlights: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">

      {/* TOP / CLICK AREA */}
      <div
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {/* IMAGE */}
        <div className="h-48 bg-zinc-800 flex items-center justify-center text-gray-500">
          Project Image
        </div>

        {/* CONTENT */}
        <div className="p-4">
          <h3 className="text-xl font-semibold">{project.name}</h3>

          <p className="text-gray-400 text-sm mt-1">
            {project.description}
          </p>

          {/* STACK */}
          <div className="flex flex-wrap gap-2 mt-3">
            {project.stack.map((item) => (
              <span
                key={item}
                className="text-xs bg-zinc-800 px-2 py-1 rounded"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* EXPANDED SECTION */}
      {open && (
        <div className="px-4 pb-4 border-t border-zinc-800">
          <h4 className="font-semibold mt-4 mb-2">What I built</h4>

          <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <a
            href={project.live}
            target="_blank"
            className="inline-block mt-4 text-sm underline"
          >
            View Live Site
          </a>
        </div>
      )}
    </div>
  );
}