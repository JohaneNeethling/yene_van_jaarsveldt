import { useEffect, useState } from "react"; // Importing React hooks
import { motion } from "framer-motion"; // Importing motion for animations from Framer Motion library
import BackGround1 from "../media/PlansBack.png"; // Importing background image for the section
import emailjs from "emailjs-com"; // Importing EmailJS for sending emails via forms
import Modal from "./Modal"; // Importing a custom Modal component for success/error messages

const ContactMe = () => {
  // State variables to manage view visibility and modal behavior
  const [isInView, setIsInView] = useState(false); // Tracks if the contact section is in the view
  const [isModalOpen, setIsModalOpen] = useState(false); // Determines if the modal should be open
  const [modalTitle, setModalTitle] = useState(""); // Modal title (Success/Error)
  const [modalMessage, setModalMessage] = useState(""); // Modal message (Success/Error message)

  // Function to check if the contact section is in view
  const handleScroll = () => {
    const element = document.getElementById("contact-section"); // Get the contact section element
    const rect = element.getBoundingClientRect(); // Get the position of the element
    if (rect.top <= window.innerHeight) {
      setIsInView(true); // Set state to true if the element is in the view
    }
  };

  // useEffect hook to add and remove the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener when the component unmounts
    };
  }, []);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Using emailjs to send the form data to the email service
    emailjs
      .sendForm(
        "service_pb2f358", // Your EmailJS service ID
        "template_bon87tu", // Your EmailJS template ID
        e.target, // The form data
        "FYR6yeIlgXLuv126o" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Message sent successfully", result.text); // Log the success result
          setModalTitle("Success!"); // Set modal title to success
          setModalMessage("Your message has been sent successfully!"); // Set modal message
          setIsModalOpen(true); // Open the modal
        },
        (error) => {
          console.log("Error sending message", error.text); // Log error if sending fails
          setModalTitle("Error"); // Set modal title to error
          setModalMessage(
            "There was an error sending your message. Please try again." // Set error message
          );
          setIsModalOpen(true); // Open the modal
        }
      );

    e.target.reset(); // Reset the form fields after submission
  };

  return (
    <section
      id="contact-section" // The section that contains the contact form
      className={`py-20 px-4 bg-cover bg-center pb-40 bg-opacity-60 text-white transition-opacity duration-1000 ease-in-out font-serif flex flex-col items-center justify-center ${
        isInView ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: `url(${BackGround1})` }} // Background image styling
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl bg-zinc-900 border-black border-2 bg-opacity-80 p-6 mb-8 text-center font-extrabold max-w-2xl"
        initial={{ opacity: 0 }} // Initial state for animation
        animate={{ opacity: 1 }} // Animation target
        transition={{ duration: 1 }} // Transition duration
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center max-w-10xl bg-zinc-900 border-black border-2 bg-opacity-80 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }} // Initial state for animation
        animate={{ opacity: 1 }} // Animation target
        transition={{ duration: 1, delay: 0.3 }} // Delay for the animation
      >
        {/* Text Section */}
        <div className="sm:w-1/3 mb-8 sm:mb-0 flex items-center justify-center">
          <motion.p
            className="text-lg text-center font-extrabold sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 50 }} // Initial animation position and opacity
            whileInView={{ opacity: 1, y: 0 }} // Animation on scroll
            transition={{ duration: 0.6 }} // Transition duration for the animation
          >
            Whether you're starting a new project, looking for design advice, or
            simply want to explore possibilities, I’d love to hear from you.
            Let's collaborate to create a space that reflects your unique needs
            and style. Please fill out the form below, and I’ll get back to you
            as soon as possible. I’m excited to connect!
          </motion.p>
        </div>

        {/* Form Section */}
        <div className="sm:w-1/3 flex items-center justify-center pl-8 pr-8">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-6">
              <input
                id="name"
                name="from_name" // Match with the template variable
                type="text"
                placeholder="Enter your name"
                className="w-full p-4 rounded-md bg-zinc-900 border border-zinc-900 text-white focus:ring-2 focus:ring-red-500 transition-all duration-300 hover:bg-red-900"
              />
              <input
                id="email"
                name="from_email" // Match with the template variable
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 rounded-md bg-zinc-900 border border-zinc-900 text-white focus:ring-2 focus:ring-red-500 transition-all duration-300 hover:bg-red-900"
              />
              <textarea
                id="message"
                name="message" // Already correct variable name for the message
                placeholder="Enter your message"
                rows="5"
                className="w-full p-4 rounded-md bg-zinc-900 border border-zinc-900 text-white focus:ring-2 focus:ring-red-500 transition-all duration-300 hover:bg-red-900"
              />
            </div>
            <motion.button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-red-400 to-red-800 text-white text-xl font-bold rounded-md shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }} // Button hover effect
              whileTap={{ scale: 0.98 }} // Button tap effect
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.div
        className="mt-20 bg-gradient-to-r from-red-400 to-red-800 text-white py-3 rounded-md text-center font-bold max-w-md cursor-pointer transition-transform hover:scale-105 w-28"
        whileHover={{ scale: 1.1 }} // Hover effect
        whileTap={{ scale: 0.95 }} // Tap effect
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // Smooth scroll to top
      >
        Scroll to Top
      </motion.div>

      {/* Modal component for showing success/error message */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close the modal
        title={modalTitle}
        message={modalMessage}
      />
    </section>
  );
};

export default ContactMe; // Export the component for use in other parts of the app
