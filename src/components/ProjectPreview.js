import React from "react";
import { motion } from "motion/react";

const ProjectPreview = ({ name, summary, url, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <div
        className="
          flex h-[570px] max-w-[500px] flex-col
          overflow-hidden rounded-2xl
          bg-[#8AA4E4]
          shadow-lg
        "
      >
        {/* Project Image */}
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover"
        />

        {/* Project Content */}
        <div className="flex flex-1 flex-col p-6">
          <h1 className="mb-3 text-[24px] md:text-[30px] font-bold">
            {name}
          </h1>

          <p className="mb-6 flex-1 text-[16px] text-[18px] leading-[28px]">
            {summary}
          </p>

          <div className="flex md:flex-row justify-between">
            <p
              className="
                mt-auto
                w-fit
                rounded-lg
                bg-white/25
                px-4
                py-2
                text-[16px]
                md:text-[18px]
                font-semibold
                transition
                duration-300
                hover:bg-white/40
              "
            >
              Full Description
            </p>

            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="
                mt-auto
                w-fit
                rounded-lg
                bg-white/25
                px-4
                py-2
                text-[16px]
                md:text-[18px]
                font-semibold
                transition
                duration-300
                hover:bg-white/40
              "
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPreview;