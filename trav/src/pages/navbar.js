import bg from "../images/backgroundImg1.png";
import { Link } from "react-router-dom";
import logo from "../images/capp.png";
import logo2 from "../images/icon.svg";
import benefits from "../images/benefits.png";
import help from "../images/consultants_consultant.png";
import about from "../images/aboit.jpg";
import image1 from "../images/image.png";
import image2 from "../images/image0.png";
import image3 from "../images/image1.png";
import requirements from "../images/GeneralRequirements.svg";
import cnada from "../images/Group.svg";
import imm from "../images/imm.jpg";
import un1 from "../images/un1.jpg";
import study from "../images/study3.jpg";
import settle from "../images/settle.jpg";
import limm from "../images/limm.jpg";
import lstudy from "../images/lstudy3.jpg";
import lsettle from "../images/lsettle.jpg";

export default function Navbar() {
  const showHide = () => {
    let main = document.getElementById("smald").style.display;

    if (main == "none") {
      document.getElementById("small-screen").style.background = "#303030";
      document.getElementById("smald").style.display = "flex";
      document.getElementById("small-screen").style.bottom = "0";
    } else {
      document.getElementById("small-screen").style.background = "transparent";
      document.getElementById("smald").style.display = "none";
      document.getElementById("small-screen").style.bottom = "auto";
    }
  };

  return (
    <div class="fixed left-0 right-0 w-full z-50 top-0">
      <div
        style={{ backgroundColor: "#d90025" }}
        class="flex py-3 lg:px-20 px-6 justify-end lg:justify-between items-center"
      >
        <div class="hidden lg:block">Welcome To Canada Visa Pathway.</div>
        <div class="flex underline">
          <a href="https://wa.me/14166197563" class="pl-4 ">
            + 1 (416) 619 7563
          </a>
        </div>
      </div>
      <div style={{ zIndex: 99999 }} id="head-nav" class="">
        <div
          id="big screen"
          style={{ zIndex: 99999 }}
          class=" hidden lg:flex flex-col xl:flex-row justify-between pl-3 pr-4 lg:pr-20 lg:pl-12"
        >
          <div class="xl:py-6 py-5 xl:block flex justify-between items-center">
            <Link
              to="/"
              id="had-img"
              class=" flex justify-center items-center overflow-hidden"
            >
              <img src={logo} class="h-14" />
              <img src={logo2} class="h-14" />
            </Link>

            <div onClick={showHide} class="block xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 text-red-600 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </div>
          </div>

          <div class="hidden xl:flex flex-col xl:flex-row items-center overflow-hidden font-medium tracking-wide">
            <Link
              to="/home"
              class="px-5 py-5 xl:py-6 cursor-pointer hover:text-red-700"
            >
              Home
            </Link>
            <div id="dropdown" class="px-5 w-full xl:w-auto">
              <div
                id="dropdown-btn"
                class="relative py-5 xl:py-6 hover:text-red-700 cursor-pointer w-full xl:w-auto flex justify-center items-center"
              >
                About Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 pl-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div
                id="dropdown-cont"
                style={{ zIndex: 999989 }}
                class="hidden rounded flex-col py-3 text-black text-sm bg-white w-full overflow-hidden xl:w-52 absolute"
              >
                <Link
                  class="py-3 px-3  hover:text-red-700 underline"
                  to="/about"
                >
                  <span>About Us</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-red-700 underline"
                  to="/agent-list"
                >
                  <span>Agent List</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-red-700 underline"
                  to="/frequently-asked-questions"
                >
                  <span>FAQs</span>
                </Link>
              </div>
            </div>
            <div id="dropdown" class="px-5 w-full xl:w-auto">
              <Link
                to="/visa-services"
                id="dropdown-btn"
                class="relative py-5 xl:py-6 hover:text-red-700 cursor-pointer w-full xl:w-auto flex justify-center items-center"
              >
                Visa Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 pl-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              <div
                id="dropdown-cont"
                style={{ zIndex: 999989 }}
                class="hidden rounded flex-col py-3 text-black text-sm bg-white w-full overflow-hidden xl:w-64 absolute"
              >
                <Link
                  class="py-3 px-3  hover:text-red-700 underline"
                  to="/visa-services/tourist-visa"
                >
                  <span>Tourist Visa</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-red-700 underline"
                  to="/visa-services/visitor-visa"
                >
                  <span>Visitor Visa</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-red-700 underline"
                  to="/visa-services/business-visa"
                >
                  <span>Business Visa</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-red-700 underline"
                  to="/visa-services/student-visa"
                >
                  <span>Student Visa</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-red-700 underline"
                  to="/visa-services/work-visa"
                >
                  <span>Work Visa</span>
                </Link>
                <a
                  href="https://wa.me/14166197563"
                  class="py-3 px-3  hover:text-red-700 underline"
                >
                  <span>Get IELTS Result / Job Offer Letter</span>
                </a>
                <a
                  href="https://wa.me/14166197563"
                  class="py-3 px-3  hover:text-red-700 underline"
                >
                  <span>Permanent Residency Visa</span>
                </a>
              </div>
            </div>
            {/* <Link
              to="/frequently-asked-questions"
              class="px-5 py-5 xl:py-6 cursor-pointer hover:text-red-700"
            >
              Faq
            </Link> */}
          </div>

          <div class="hidden xl:flex flex-col xl:flex-row py-5 xl:py-6 items-center justify-between">
            <div>
              <Link
                class=" bg-red-700 text-white rounded-md px-8 py-3 outline-none border-2 border-red-700 hover:bg-white hover:text-red-700"
                to="/apply"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        <div
          id="small-screen"
          style={{ zIndex: 99999 }}
          class="flex h-full sticky top-0 w-full lg:hidden flex-col xl:flex-row justify-between xl:px-20"
        >
          <div class="xl:py-6 pr-4 py-5 xl:block flex justify-between items-center">
            <a
              href="/"
              id="had-img"
              class=" flex justify-center items-center overflow-hidden"
            >
              <img src={logo} class="h-14" />
              <img src={logo2} class="h-14" />
            </a>

            <div onClick={showHide} class="block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </div>
          </div>

          <div
            id="smald"
            style={{ backgroundColor: "#303030" }}
            class="hidden h-full py-5 xl:flex flex-col xl:flex-row items-center overflow-hidden font-medium tracking-wide"
          >
            <Link
              onClick={showHide}
              to="/"
              class="px-5 py-5 xl:py-6 cursor-pointer  hover:text-red-700"
            >
              Home
            </Link>
            <div id="dropdown" class="px-5 w-full xl:w-auto">
              <div
                id="dropdown-btn"
                class="relative flex  hover:text-red-700 cursor-pointer py-5 xl:py-6  justify-center items-center"
              >
                About Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 font-bold pl-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div
                id="dropdown-cont"
                style={{ zIndex: 999989 }}
                class="hidden rounded flex-col py-3 text-black text-sm bg-white w-64 left-20 overflow-hidden xl:w-52 absolute"
              >
                <Link
                  class="py-3 px-3  hover:text-red-700 underline"
                  to="/about"
                >
                  <span>About Us</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-red-700 underline"
                  to="/agent-list"
                >
                  <span>Agent List</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-red-700 underline"
                  to="/frequently-asked-questions"
                >
                  <span>FAQs</span>
                </Link>
              </div>
            </div>
            <div id="dropdown" class="px-5 w-full xl:w-auto">
              <div
                id="dropdown-btn"
                class="relative py-5 xl:py-6 hover:text-red-700 cursor-pointer w-full xl:w-auto flex justify-center items-center"
              >
                Visa Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 pl-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div
                id="dropdown-cont"
                style={{ zIndex: 999989 }}
                class="hidden rounded flex-col py-3 text-black text-sm bg-white w-64 left-20 overflow-hidden xl:w-52 absolute"
              >
                <Link
                  class="py-3 px-3  hover:text-red-700 underline"
                  to="/visa-services/tourist-visa"
                >
                  <span>Tourist Visa</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-red-700 underline"
                  to="/visa-services/visitor-visa"
                >
                  <span>Visitor Visa</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-red-700 underline"
                  to="/visa-services/business-visa"
                >
                  <span>Business Visa</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-red-700 underline"
                  to="/visa-services/student-visa"
                >
                  <span>Student Visa</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-red-700 underline"
                  to="/visa-services/work-visa"
                >
                  <span>Work Visa</span>
                </Link>
                <a
                  href="https://wa.me/14166197563"
                  class="py-3 px-3  hover:text-red-700 underline"
                >
                  <span>Get IELTS Result / Job Offer Letter</span>
                </a>
                <a
                  href="https://wa.me/14166197563"
                  class="py-3 px-3  hover:text-red-700 underline"
                >
                  <span>Permanent Residency Visa</span>
                </a>
              </div>
            </div>
            <div class="py-8">
              <Link
                onClick={showHide}
                class=" bg-red-700 text-white rounded-md px-8 py-3 outline-none border-2 border-red-700 hover:bg-white hover:text-red-700"
                to="/apply"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
