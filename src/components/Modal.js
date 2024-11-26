import React from "react"; // Import the React library for building the component.
import { motion } from "framer-motion"; // Import 'motion' from Framer Motion for animations.

const Modal = ({ isOpen, onClose, title, message }) => {
  // Destructure props: `isOpen` (boolean to control visibility),
  // `onClose` (function to close the modal), `title`, and `message` (content to display).

  if (!isOpen) return null;
  // If the modal is not open (`isOpen` is false), return null to avoid rendering anything.

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Full-screen overlay for the modal. 
          - `fixed inset-0`: Covers the entire viewport.
          - `z-50`: Ensures the modal is above other elements.
          - `flex items-center justify-center`: Centers the modal.
          - `bg-black bg-opacity-50`: Adds a semi-transparent black background. */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        // Starting animation state: the modal is small and transparent.
        animate={{ opacity: 1, scale: 1 }}
        // Ending animation state: the modal is fully visible and at normal size.
        transition={{ duration: 0.3 }}
        // Animation duration: 0.3 seconds.
        className="bg-white rounded-lg shadow-lg w-96 p-6 text-center"
        // Modal styling:
        // - `bg-white`: White background.
        // - `rounded-lg`: Rounded corners.
        // - `shadow-lg`: Box shadow for a lifted appearance.
        // - `w-96`: Fixed width (24rem).
        // - `p-6`: Padding around the content.
        // - `text-center`: Centers text inside the modal.
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>
        {/* Title of the modal, styled as a bold heading with spacing below. */}

        <p className="text-gray-600 mb-6">{message}</p>
        {/* Message/content of the modal, styled as gray text with spacing below. */}

        <button
          onClick={onClose}
          // Calls the `onClose` function when the button is clicked, to close the modal.
          className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          // Button styling:
          // - `px-6 py-2`: Padding.
          // - `bg-red-500 text-white`: Red background with white text.
          // - `rounded-md`: Rounded corners.
          // - `hover:bg-red-600`: Darker red on hover.
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
// Exports the Modal component for use in other parts of the app.
