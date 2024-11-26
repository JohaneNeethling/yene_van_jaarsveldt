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
    </section>
  );
};

export default BlogPost;
