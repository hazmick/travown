import React from "react";
import bg from "../images/backgroundImg1.png";
import { Link } from "react-router-dom";
import logo from "../images/icon.svg";
import Navbar from "./navbar";

function Faq() {
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

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      document.getElementById("head-nav").style.boxShadow =
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
      document.getElementById("head-nav").style.background = "#303030";
    } else {
      document.getElementById("head-nav").style.boxShadow = "none";
      document.getElementById("head-nav").style.background = "transparent";
    }
  }

  function hideOrshow1() {
    var x = document.getElementById("faq-x");
    var butplus = document.getElementById("but-plus");
    var butminus = document.getElementById("but-minus");
    if (x.style.display === "none") {
      x.style.display = "block";
      butminus.style.display = "block";
      butplus.style.display = "none";
    } else {
      x.style.display = "none";
      butplus.style.display = "block";
      butminus.style.display = "none";
    }
  }
  function hideOrshow2() {
    var x = document.getElementById("faq-a");
    var butplus = document.getElementById("but-plusa");
    var butminus = document.getElementById("but-minusa");
    if (x.style.display === "none") {
      x.style.display = "block";
      butminus.style.display = "block";
      butplus.style.display = "none";
    } else {
      x.style.display = "none";
      butplus.style.display = "block";
      butminus.style.display = "none";
    }
  }
  function hideOrshow3() {
    var x = document.getElementById("faq-b");
    var butplus = document.getElementById("but-plusb");
    var butminus = document.getElementById("but-minusb");
    if (x.style.display === "none") {
      x.style.display = "block";
      butminus.style.display = "block";
      butplus.style.display = "none";
    } else {
      x.style.display = "none";
      butplus.style.display = "block";
      butminus.style.display = "none";
    }
  }

  return (
    <div>
      <div class="visad">
        <Navbar />

        <div class="lg:pb-28 lg:pt-80 pt-64 pb-16 max-w-4xl px-6 lg:px-20 flex flex-col m-auto justify-center items-center">
          <div class="font-semibold text-2xl lg:text-5xl bn">
            Frequently Asked Questions
          </div>

          <div class="lg:py-2 py-3 lg:text-lg uppercase flex items-center">
            <span class="opacity-90">Home</span>
            <span class="px-2 opacity-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <span>Frequently Asked Questions</span>
          </div>
        </div>
      </div>

      <div class="py-8 px-6 lg:px-20 lg:py-16">
        <div id="main">
          <div class="">
            <div class="lg:pb-4 pb-2" id="faq-1">
              <div
                id="faq--1"
                onClick={hideOrshow1}
                class=" bg-gray-200 lg:text-lg flex justify-between tracking-wide p-3 font-bold"
              >
                <h2>What is Canada Visa Pathway?</h2>
                <button
                  id="but-plus"
                  style={{ display: "none" }}
                  class="text-2xl outline-none focus:outline-none font-bold px-4"
                >
                  +
                </button>
                <button
                  id="but-minus"
                  class="text-2xl focus:outline-none outline-none font-bold px-4"
                >
                  -
                </button>
              </div>
              <div
                style={{ display: "block" }}
                id="faq-x"
                class="lg:py-4 py-3 font-light border-b-2 leading-loose text-gray-500 tracking-wide lg:font-normal"
              >
                <p class="py-2 px-4">
                  Canada Visa Pathway works with experienced immigration
                  professionals who are dedicated to helping individuals and
                  families obtain a permanent resident visa to Canada. Since
                  2012, Canada Visa Pathway has been working with a team of
                  authorized immigration consultants to provide eligibility
                  assessments and step-by-step guidance during the complex
                  Canadian immigration process.
                </p>
              </div>
            </div>
            <div class="lg:py-4 py-2" id="faq-2">
              <div
                id="faq--a"
                onClick={hideOrshow2}
                class=" lg:text-lg bg-gray-200 flex justify-between tracking-wide p-3 font-bold"
              >
                <h2>How can ImmigrationConsulateCanada.ca help me?</h2>
                <button
                  id="but-plusa"
                  class="text-2xl outline-none focus:outline-none font-bold px-4"
                >
                  +
                </button>
                <button
                  id="but-minusa"
                  style={{ display: "none" }}
                  class="text-2xl focus:outline-none outline-none font-bold px-4"
                >
                  -
                </button>
              </div>
              <div
                style={{ display: "none" }}
                id="faq-a"
                class="lg:py-4 py-3 font-light border-b-2 leading-loose text-gray-500 tracking-wide lg:font-normal"
              >
                <p class="py-2 px-4">
                  The authorized immigration consultants who work with
                  ImmigrationConsulateCanada.ca can provide you with an
                  eligibility assessment of your best option to apply for
                  immigration to Canada and offers step-by-step guidance from a
                  team of authorized immigration consultants we work with to
                  help make the Canadian visa application process easier for you
                  to complete. Your forms will be properly prepared and
                  correctly submitted with the required documents to the
                  Canadian immigration officials and the team of authorized
                  immigration consultants will answer your questions along the
                  way.
                </p>
              </div>
            </div>
            <div class="lg:py-4 py-2" id="faq-3">
              <div
                id="faq--b"
                onClick={hideOrshow3}
                class=" lg:text-lg bg-gray-200 flex justify-between tracking-wide p-3 font-bold"
              >
                <h2>Can my family immigrate to Canada with me?</h2>
                <button
                  id="but-plusb"
                  class="text-2xl outline-none focus:outline-none font-bold px-4"
                >
                  +
                </button>
                <button
                  id="but-minusb"
                  style={{ display: "none" }}
                  class="text-2xl focus:outline-none outline-none font-bold px-4"
                >
                  -
                </button>
              </div>
              <div
                style={{ display: "none" }}
                id="faq-b"
                class="lg:py-4 py-3 font-light border-b-2 leading-loose text-gray-500 tracking-wide lg:font-normal"
              >
                <p class="py-2 px-4">
                  Yes – If you are approved for Canadian permanent residency and
                  your spouse/partner (opposite sex or same sex) and unmarried
                  children under 22 years of age also meet the criteria, you can
                  all immigrate to Canada together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          id="footer"
          style={{
            backgroundColor: "#303030",
            color: "rgba(255, 255, 255, 0.95)",
          }}
          class="xl:px-32 px-6 pt-12 lg:pt-24 pb-4 lg:pb-8"
        >
          <div
            id="footer-1"
            class="flex flex-wrap lg:flex-row flex-col justify-between items-start"
          >
            <div class="flex flex-1 flex-col py-3 lg:py-0">
              <Link to="/visa-services">
                <h2 class=" text-base font-bold tracking-wide ">
                  Visa Services
                </h2>
              </Link>
              <div class="py-4 font-medium tracking-wider leading-9 text-sm">
                <Link
                  class="block hover:text-red-700 underline"
                  to="/visa-services/tourist-visa"
                >
                  Tourist Visa
                </Link>
                <Link
                  class="block hover:text-red-700 underline"
                  to="/visa-services/visitor-visa"
                >
                  Visitor Visa
                </Link>
                <Link
                  class="block hover:text-red-700 underline"
                  to="/visa-services/business-visa"
                >
                  Business Visa
                </Link>
                <Link
                  class="block hover:text-red-700 underline"
                  to="/visa-services/student-visa"
                >
                  Student Visa
                </Link>
                <Link
                  class="block hover:text-red-700 underline"
                  to="/visa-services/work-visa"
                >
                  Work Visa
                </Link>
              </div>
            </div>
            <div class="flex flex-1 flex-col py-3 lg:py-0">
              <Link to="/immigration-services">
                <h2 class=" text-base font-bold tracking-wide ">
                  Immigration Services
                </h2>
              </Link>
              <div class="py-4 font-medium tracking-wider leading-9 text-sm">
                <Link
                  to="/immigration-services/express-entry-services"
                  class="block hover:text-red-700 underline"
                >
                  Express Entry System
                </Link>
                <Link
                  to="/immigration-services/federal-skilled-worker-visa"
                  class="block hover:text-red-700 underline"
                >
                  Federal Skilled Worker Visa
                </Link>
                <Link
                  to="/immigration-services/federal-skilled-trades-program"
                  class="block hover:text-red-700 underline"
                >
                  Federal Skilled Trades Program
                </Link>
                <Link
                  to="/immigration-services/provincial-nomination-programs"
                  class="block hover:text-red-700 underline"
                >
                  Provincial Nominees
                </Link>
                <Link
                  to="/immigration-services/quebec-selected-skilled-worker-qsw-program"
                  class="block hover:text-red-700 underline"
                >
                  Quebec-Selected Skilled Worker Program
                </Link>
              </div>
            </div>
            <div class="flex flex-1 flex-col py-3 lg:py-0 lg:pl-6">
              <div>
                <h2 class=" text-base font-bold tracking-wide ">Info</h2>
              </div>

              <div class="py-4 font-medium tracking-wider leading-6 text-sm">
                <div class="pb-4 flex items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill="#d90025"
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span class="pl-3">
                    7030 Woodbine Avenue, Suite 500 Markham, Ontario L3R 6G2
                    CANADA
                  </span>
                </div>
                <div class="pb-4 flex items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill="#d90025"
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      />
                      <path
                        fill="#d90025"
                        d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                      />
                    </svg>
                  </div>
                  <span class="pl-3">info@immigrationconsulate.ca</span>
                </div>
                <div class="pb-4 flex items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill="#d90025"
                        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                      />
                    </svg>
                  </div>
                  <span class="pl-3">+1-647-946-5616</span>
                </div>
              </div>
            </div>
          </div>

          <div id="footer-3" class="pt-5 lg:pt-10 pb-10">
            <div class="font-medium tracking-wider text-center text-sm">
              <p>© 2012-2022 Canada Visa Pathway. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
