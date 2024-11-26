// Importing required dependencies: motion for animations and Yene2 image
import { motion } from "framer-motion";
import Yene2 from "../media/Yene2.png";

// The main functional component "WhyChooseMe"
const WhyChooseMe = () => {
  return (
    // Section wrapper with padding, background color, and text style
    <section className="px-4 bg-zinc-900 text-white py-10 sm:py-20 font-serif">
      <div className="container mx-auto pt-10 sm:pt-20">
        {/* Motion div for animated flex container that adjusts for responsive layout */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-10"
          initial={{ opacity: 0, y: 50 }} // Initial state for animation
          whileInView={{ opacity: 1, y: 0 }} // State when the element comes into view
          transition={{ duration: 0.6 }} // Transition timing
        >
          {/* Image section, which will be shown on the left on larger screens */}
          <div className="sm:w-1/2 flex justify-center">
            {/* Motion image with animation effects */}
            <motion.img
              src={Yene2} // Image source
              alt="Why Choose Me Image" // Alt text for the image
              className="w-full max-w-xs rounded-lg shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out"
              initial={{ opacity: 0 }} // Initial state for the image animation
              animate={{ opacity: 1 }} // Final state for the image animation
              transition={{ duration: 1, delay: 0.6 }} // Timing for the transition
            />
          </div>

          {/* Text content section, aligned to the right on larger screens */}
          <div className="sm:w-1/2 text-center sm:text-left">
            {/* Animated paragraph with a delay for smooth appearance */}
            <motion.p
              className="text-xl mb-6 leading-relaxed"
              initial={{ y: -50, opacity: 0 }} // Initial position and opacity
              animate={{ y: 0, opacity: 1 }} // Final position and opacity
              transition={{ duration: 1, delay: 0.2 }} // Transition delay and duration
            >
              I offer unique designs that are not only visually stunning but
              also highly functional. My work is driven by a passion for
              creativity and an understanding of what truly works for my
              clients.
            </motion.p>

            {/* Animated unordered list with items */}
            <motion.ul
              className="space-y-4 text-lg"
              initial={{ opacity: 0 }} // Initial opacity for list
              animate={{ opacity: 1 }} // Final opacity for list
              transition={{ duration: 1, delay: 0.4 }} // Transition delay and duration
            >
              {/* List items with check mark icons */}
              <li className="flex items-center space-x-2">
                <span className="text-red-500">✔</span>
                <span>Dedication</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-red-500">✔</span>
                <span>Determination</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-red-500">✔</span>
                <span>Passion</span>
              </li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Exporting the component for use in other parts of the application
export default WhyChooseMe;
