// Importing necessary React and React Router modules
import React from "react";
import { Route, Routes } from "react-router-dom"; // For routing between components
import Navbar from "./Navbar"; // Navigation bar component
import About from "./About"; // About section component
import Blog from "./Blog"; // Blog section component
import Footer from "./Footer"; // Footer component
import Intro from "./Intro"; // Intro section component
import Skills from "./Skills"; // Skills section component
import Portfolio from "./Portfolio"; // Portfolio section component
import CheckOut from "./CheckOut"; // Checkout section component
import Contact from "./Contact"; // Contact section component
import WhyMe from "./WhyChooseMe"; // Why Choose Me section component
import BlogPost from "./BlogPost"; // BlogPost page component

// PageLayout component wraps content with a Navbar and Footer layout.
function PageLayout({ children }) {
  return (
    <>
      <Navbar /> {/* Navbar for all pages */}
      {children} {/* Dynamically renders children content passed as prop */}
      <Footer /> {/* Footer for all pages */}
    </>
  );
}

// RoutesComponent defines all the routing for the app
function RoutesComponent({ posts }) {
  return (
    <Routes>
      {" "}
      {/* Wraps all route definitions */}
      {/* Default route renders the Intro component */}
      <Route path="/" element={<Intro />} />
      {/* "/home" route wraps multiple components inside PageLayout */}
      <Route
        path="/home"
        element={
          <PageLayout>
            {" "}
            {/* Wrapping multiple sections in PageLayout */}
            <About /> {/* About section */}
            <WhyMe /> {/* Why Choose Me section */}
            <Skills /> {/* Skills section */}
            <CheckOut /> {/* Checkout section */}
            <Contact /> {/* Contact section */}
          </PageLayout>
        }
      />
      {/* "/skills" route displays WhyMe, Skills, and Contact inside PageLayout */}
      <Route
        path="/skills"
        element={
          <PageLayout>
            {" "}
            {/* Wrapping selected sections in PageLayout */}
            <WhyMe /> {/* Why Choose Me section */}
            <Skills /> {/* Skills section */}
            <Contact /> {/* Contact section */}
          </PageLayout>
        }
      />
      {/* "/portfolio" route displays Portfolio and Contact inside PageLayout */}
      <Route
        path="/portfolio"
        element={
          <PageLayout>
            {" "}
            {/* Wrapping Portfolio and Contact sections */}
            <Portfolio /> {/* Portfolio section */}
            <Contact /> {/* Contact section */}
          </PageLayout>
        }
      />
      {/* "/blog" route displays Blog and Contact sections inside PageLayout */}
      <Route
        path="/blog"
        element={
          <PageLayout>
            {" "}
            {/* Wrapping Blog and Contact sections */}
            <Blog /> {/* Blog section */}
            <Contact /> {/* Contact section */}
          </PageLayout>
        }
      />
      {/* Dynamic "/blog/:id" route to display a specific blog post */}
      <Route path="/blog/:id" element={<BlogPost posts={posts} />} />
      {/* This will render the BlogPost component and pass `posts` as props */}
    </Routes>
  );
}

// Export the RoutesComponent as the default export for the module
export default RoutesComponent;
