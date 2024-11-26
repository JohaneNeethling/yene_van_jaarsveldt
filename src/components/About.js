import { motion } from "framer-motion"; // Importing motion for animations
import Insta from "../media/1.png"; // Importing Instagram logo
import FaceBook from "../media/2.png"; // Importing Facebook logo
import TikTok from "../media/4.png"; // Importing TikTok logo
import LinkedIn from "../media/3.png"; // Importing LinkedIn logo
import Yene from "../media/Yene.png"; // Importing personal image

const About = () => {
  return (
    <div>
      <section className="py-20 px-4 bg-zinc-400">
        {/* Main container for the About section with padding and background */}
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left border border-gray-500 rounded-lg shadow-lg p-6">
          {/* Section containing text information about Yene */}
          <div className="w-full md:w-1/2 md:mr-10">
            {/* Animated heading with fade-in effect */}
            <motion.h2
              className="text-4xl sm:text-5xl font-black mb-4 text-light-brown font-serif mt-20"
              initial={{ opacity: 0 }} // Initial opacity is 0 (invisible)
              animate={{ opacity: 1 }} // Animate to opacity 1 (fully visible)
              transition={{ duration: 1 }} // Animation duration is 1 second
            >
              Yene Van Jaarsveldt
            </motion.h2>

            {/* Animated paragraph with fade-in effect */}
            <motion.div
              className="text-base sm:text-m leading-relaxed text-light-brown font-semibold font-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }} // Slightly longer animation duration
            >
              {/* About text about Yene Van Jaarsveldt */}
              I'm a passionate and qualified Architectural Technology
              Draftswoman, driven by a desire to create sustainable,
              environmentally conscious designs. Born on December 3, 2002, I've
              always been fascinated by the intersection of creativity,
              technology, and sustainability. As a creative and spontaneous
              individual, I thrive in environments that encourage innovation and
              growth. I'm an ambivert, balancing introverted focus with
              extroverted enthusiasm. With a strong passion for personal growth
              and self-development, I welcome constructive criticism as an
              opportunity for improvement. In addition to my architectural
              expertise, I have two years of experience as a Social Media
              Manager. I'm dedicated to continuously refining my skills and
              perspectives, embracing feedback and fostering a growth mindset.
              I'm a firm believer in the importance of sustainability and
              environmental consciousness. My ultimate goal is to establish my
              own firm, specializing in sustainable studies and buildings that
              promote a healthier planet.
              <div className="flex flex-wrap justify-center sm:justify-start gap-8 mt-5">
                {/* Social media icons section */}
                <motion.a
                  href="https://www.instagram.com/ms_vanjaarsveldt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={Insta} // Instagram logo
                    alt="Instagram"
                    className="w-[3rem] h-[3rem] sm:w-[3.5rem] sm:h-[3.5rem] rounded-lg shadow-lg"
                    initial={{ opacity: 0 }} // Initial opacity
                    animate={{ opacity: 1 }} // Fade-in effect
                    transition={{ duration: 1 }} // Animation duration
                  />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/yene.van.jaarsveld"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={FaceBook} // Facebook logo
                    alt="Facebook"
                    className="w-[3rem] h-[3rem] sm:w-[3.5rem] sm:h-[3.5rem] rounded-lg shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                  />
                </motion.a>
                <motion.a
                  href="https://www.tiktok.com/@yene_van_jaarsveldt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={TikTok} // TikTok logo
                    alt="TikTok"
                    className="w-[3rem] h-[3rem] sm:w-[3.5rem] sm:h-[3.5rem] rounded-lg shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.4 }}
                  />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/yene-van-jaarsveldt-a3007933a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={LinkedIn} // LinkedIn logo
                    alt="LinkedIn"
                    className="w-[3rem] h-[3rem] sm:w-[3.5rem] sm:h-[3.5rem] rounded-lg shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.6 }}
                  />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Section for personal image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end rounded-lg overflow-hidden mt-8 md:mt-0"
            initial={{ x: "100%" }} // Initial position to the right of the screen
            animate={{ x: 0 }} // Animate to the original position (0)
            transition={{ duration: 1 }} // 1-second animation for the image transition
          >
            <img
              src={Yene} // Image of Yene
              alt="Architect"
              className="w-full h-auto max-w-[90%] max-h-[90vh] object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; // Exporting the component to use in other parts of the app
