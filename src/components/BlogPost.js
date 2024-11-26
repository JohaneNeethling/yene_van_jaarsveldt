import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion for animations

const BlogPost = ({ posts }) => {
  // Use useParams to get the dynamic post ID from the URL
  const { id } = useParams();

  // Find the post that matches the ID from the URL
  const post = posts.find((post) => post.id === parseInt(id));

  // If no post is found, display an error message
  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-8 bg-zinc-900 overflow-hidden">
      {/* Title of the blog post with a fade-in animation */}
      <motion.h2
        className="text-3xl sm:text-5xl text-white font-bold mb-6 opacity-0"
        initial={{ opacity: 0, y: -50 }} // Initial state (hidden and off-screen)
        animate={{ opacity: 1, y: 0 }} // Final state (fully visible and on-screen)
        transition={{ duration: 1, delay: 0.3 }} // Animation duration and delay
      >
        {post.title} {/* Display the title of the post */}
      </motion.h2>

      {/* Content of the blog post with a fade-in and slide-up effect */}
      <motion.p
        className="text-base sm:text-lg text-white mb-8 opacity-0"
        initial={{ opacity: 0, y: 20 }} // Initial state (hidden and slightly moved down)
        animate={{ opacity: 1, y: 0 }} // Final state (fully visible and in place)
        transition={{ duration: 1, delay: 0.5 }} // Animation duration and delay
      >
        {post.content} {/* Display the content of the post */}
      </motion.p>

      {/* Back button with hover effects and animations */}
      <motion.a
        href="/blog" // Link to go back to the blog list
        className="inline-block mt-6 sm:mt-8 sm:px-7 sm:py-3 px-4 py-2 bg-gradient-to-r from-red-400 to-red-800 text-white text-base sm:text-lg font-bold rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:rotate-6 hover:opacity-90"
        initial={{ opacity: 0 }} // Initially hidden
        animate={{ opacity: 1 }} // Fade in to full opacity
        transition={{ duration: 1, delay: 0.7 }} // Animation delay and duration
      >
        Back {/* Button text */}
      </motion.a>
    </section>
  );
};

export default BlogPost;
