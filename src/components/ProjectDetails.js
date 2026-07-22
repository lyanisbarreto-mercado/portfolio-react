import React, { useState } from "react";
import { motion } from "motion/react";
import { XCircle } from "react-bootstrap-icons";

const ProjectDetails = ({
  name,
  summary,
  image,
  url,
  why,
  challenge,
  conclusion,
  closeModal,
}) => {
  const [imageModal, setImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (data) => {
    setSelectedImage(data);
    setImageModal(true);
  };

  const closeImageModal = () => {
    setImageModal(false);
    setSelectedImage(null);
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 z-950 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
      >
        <div className="max-h-[90vh] w-full max-w-[1200px] overflow-y-auto rounded-3xl bg-white shadow-2xl z-[999]">
          <div className="p-8">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-4xl font-bold">{name}</h1>

              <button
                onClick={closeModal}
                className="transition hover:scale-110 hover:text-red-500"
              >
                <XCircle size={36} />
              </button>
            </div>

            <hr className="mb-8" />
            {/* Image */}
            <img
              src={image}
              alt={name}
              onClick={() => openImageModal(image)}
              className="
                w-full
                max-h-[500px]
                object-cover
                cursor-pointer
                rounded-2xl
                shadow-lg
                transition
                duration-300
                hover:scale-[1.02]
                mb-5
              "
            />

            {/* Sections */}
            <section className="mb-8">
              <h2 className="mb-2 text-2xl font-bold">Purpose</h2>
              <p className="leading-7">{why}</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-2 text-2xl font-bold">Challenge</h2>
              <p className="leading-7">{challenge}</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-2 text-2xl font-bold">Conclusion</h2>
              <p className="leading-7">{conclusion}</p>
            </section>

            <section className="mb-8">
              <h2 className="mb-2 text-2xl font-bold">Where to View</h2>

              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="break-all text-blue-700 underline hover:text-blue-900"
              >
                {url}
              </a>
            </section>

            
          </div>
        </div>
      </motion.div>

      {/* Fullscreen Image */}
      {imageModal && (
        <div
          className="
            fixed inset-0 z-[999]
            flex items-center justify-center
            bg-black/90
            p-6
          "
          onClick={closeImageModal}
        >
          <img
            src={selectedImage}
            alt={name}
            className="
              max-h-full
              max-w-full
              rounded-xl
              shadow-2xl
            "
          />
        </div>
      )}
    </>
  );
};

export default ProjectDetails;