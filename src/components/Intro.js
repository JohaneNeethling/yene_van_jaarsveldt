// Importing required modules and components
import { motion } from "framer-motion"; // For animations
import { useNavigate } from "react-router-dom"; // For navigation between routes
import introImage from "../media/Yene4.png"; // Importing an image
import "./Intro.css"; // Importing custom CSS

// Defining the Intro component
const Intro = () => {
  // Hook for navigation functionality
  const navigate = useNavigate();

  // Function to navigate to the home page when the button is clicked
  const handleEnterClick = () => {
    navigate("/home"); // Redirects user to "/home" route
  };

  return (
    // Animated container for the entire intro screen
    <motion.div
      className="w-full h-screen bg-zinc-400 text-white flex flex-col items-center justify-center double-border px-4 sm:px-8"
      // Initial animation state (hidden)
      initial={{ opacity: 0 }}
      // Target animation state (fully visible)
      animate={{ opacity: 1 }}
      // Exit animation state (hidden)
      exit={{ opacity: 0 }}
      // Animation timing
      transition={{ duration: 1 }}
    >
      {/* Displaying the introductory image */}
      <img
        src={introImage}
        className="h-80 w-96 mb-8 double-border sm:h-64 sm:w-80"
        alt="Intro" // Accessibility: description of the image
      />

      {/* Animated text and button container */}
      <motion.div
        className="text-center"
        // Initial vertical position (offscreen above)
        initial={{ y: -100 }}
        // Target vertical position (centered)
        animate={{ y: 0 }}
        // Animation timing
        transition={{ duration: 1 }}
      >
        {/* Animated heading with a subtle scaling effect */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-serif text-light-brown"
          // Scaling effect during visibility
          whileInView={{ scale: [1, 1.1, 1] }}
          // Animation repeats infinitely in a loop
          transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
        >
          YENE VAN JAARSVELDT
        </motion.h1>

        {/* Animated button for navigation */}
        <motion.button
          onClick={handleEnterClick} // Calls navigation function on click
          className="px-6 py-3 text-white bg-yellow-950 rounded-full text-xl font-semibold tracking-wider hover:bg-light-brown transition sm:px-8 sm:py-4 sm:text-2xl"
          // Scaling effects on hover and tap
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          // Continuous scaling animation during visibility
          whileInView={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        >
          Enter
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

// Exporting the Intro component for use in other parts of the application
export default Intro;
