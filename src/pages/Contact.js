import React, { useState } from "react";

import Resume from "../images/Lyanis_Barreto_Mercado_Resume.pdf";

import {
  Linkedin,
  FilePersonFill,
  Circle,
} from "react-bootstrap-icons";

const Contact = () => {
  const [result, setResult] = useState("");

  // Web3Forms
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "a3c15306-43fb-42cf-93b8-497eaf9c3135"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    setResult(
      data.success
        ? "Message Processed. Thank you for reaching out, and I will get back to you as soon as possible!"
        : "Error, please try again."
    );
  };

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12 pb-[125px]">
      <div className="flex flex-col lg:flex-row lg:gap-20 items-center text-center">
        <div className="w-full">
          <h1 className="mb-8 text-[30px] md:text-[40px] font-bold">
            Here are some ways to contact me
          </h1>

          <p className="mt-4 text-[18px] font-semibold">
            lyanis.barreto@gmail.com
          </p>

          <p className="mt-4 text-[18px] font-semibold">
            +1 407-821-9626
          </p>

          {/* Social Links */}

          <div className="mt-8 flex flex-col gap-6">
            <a
              href="https://www.linkedin.com/in/lyanis-rubí-barreto-mercado-6aa606289"
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-5
                rounded-xl
                bg-[#C6D5FB]
                px-5
                py-3
                transition
                hover:bg-[#798bb9]
              "
            >
              <Linkedin size={22} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://dot.cards/lyanisbarretomercado"
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-5
                rounded-xl
                bg-[#C6D5FB]
                px-5
                py-3
                transition
                hover:bg-[#798bb9]
              "
            >
              <Circle size={22} />
              <span>DotCard</span>
            </a>

            <a
              href={Resume}
              download="Lyanis_BarretoMercado_Resume.pdf"
              className="
                flex
                items-center
                gap-5
                rounded-xl
                bg-[#C6D5FB]
                px-5
                py-3
                transition
                hover:bg-[#798bb9]
              "
            >
              <FilePersonFill size={22} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
        {/* Contact Form */}

        <div className="mt-12 w-full">
          <h3 className="mb-6 text-[30px] md:text-[40px] font-bold">
            or contact me directly:
          </h3>

          <form
            onSubmit={onSubmit}
            className="flex flex-col items-center gap-4"
          >
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
              className="
                w-full
                max-w-[400px]
                rounded-2xl
                bg-white
                p-4
                text-[16px]
                outline-none
              "
            />

            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
              className="
                w-full
                max-w-[400px]
                rounded-2xl
                bg-white
                p-4
                text-[16px]
                outline-none
              "
            />

            <textarea
              name="Message"
              rows="6"
              placeholder="Your Message"
              required
              className="
                w-full
                max-w-[400px]
                rounded-2xl
                bg-white
                p-4
                text-[16px]
                outline-none
              "
            />

            <button
              type="submit"
              className="
                rounded-2xl
                bg-[darkseagreen]
                px-6
                py-2
                text-[18px]
                transition
                hover:bg-[rgb(190,233,190)]
              "
            >
              Submit
            </button>
          </form>

          {result && (
            <p className="mt-6 text-center text-[16px]">
              {result}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;