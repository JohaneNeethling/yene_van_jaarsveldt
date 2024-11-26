import { motion } from "framer-motion"; // Importing motion from framer-motion for animation effects

// Array of skills, each with a name and description
const skills = [
  {
    name: "Architectural Scheduling",
    description:
      "I'm familiar with creating and managing architectural schedules, ensuring projects are completed on time and within budget.",
  },
  {
    name: "Fenestration Calculations",
    description:
      "I possess knowledge of fenestration calculations, which involve determining the optimal size, placement, and type of windows and doors for a building.",
  },
  {
    name: "Sustainable Design Principles",
    description:
      "I'm knowledgeable about sustainable design principles, which guide the creation of environmentally conscious and energy-efficient buildings.",
  },
  {
    name: "ArchiCAD",
    description:
      "I'm skilled in using ArchiCAD, a popular BIM software, to create detailed architectural designs, models, and documentation.",
  },
  {
    name: "Canva",
    description:
      "I'm proficient in using Canva, a graphic design platform, to create visual content, such as presentations, social media graphics, and infographics.",
  },
  {
    name: "Microsoft Office",
    description:
      "I'm skilled in using Microsoft Office applications, including Word and Excel, to create documents, spreadsheets, and presentations.",
  },
  {
    name: "Graphic Designing",
    description:
      "I possess graphic design skills, which allow me to create visually appealing and effective designs for various mediums.",
  },
  {
    name: "Creative Thinking",
    description:
      "I'm able to think creatively, generating innovative ideas and solutions to complex problems.",
  },
  {
    name: "Brainstorming",
    description:
      "I'm skilled in facilitating and participating in brainstorming sessions, which helps to generate and refine ideas.",
  },
  {
    name: "People Skills",
    description:
      "I possess excellent communication and interpersonal skills, which enable me to work effectively with colleagues, clients, and stakeholders.",
  },
  {
    name: "Organizational & Admin Skills",
    description:
      "I'm able to prioritize tasks, manage my time effectively, and maintain organized digital and physical files. I'm familiar with administrative tasks, such as scheduling appointments, managing emails, and maintaining records.",
  },
  {
    name: "Time Management",
    description:
      "I'm able to manage my time efficiently, prioritize tasks, and meet deadlines.",
  },
];

// Array of skill set categories, used as section headers
const skillSetHeadings = [
  "Architectural Skills",
  "Technical Skills",
  "Creative Skills",
  "Soft Skills",
];

// Chunking the skills array into groups of 3 to display them in sections
const chunkedSkills = [];
for (let i = 0; i < skills.length; i += 3) {
  chunkedSkills.push(skills.slice(i, i + 3));
}

// Main functional component to render the Skills section
const Skills = () => {
  return (
    <section className="bg-zinc-900 text-white py-20 px-4" id="skills">
      {/* Iterating over the chunkedSkills array to create skill sections */}
      {chunkedSkills.map((group, index) => (
        <div key={index} className="mb-12">
          {/* Motion animated header for each skill category */}
          <motion.h2
            className={`text-4xl md:text-5xl font-bold mb-6 py-8 tracking-widest font-serif ${
              index % 2 === 0 ? "text-left" : "text-right"
            }`}
            initial={{ opacity: 0, y: 50 }} // Initial animation state
            whileInView={{ opacity: 1, y: 0 }} // Final animation state when in view
            transition={{ duration: 0.6 }} // Duration of animation
          >
            {skillSetHeadings[index] || `Skill Set ${index + 1}`}
          </motion.h2>
          {/* Grid layout for the skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Iterating over each skill in the current group */}
            {group.map((skill, subIndex) => (
              <motion.div
                key={subIndex}
                className="bg-zinc-700 p-6 rounded-lg shadow-xl text-center font-serif transition-all duration-300 ease-in-out transform"
                initial={{ opacity: 0, y: 50 }} // Initial animation state
                whileInView={{ opacity: 1, y: 0 }} // Final animation state when in view
                transition={{ duration: 0.8, delay: subIndex * 0.2 }} // Delay animation per item
                viewport={{ once: true }} // Animation occurs only once when item is in view
                whileHover={{
                  scale: 1.05, // Scale effect on hover
                  rotate: 2, // Slight rotation on hover
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Shadow effect on hover
                }}
              >
                {/* Skill name displayed as a header */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 border-b pt-2">
                  {skill.name}
                </h3>
                {/* Skill description displayed as a paragraph */}
                <p className="text-sm sm:text-lg text-white">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

// Export the Skills component to be used in other parts of the application
export default Skills;
