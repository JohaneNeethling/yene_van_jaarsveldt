// Import the Link component from the react-router-dom package.
// This allows for navigation between routes without a full page reload.
import { Link } from "react-router-dom";

// Define the Navbar functional component.
const Navbar = () => {
  return (
    // Create a navigation bar with utility classes for styling.
    // The bar has a fixed position at the top of the page and spans its full width.
    <nav className="bg-zinc-400 text-yellow-950 font-bold text-lg py-4 px-6 fixed top-0 left-0 w-full z-10">
      {/* A container for flex layout to manage spacing between elements */}
      <div className="flex justify-between items-center w-full">
        {/* Create a horizontal layout for navigation links */}
        <div className="flex justify-evenly w-full">
          {/* Navigation link to the "Home" route */}
          <Link to="/home" className="hover:text-light-brown transition">
            CV
          </Link>
          {/* Navigation link to the "Portfolio" route */}
          <Link to="/portfolio" className="hover:text-light-brown transition">
            Portfolio
          </Link>
          {/* Navigation link to the "Skills" route */}
          <Link to="/skills" className="hover:text-light-brown transition">
            Skills
          </Link>
          {/* Navigation link to the "Blog" route */}
          <Link to="/blog" className="hover:text-light-brown transition">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Export the Navbar component to use it in other parts of the application.
export default Navbar;
