import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "WordPress Development",
    description:
      "I build responsive WordPress websites with clean structure, practical navigation, and business-focused functionality.",
  },
  {
    id: 2,
    title: "WooCommerce",
    description:
      "I create WooCommerce stores with product layouts, shopping flows, and responsive experiences that are easy to manage.",
  },
  {
    id: 3,
    title: "Website Optimization",
    description:
      "I improve website responsiveness, performance, mobile usability, and the overall visitor experience.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in WordPress development, WooCommerce, Elementor, responsive
            design, and custom website solutions for businesses.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines creativity and technical expertise to deliver
            solutions that are both visually appealing and highly functional for
            users.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
