// Importing necessary modules and components
import { motion } from "framer-motion"; // For animations
import { useState } from "react"; // For managing component state

// Importing image assets for various portfolio items
// Each image corresponds to a specific portfolio section
import BeachCottage1 from "../media/BeachCottage/Beach Cottage1.jpg";
import BeachCottage2 from "../media/BeachCottage/Beach Cottage2.jpg";
import BeachCottage3 from "../media/BeachCottage/Beach Cottage3.jpg";
import BeachCottage4 from "../media/BeachCottage/Beach Cottage4.jpg";
import BeachCottage5 from "../media/BeachCottage/Beach Cottage5.jpg";
import BeachCottage6 from "../media/BeachCottage/Beach Cottage6.jpg";
import BeachCottageLogo from "../media/BeachCottage/Beach Cottage Logo.jpg";
import Visitors1 from "../media/Visitors/Visitors.jpg";
import Visitors2 from "../media/Visitors/Visitors2.jpg";
import Visitors3 from "../media/Visitors/Visitors3.jpg";
import Visitors4 from "../media/Visitors/Visitors4.jpg";
import Visitors5 from "../media/Visitors/Visitors5.jpg";
import Visitors6 from "../media/Visitors/Visitors6.jpg";
import Visitors7 from "../media/Visitors/Visitors7.jpg";
import Visitors8 from "../media/Visitors/Visitors8.jpg";
import VisitorsLogo from "../media/Visitors/VisitorsLogo.jpg";
import Domestic1 from "../media/Domestic/Domestic.jpg";
import Domestic2 from "../media/Domestic/Domestic2.jpg";
import Domestic3 from "../media/Domestic/Domestic3.jpg";
import Domestic4 from "../media/Domestic/Domestic4.jpg";
import Domestic5 from "../media/Domestic/Domestic5.jpg";
import Domestic6 from "../media/Domestic/Domestic6.jpg";
import Domestic7 from "../media/Domestic/Domestic7.jpg";
import DomesticLogo from "../media/Domestic/DomesticLogo.jpg";
import Commercial1 from "../media/CommercialSpace/CommercialSpace.jpg";
import Commercial2 from "../media/CommercialSpace/CommercialSpace2.jpg";
import Commercial3 from "../media/CommercialSpace/CommercialSpace3.jpg";
import Commercial4 from "../media/CommercialSpace/CommercialSpace4.jpg";
import CommercialLogo from "../media/CommercialSpace/CommercialSpace Logo.jpg";
import OfficeBlock1 from "../media/OfficeBlock/OfficeBlock.jpg";
import OfficeBlock2 from "../media/OfficeBlock/OfficeBlock2.jpg";
import OfficeBlock3 from "../media/OfficeBlock/OfficeBlock3.jpg";
import OfficeBlock4 from "../media/OfficeBlock/OfficeBlock4.jpg";
import OfficeBlock5 from "../media/OfficeBlock/OfficeBlock5.jpg";
import OfficeBlock6 from "../media/OfficeBlock/OfficeBlock6.jpg";
import OfficeBlock7 from "../media/OfficeBlock/OfficeBlock7.jpg";
import OfficeBlockLogo from "../media/OfficeBlock/OfficeBlock Logo.jpg";
import Submission1 from "../media/Submission/Submission.jpg";
import Submission2 from "../media/Submission/Submission2.jpg";
import Submission3 from "../media/Submission/Submission3.jpg";
import Conceptual1 from "../media/Conceptual/Conceptual.jpg";
import Conceptual2 from "../media/Conceptual/Conceptual2.jpg";
import Conceptual3 from "../media/Conceptual/Conceptual3.jpg";
import Conceptual4 from "../media/Conceptual/Conceptual4.jpg";
import Conceptual5 from "../media/Conceptual/Conceptual5.jpg";
import ConstructionDetails1 from "../media/ConstructionDetails/ConstructionDetails1.jpg";
import ConstructionDetails2 from "../media/ConstructionDetails/ConstructionDetails2.jpg";
import ConstructionDetails3 from "../media/ConstructionDetails/ConstructionDetails3.jpg";
import ConstructionDetails4 from "../media/ConstructionDetails/ConstructionDetails4.jpg";
import ConstructionDetailsLogo from "../media/ConstructionDetails/ConstructionDetailsLogo.jpg";
import DimenionalDrawing1 from "../media/DimensionalDrawing/DimensionalDrawing1.jpg";
import DimenionalDrawing2 from "../media/DimensionalDrawing/DimensionalDrawing2.jpg";
import DimenionalDrawing3 from "../media/DimensionalDrawing/DimensionalDrawing3.jpg";
import DimensionalDrawingLogo from "../media/DimensionalDrawing/DimensionalDrawingLogo.jpg";
import PermaCul1 from "../media/PermaCultureBuilding/PermaCultureBuilding1.jpg";
import PermaCul2 from "../media/PermaCultureBuilding/PermaCultureBuilding2.jpg";
import PermaCul3 from "../media/PermaCultureBuilding/PermaCultureBuilding3.jpg";
import PermaCul4 from "../media/PermaCultureBuilding/PermaCultureBuilding4.jpg";
import PermaCul5 from "../media/PermaCultureBuilding/PermaCultureBuilding5.jpg";
import PermaCul6 from "../media/PermaCultureBuilding/PermaCultureBuilding6.jpg";
import PermaCul7 from "../media/PermaCultureBuilding/PermaCultureBuilding7.jpg";
import PermaCul8 from "../media/PermaCultureBuilding/PermaCultureBuilding8.jpg";
import PermaCul9 from "../media/PermaCultureBuilding/PermaCultureBuilding9.jpg";
import PermaCulLogo from "../media/PermaCultureBuilding/PermaCultureBuildingLogo.jpg";
import Precedent1 from "../media/Precedent/Precedent.jpg";
import Precedent2 from "../media/Precedent/Precedent2.jpg";
import Precedent3 from "../media/Precedent/Precedent3.jpg";
import Precedent4 from "../media/Precedent/Precedent4.jpg";
import Precedent5 from "../media/Precedent/Precedent5.jpg";
import Precedent6 from "../media/Precedent/Precedent6.jpg";
import Precedent7 from "../media/Precedent/Precedent7.jpg";
import PrecedentLogo from "../media/Precedent/PrecedentLogo.jpg";
import SiteContextClimate1 from "../media/SiteContextClimate/SiteContextClimate1.jpg";
import SiteContextClimate2 from "../media/SiteContextClimate/SiteContextClimate2.jpg";
import SiteContextClimate3 from "../media/SiteContextClimate/SiteContextClimate3.jpg";
import SiteContextClimate4 from "../media/SiteContextClimate/SiteContextClimate4.jpg";
import SiteContextClimate5 from "../media/SiteContextClimate/SiteContextClimate5.jpg";
import SiteContextClimate6 from "../media/SiteContextClimate/SiteContextClimate6.jpg";
import SiteContextClimate7 from "../media/SiteContextClimate/SiteContextClimate7.jpg";
import SiteContextClimateLogo from "../media/SiteContextClimate/SiteContextClimateLogo.jpg";
import SusBuilding1 from "../media/SustainableBuilding/SustainableBuilding1.jpg";
import SusBuilding2 from "../media/SustainableBuilding/SustainableBuilding2.jpg";
import SusBuilding3 from "../media/SustainableBuilding/SustainableBuilding3.jpg";
import SusBuilding4 from "../media/SustainableBuilding/SustainableBuilding4.jpg";
import SusBuilding5 from "../media/SustainableBuilding/SustainableBuilding5.jpg";
import SusBuildingLogo from "../media/SustainableBuilding/SustainableBuildingLogo.jpg";
import Systems1 from "../media/Systems/Systems.jpg";
import Systems2 from "../media/Systems/Systems2.jpg";
import Systems3 from "../media/Systems/Systems3.jpg";
import SystemsLogo from "../media/Systems/SystemsLogo.jpg";

// Array containing portfolio item data
// Each object contains details about the portfolio item, including ID, title, description, image, and a gallery of images

const portfolioItems = [
  {
    id: 1,
    title: "Beach Cottage",
    image: BeachCottageLogo,
    description: "Technical drawings for a Beach Cottage",
    gallery: [
      BeachCottage1,
      BeachCottage2,
      BeachCottage3,
      BeachCottage4,
      BeachCottage5,
      BeachCottage6,
    ],
  },
  {
    id: 2,
    title: "Visitor's Centre",
    image: VisitorsLogo,
    description:
      "Advanced design of a Vistor's Centre using detailed sketches and scaled freehand drawings.",
    gallery: [
      Visitors1,
      Visitors2,
      Visitors3,
      Visitors4,
      Visitors5,
      Visitors6,
      Visitors7,
      Visitors8,
      Submission1,
      Submission2,
      Submission3,
      Conceptual1,
      Conceptual2,
      Conceptual3,
      Conceptual4,
      Conceptual5,
    ],
  },
  {
    id: 3,
    title: "Sustainable Domestic Design",
    image: DomesticLogo,
    description:
      "Residential dwelling using natural and alternative building techniques.",
    gallery: [
      Domestic1,
      Domestic2,
      Domestic3,
      Domestic4,
      Domestic5,
      Domestic6,
      Domestic7,
    ],
  },
  {
    id: 4,
    title: "Renovating A Commercial Space",
    image: CommercialLogo,
    description:
      "Renovating an existing commercial space to demonstrate project management within the construction environment.",
    gallery: [Commercial1, Commercial2, Commercial3, Commercial4],
  },
  {
    id: 5,
    title: "Office Block",
    image: OfficeBlockLogo,
    description: "The intricacies of Office Space designing.",
    gallery: [
      OfficeBlock1,
      OfficeBlock2,
      OfficeBlock3,
      OfficeBlock4,
      OfficeBlock5,
      OfficeBlock6,
      OfficeBlock7,
    ],
  },
  {
    id: 6,
    title: "Construction Details",
    image: ConstructionDetailsLogo,
    description:
      "Mastering various technical drawing sheets, focusing on construction details using AutoCAD. ",
    gallery: [
      ConstructionDetails1,
      ConstructionDetails2,
      ConstructionDetails3,
      ConstructionDetails4,
    ],
  },
  {
    id: 7,
    title: "Dimensional Drawing Techniques",
    image: DimensionalDrawingLogo,
    description:
      "The realm of 3D-drawing techniques, mastering axonometric and persepctive drawings.",
    gallery: [DimenionalDrawing1, DimenionalDrawing2, DimenionalDrawing3],
  },
  {
    id: 8,
    title: "Permaculture Building Principles",
    image: PermaCulLogo,
    description:
      "The integration of ecological practices into building technologies, guided by the principles and ethics of permaculture.",
    gallery: [
      PermaCul1,
      PermaCul2,
      PermaCul3,
      PermaCul4,
      PermaCul5,
      PermaCul6,
      PermaCul7,
      PermaCul8,
      PermaCul9,
    ],
  },
  {
    id: 9,
    title: "Precedent Studies",
    image: PrecedentLogo,
    description:
      "Designing a new Tourist Information Centre, focusing on the Menlyn Maine District in Pretoria, South Africa.",
    gallery: [
      Precedent1,
      Precedent2,
      Precedent3,
      Precedent4,
      Precedent5,
      Precedent6,
      Precedent7,
    ],
  },
  {
    id: 10,
    title: "Site, Context & Climate Analysis",
    image: SiteContextClimateLogo,
    description:
      "A comprehensive exploration of a selected site in South Africa, aiming to master its architectural context, environmental factors and cultural influences.",
    gallery: [
      SiteContextClimate1,
      SiteContextClimate2,
      SiteContextClimate3,
      SiteContextClimate4,
      SiteContextClimate5,
      SiteContextClimate6,
      SiteContextClimate7,
    ],
  },
  {
    id: 11,
    title: "Sustainable Building Case Study",
    image: SusBuildingLogo,
    description:
      "Exploring the fundamental principles of ecological building design and sustainability.",
    gallery: [
      SusBuilding1,
      SusBuilding2,
      SusBuilding3,
      SusBuilding4,
      SusBuilding5,
    ],
  },
  {
    id: 12,
    title: "Water, Reticulation, Waste Disposal, Electrical & Lighting Systems",
    image: SystemsLogo,
    description:
      "Detailed layout of my plans for a site regarding these aspects.",
    gallery: [Systems1, Systems2, Systems3],
  },
];

// Portfolio component
const Portfolio = () => {
  // State to track the currently selected portfolio item
  const [selectedItem, setSelectedItem] = useState(null);

  // State to track the currently selected image for fullscreen view
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle when a portfolio item is clicked
  const handleClick = (item) => {
    setSelectedItem(item); // Set the selected item to display in a modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedItem(null); // Reset selected item
    setSelectedImage(null); // Reset selected image
  };

  // Function to handle when an image in the gallery is clicked
  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the selected image for fullscreen view
  };

  // Function to close the fullscreen view
  const handleCloseFullscreen = () => {
    setSelectedImage(null); // Reset selected image
  };

  return (
    <section className="bg-zinc-900 text-white py-20 px-4" id="portfolio">
      {/* Portfolio header with animation */}
      <motion.h2
        className="text-5xl text-white font-bold mb-6 py-8 tracking-widest font-serif pt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome To My Workspace
      </motion.h2>

      {/* Introductory text with animation */}
      <motion.h4
        className="text-lg text-white font-bold mb-6 py-3 tracking-widest font-serif"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        As an architect, I see each project as a unique opportunity to create
        something meaningful. My portfolio reflects a wide range of work, from
        residential designs to innovative commercial spaces, all crafted with a
        commitment to functionality, beauty, and sustainability. Every design
        starts with a deep understanding of the space and its purpose—whether
        it’s a home that fosters comfort, a workspace that inspires creativity,
        or a public space that encourages community. I believe in creating
        environments that not only meet the needs of today but also stand the
        test of time. Explore my portfolio to see how I bring vision to life,
        one thoughtfully designed space at a time.
      </motion.h4>

      {/* Portfolio grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative bg-zinc-700 rounded-lg overflow-hidden shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Portfolio item image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />

            {/* Overlay with title, description, and button */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white font-bold mb-2 p-4 font-serif text-center">
              <h3 className="text-2xl font-semibold border-b pt-2">
                {item.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base">{item.description}</p>
              <button
                onClick={() => handleClick(item)}
                className="mt-4 px-4 py-2 bg-gradient-to-r from-red-400 to-red-800 text-white rounded text-sm sm:text-base"
              >
                See More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for viewing gallery of selected portfolio item */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg relative w-full max-w-4xl">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-xl text-black font-bold"
            >
              &times;
            </button>
            <h3 className="text-3xl font-semibold mb-4">
              {selectedItem.title}
            </h3>

            {/* Gallery grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto max-h-[500px]">
              {selectedItem.gallery.map((image, index) => (
                <div
                  key={index}
                  className="bg-gray-200 p-2 rounded-lg cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-64 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen image viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center"
          onClick={handleCloseFullscreen}
        >
          <div className="relative w-full h-full flex justify-center items-center">
            <button
              onClick={handleCloseFullscreen}
              className="absolute top-4 right-4 text-4xl text-white font-bold"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
