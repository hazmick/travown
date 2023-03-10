import React from "react";
import bg from "../images/backgroundImg1.png";
import { Link } from "react-router-dom";
import logo from "../images/icon.svg";
import rep from "../images/rep.jpeg";
import Navbar from "./navbar";

function About() {
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

  return (
    <div>
      <div class="about">
        <Navbar />

        <div class="lg:pb-28 lg:pt-80 pt-64 pb-16 max-w-3xl px-6 lg:px-20 flex flex-col m-auto justify-center items-center">
          <div class="font-semibold text-2xl lg:text-5xl bn">About Us</div>

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
            <span>About Us</span>
          </div>
        </div>
      </div>
      <div class="lg:px-20 px-6 pt-16 pb-8 lg:py-16">
        <div>
          <div class="lg:text-4xl text-xl font-bold pb-2 leading-8 lg:leading-10 lg:py-3">
            About <span class="text-red-700">Canada Visa Pathway</span>
          </div>
          <div class="lg:py-1 pt-2 pb-0 text-red-700">
            Canada Visa Pathway is dedicated to helping individuals and families
            obtain a permanent resident visa to Canada.
          </div>
          <div class="lg:py-6 py-2 leading-7 font-light lg:font-normal ">
            <div class=" lg:py-3 py-2">
              Since 2012, Canada Visa Pathway has been working with authorized
              immigration consultants to provide eligibility assessments and
              step-by-step guidance during the complex Canadian immigration
              procedure.
            </div>
            <div class=" lg:py-3 py-2">
              Moving to a new country is an exciting chapter in one’s life, but
              the Canadian visa process can be an overwhelming experience.
            </div>
            <div class=" lg:py-3 py-2">
              Choosing the proper visa, understanding the point system, and
              knowing how professions are assessed is a complicated matter if
              you are not familiar with the requirements.
            </div>
            <div class=" lg:py-3 py-2">
              The mission of ImmigrationConsulate.ca is to make moving to Canada
              simple and affordable for you and your family with our 3-step
              procedure which involves:
            </div>
            <div class="py-2">
              <div class=" lg:py-3 py-2">
                <div class="font-bold lg:text-2xl py-2">
                  1. Eligibility Assessment
                </div>
                <div>
                  You will receive your personal eligibility assessment from
                  authorized immigration consultants so you will know if you
                  qualify to apply for a particular Canadian immigration
                  program.
                </div>
              </div>
              <div class=" lg:py-3 py-2">
                <div class="font-bold lg:text-2xl py-2">
                  2. Application Preparation
                </div>
                <div>
                  Your application will be prepared properly, making sure you
                  have all of the supporting documents that will be required.
                </div>
              </div>
              <div class=" lg:py-3 py-2">
                <div class="font-bold lg:text-2xl py-2">
                  3. Application Submission
                </div>
                <div>
                  Your application will be submitted correctly to the Canadian
                  immigration authorities.
                </div>
              </div>
            </div>
            <div class=" lg:py-3 py-2">
              From start to finish, you will receive high-level customer service
              from our seasoned support team and personalized guidance from
              authorized immigration consultants who Immigration Consulate
              Canada has been working with for close to a decade.
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row justify-center items-center px-6 lg:px-0 pt-8 pb-8 lg:pt-16 lg:pb-16">
        <div class="lg:w-1/2 py-6 lg:py-0 lg:pl-20 lg:order-1 order-2">
          <div class="lg:text-4xl whitespace-nowrap text-lg text-red-700 font-bold">
            <span class="text-black">Simplified</span> Process
          </div>
          <div class="py-3 font-light lg:font-normal leading-7 ">
            <div class=" py-3">
              The objective of Immigrationconsulate.ca is to make your
              immigration to Canada and the application process as simple as
              possible by providing you with a professional assessment of your
              visa options and a group of certified professionals to help you
              through the visa application process.
            </div>
            <div class=" py-3">
              Part of providing you with top quality service is giving you
              access to the experienced immigration consultants that we work
              with who are professionally accredited to handle all aspects of
              your Canadian visa application, as well as to give you the correct
              advice regarding which visa type to choose and whether to submit a
              single or double (family) application to maximize your
              opportunities.
            </div>
          </div>
        </div>

        <div class="lg:w-1/2 mb-4 lg:mb-0 lg:pr-20 lg:pl-12 lg:order-2 order-1">
          <img src={rep} />
        </div>
      </div>
      <div class="flex flex-col lg:flex-row justify-center items-center px-6 lg:px-20 pt-8 pb-8 lg:pt-16 lg:pb-16">
        <div class="py-6 lg:py-0 lg:order-1 order-2">
          <div class="lg:text-4xl whitespace-nowrap text-lg text-red-700 font-bold">
            <span class="text-black">Our</span> Services
          </div>
          <div class="py-3 font-light lg:font-normal leading-7 ">
            <div class=" py-3">
              At Canada Visa Pathway, we pride ourselves on our personalized
              approach to our clientele. Each case is dealt with personally by
              our Canadian immigration consultants who we work with. We do not
              believe in an automatic answer system approach or template
              assessment.
            </div>
            <div class=" py-3">
              We value our customers’ financial situation here at Canadian Visa
              Expert and their desire to find a better life outside of their
              home country.
            </div>
            <div class=" py-3">
              Therefore, we allow our clients to pay in installments for the
              professional services that we provide at each major stage of the
              procedure, rather than charging a large fee at the beginning for
              the entire process.
            </div>
            <div class=" py-3">
              A custom-tailored eligibility assessment of your Canadian
              immigration options gives you a clearer picture of what visa types
              are open to you before officially applying for them.
            </div>
            <div class=" py-3">
              Attempting to figure out which Canadian immigration program to
              apply for and doing everything by yourself can be risky and
              expensive as well as frustrating, since each immigration program
              has its own eligibility requirements and application procedure,
              plus the government fees are non-refundable.
            </div>
            <div class=" py-3">
              Although you can apply for immigration to Canada by yourself on
              the government website, there are many benefits of receiving the
              quality services offered by Canada Visa Pathway.
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row justify-center items-center px-6 lg:px-20 pt-8 pb-8 lg:pt-16 lg:pb-16">
        <div class="py-6 lg:py-0 lg:order-1">
          <div class="lg:text-4xl text-xl font-bold pb-2 leading-8 lg:leading-10 lg:py-3">
            More On <span class="text-red-700">Canada Visa Pathway</span>
          </div>
          <div class="lg:py-1 pt-2 pb-0 text-red-700">
            Canada Visa Pathway is an international company and not part of the
            Canadian government.
          </div>
          <div class="py-3 font-light lg:font-normal leading-7 ">
            <div class=" py-3">
              Immigrationconsulate.ca has been the online presence of the Canada
              Visa Pathway. Canada Visa Pathway have several professionals who
              are dedicated to helping people move to Canada. We specialize in
              providing representation and advice to foreign nationals who are
              looking to obtain a Canada visa and enter Canada on a permanent or
              temporary basis.
            </div>
            <div class=" py-3">
              Our firm is focused on getting clients to Canada in the shortest
              possible time through a variety of avenues, including finding work
              in Canada and studying in Canada.
            </div>
            <div class=" py-3">
              All of the resources provided by Canada Visa Pathway
              Immigrationconsulate.ca are meant to help as many people as
              possible fulfill their Canadian immigration goals. Please reach
              out to us so we can assist you.
            </div>
          </div>
        </div>
      </div>
      <div class="bg-red-700 text-white pt-24 pb-20 px-6 flex flex-col justify-center items-center text-center">
        <div class="max-w-3xl w-full lg:text-4xl text-xl font-semibold lg:font-medium xz">
          Live in Canada - One of the Most Beautiful Countries on Earth!
        </div>
        <Link
          to="/apply"
          class="lg:mt-6 mt-3 uppercase font-semibold text-white rounded-md px-10 py-4 outline-none border-2 border-white cursor-pointer hover:bg-white hover:text-red-700"
        >
          Apply Now
        </Link>
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

export default About;
