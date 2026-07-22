import React from "react";

const resources = [
  "React",
  "CSS",
  "VS Code",
  "Bootstrap",
  "Framer Motion",
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#B5DFD1] px-6 py-6 md:px-10 text-[14px] md:text-[16px]">
      <div
        className="
          mx-auto
          grid
          grid-cols-1
          gap-6
          text-center
          md:grid-cols-3
          md:items-center
        "
      >
        {/* Resources */}
        <div className="md:text-left">
          <h4 className="mb-2 font-bold">Resources</h4>

          <p>
            {resources.join(", ")}
          </p>
        </div>

        {/* Back to Top */}
        <div className="flex justify-center">
          <a
            href="#"
            className="
              text-base
              font-semibold
              transition
              duration-300
              hover:underline
            "
          >
            Back to top
          </a>
        </div>

        {/* Copyright */}
        <div className="md:text-right">
          <p>
            © 2026 Lyanis Barreto Mercado
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;