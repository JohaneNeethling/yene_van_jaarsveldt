// Footer component definition using an arrow function
const Footer = () => {
  return (
    // The main footer element styled with utility classes for Tailwind CSS
    <footer className="bg-zinc-400 text-yellow-950 font-bold text-lg py-10 text-center px-4 sm:px-6 md:px-8">
      {/* Paragraph element containing copyright information */}
      <p>
        &copy; 2024{" "}
        {/* Anchor element linking to the Neethling Development website */}
        <a
          href="https://your-digital-architect.onrender.com" // URL of the linked page
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Improves security by preventing potential malicious behavior in new tabs
          className="underline" // Underlines the text using Tailwind CSS
        >
          Neethling Development
        </a>{" "}
        {/* Closing text indicating rights are reserved */}. All Rights
        Reserved.
      </p>
    </footer>
  );
};

// Exporting the Footer component for use in other parts of the application
export default Footer;
