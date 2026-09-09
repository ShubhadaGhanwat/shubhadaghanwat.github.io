import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "WORDPRESS DEVELOPMENT",
    title: "Business WordPress Website",
    description:
      "Responsive business website built with WordPress and a mobile-first layout.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "WORDPRESS DEVELOPMENT",
    title: "Business WordPress Website",
    description:
      "Professional company website with service sections, contact flow, and responsive design.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "WORDPRESS DEVELOPMENT",
    title: "Business WordPress Website",
    description:
      "WordPress website structured for easy content updates and future expansion.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "WORDPRESS DEVELOPMENT",
    title: "Business WordPress Website",
    description:
      "Responsive landing page with clear calls to action and optimized section layouts.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "WORDPRESS DEVELOPMENT",
    title: "Business WordPress Website",
    description:
      "WooCommerce storefront concept with product-focused layouts and conversion-friendly pages.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "WORDPRESS DEVELOPMENT",
    title: "Business WordPress Website",
    description:
      "Portfolio website showcasing WordPress development, custom sections, and project work.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Projects
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
