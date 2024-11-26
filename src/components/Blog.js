import React, { useState } from "react"; // Import React and the useState hook for managing component state
import { motion } from "framer-motion"; // Import motion for animations using framer-motion
import { Link } from "react-router-dom"; // Import Link for navigation to different routes
import "./Blog.css"; // Import CSS for styling

const Blog = () => {
  // State variable 'posts' to hold an array of blog post objects
  const [posts] = useState([
    {
      id: 1,
      title: "The Art of Design: How Architecture Transforms Lives", // Blog post title
    },
    {
      id: 2,
      title:
        "From Concept to Creation: The Journey of Bringing Your Vision to Life", // Another blog post title
    },
  ]);

  return (
    <section className="py-20 px-4 bg-zinc-900">
      {/* Header section with a motion effect */}
      <motion.h2
        className="text-5xl text-white font-bold mb-6 py-8 tracking-widest font-serif mt-32"
        initial={{ opacity: 0, y: 50 }} // Initial state for opacity and position (y-axis)
        whileInView={{ opacity: 1, y: 0 }} // Change to these values when the element comes into view
        transition={{ duration: 0.6 }} // Smooth transition for the animation
      >
        Delve Into My Mind...
      </motion.h2>

      {/* Subheading with a motion effect */}
      <motion.h4
        className="text-lg text-white font-bold mb-6 py-3 tracking-widest font-serif"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Architecture goes beyond just designing buildings—it’s about creating
        spaces that transform how we experience the world. When you step into an
        architect’s mind, you see a blend of creativity, function, and
        innovation. Every design begins with understanding the purpose of the
        space, who will use it, and how it interacts with its environment. An
        architect’s work is driven by empathy—considering how people will feel
        in the space, how they’ll move through it, and how it impacts their
        daily lives. Innovation plays a key role, with architects constantly
        exploring new materials and sustainable solutions. In short,
        architecture is where art and science converge, and the architect’s mind
        is where vision and practicality come together to create spaces that are
        both beautiful and functional.
      </motion.h4>

      {/* Blog posts grid layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 p-20">
        {/* Iterate over the 'posts' array to generate each blog post card */}
        {posts.map((post) => (
          <motion.div
            key={post.id} // Unique key for each post
            className="bg-zinc-700 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0 }} // Initial opacity for the card
            animate={{ opacity: 1 }} // Animate to fully visible
            transition={{ duration: 0.8 }} // Smooth transition for opacity
          >
            <div className="p-6">
              <h3 className="text-2xl text-white font-bold pt-2">
                {post.title} {/* Display post title */}
              </h3>
              {/* Link to the individual blog post */}
              <Link
                to={`/blog/${post.id}`} // Dynamic URL for each post
                className="text-red-700 hover:underline"
              >
                Read → {/* Link text */}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog; // Export the Blog component for use in other parts of the application
