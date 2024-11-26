import { motion } from "framer-motion"; // Importing motion from framer-motion for animations
import PromoPic from "../media/Yene3.png"; // Importing an image to display in the component

// Functional component to display the "CheckOutPortfolio" section
const CheckOutPortfolio = () => {
  return (
    <section className="px-4 bg-zinc-900 text-white text-center pb-20 font-serif">
      {/* Main container with flex layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center pr-10">
        {/* Left side content: title, description, and call-to-action */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          {/* Title with animation on load */}
          <motion.h2
            className="text-4xl sm:text-5xl font-bold py-8 tracking-widest font-serif ml-9"
            initial={{ opacity: 0 }} // Initially hidden
            animate={{ opacity: 1 }} // Fade in effect
            transition={{ duration: 1 }} // Animation duration
          >
            Want to See My Work?
          </motion.h2>

          {/* Description with animation */}
          <motion.p
            className="text-xl sm:text-2xl mb-6 ml-9 tracking-wide"
            initial={{ opacity: 0 }} // Initially hidden
            animate={{ opacity: 1 }} // Fade in effect
            transition={{ duration: 1, delay: 0.2 }} // Slight delay for this element's animation
          >
            Check out my portfolio to see the projects I’ve worked on.
          </motion.p>

          {/* Call-to-action link with animation */}
          <motion.a
            href="/portfolio" // Link to the portfolio page
            className="inline-block px-6 py-4 sm:px-8 sm:py-5 ml-9 bg-gradient-to-r from-red-400 to-red-800 text-white text-lg sm:text-xl font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0 }} // Initially hidden
            animate={{ opacity: 1 }} // Fade in effect
            transition={{ duration: 1, delay: 0.4 }} // Slight delay for this element's animation
          >
            View Portfolio
          </motion.a>
        </div>

        {/* Right side: Image container with animation */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 50 }} // Initially hidden and offset vertically
          whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up when in view
          transition={{ duration: 0.6 }} // Animation duration
        >
          {/* Image with animation */}
          <motion.img
            src={PromoPic} // Image source imported above
            alt="Portfolio Image" // Alt text for the image
            className="w-full max-w-xs sm:max-w-sm lg:max-w-xs rounded-lg shadow-lg" // Styling for the image
            initial={{ opacity: 0 }} // Initially hidden
            animate={{ opacity: 1 }} // Fade in effect
            transition={{ duration: 1, delay: 0.6 }} // Slight delay for this element's animation
          />
        </motion.div>
      </div>
    </section>
  );
};

// Export the component for use in other parts of the application
export default CheckOutPortfolio;
