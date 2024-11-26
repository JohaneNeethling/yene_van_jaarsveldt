import React, { useState } from "react"; // Importing React and the useState hook for managing state
import { BrowserRouter as Router } from "react-router-dom"; // Importing Router for handling routing
import RoutesComponent from "./components/Routes"; // Importing RoutesComponent to handle the application's routes

function App() {
  // State hook to store an array of blog posts. The initial state is set to an array of two blog post objects.
  const [posts] = useState([
    {
      id: 1, // Unique identifier for the first post
      title: "The Art of Design: How Architecture Transforms Lives", // Title of the first post
      // Content of the first post
      content:
        "As an architect, my work goes beyond drafting blueprints—it's about shaping experiences. Architecture is the silent force that influences how we feel, how we work, and how we live. Each space I design is built with intention, designed to evoke a sense of belonging, comfort, and inspiration. What many may not realize is how architecture affects our daily lives. The flow of a room, the quality of light, and the choice of materials can all impact mood and functionality. I take pride in designing spaces that are not just aesthetically pleasing, but that truly serve their purpose. Whether it’s creating a home where family memories are made, or a workspace that boosts creativity and productivity, my focus is always on the people who will occupy the space. Sustainability is also a key principle in my design philosophy. I integrate eco-friendly materials and energy-efficient systems to ensure that the spaces I create are as kind to the environment as they are to those who use them. In every project, my goal is the same: to create spaces that connect people to their surroundings and improve the quality of their lives. Architecture isn’t just about what we build—it’s about how it makes us feel, how it shapes our lives, and how it stands the test of time.",
    },
    {
      id: 2, // Unique identifier for the second post
      title:
        "From Concept to Creation: The Journey of Bringing Your Vision to Life", // Title of the second post
      // Content of the second post
      content:
        "Every architectural project begins with a vision, a seed of an idea that eventually grows into a fully realized space. But the path from concept to creation is a dynamic journey that involves careful planning, thoughtful design, and constant collaboration. When I first sit down with a client, my goal is to understand their vision, needs, and the unique qualities of the site. This initial stage is all about listening and asking the right questions to ensure the design speaks to the client's values and aspirations. Once the foundation of the concept is set, I begin to sketch, model, and refine, transforming the initial idea into a set of plans that are both functional and beautiful. One of the most rewarding parts of the process is seeing the design come to life on-site. It’s not just about erecting walls and placing windows; it’s about creating a space that feels as much a part of its surroundings as it does a sanctuary for the people who will use it. From selecting the perfect materials to ensuring the space is energy-efficient, every detail is considered with care. At the heart of this journey is collaboration. Whether I’m working with contractors, engineers, or interior designers, the goal is always to bring the vision to life in a way that is true to its original concept while adapting to the evolving challenges that arise during construction. Bringing a vision to life is a process of discovery, transformation, and refinement. The end result is always worth the effort—spaces that are functional, beautiful, and built to last.",
    },
  ]);

  return (
    <Router>
      {" "}
      {/* Wrap the application in a Router to enable routing functionality */}
      <RoutesComponent posts={posts} />{" "}
      {/* Pass the posts state as a prop to the RoutesComponent */}
    </Router>
  );
}

export default App; // Export the App component so it can be used in other parts of the application
