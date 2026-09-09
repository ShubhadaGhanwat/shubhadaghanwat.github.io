import person from "../../assets/images/shubhada.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className="relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl 
      bg-white drop-shadow-2xl max-xl:mb-5 shadow-white 
      xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4"
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-10">

        {/* Profile Image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 overflow-hidden rounded-xl">
            <img
              className="bg-soft-white w-full h-full object-cover"
              src={person}
              alt="Shubhada Ghanwat - WordPress Developer"
            />
          </div>

          {/* Social Media */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div
                className="px-6 max-w-66 py-3 z-50 text-center bg-white 
                rounded-[4px] shadow-2xl drop-shadow-2xl shadow-white"
              >
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="max-sm:w-full w-[33rem]">

          <h2
            className="text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] 
            max-md:text-center font-semibold mb-8"
          >
            I am a WordPress Developer
          </h2>

          <div
            className="text-xs xs:text-[16px] lg:text-lg font-normal 
            max-md:text-center text-gray-600"
          >
            <p>
              I’m a WordPress Developer with 4+ years of experience in
              designing, developing, and maintaining responsive websites.
              I specialize in custom WordPress development, Elementor,
              WooCommerce, and plugin customization.
            </p>

            <p className="mt-4">
              I focus on creating clean, user-friendly, and SEO-friendly
              websites while improving performance, troubleshooting issues,
              and delivering solutions that meet client requirements.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-6 flex flex-wrap gap-2 max-md:justify-center">
            <span className="badge">WordPress</span>
            <span className="badge">Elementor</span>
            <span className="badge">WooCommerce</span>
            <span className="badge">PHP</span>
            <span className="badge">JavaScript</span>
            <span className="badge">HTML & CSS</span>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex max-md:justify-center flex-wrap gap-3">

            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 
              xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="#portfolio"
            >
              My Projects
            </a>

            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 
              xxs:py-3 bg-white duration-300 transition-all 
              hover:text-picto-primary hover:border-picto-primary 
              text-xs xxs:text-[14px] sm:text-[16px]"
              href={`${import.meta.env.BASE_URL}cv.pdf`}
              download
            >
              <FontAwesomeIcon icon={faDownload} />
              Download CV
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
