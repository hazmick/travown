import React from "react";
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
import lwork from "../images/lwork.png";
import work from "../images/work.png";
import lbusiness from "../images/lbusiness.png";
import business from "../images/business.png";
import ljoboffer from "../images/ljoboffer.png";
import joboffer from "../images/joboffer.png";
import Navbar from "./navbar";
import cert from "../images/cert.jpg";

function Home() {
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
      <div class="header">
        <Navbar />

        <div class="lg:pb-28 pt-80 lg:pt-64 pb-16 max-w-3xl px-6 lg:px-20">
          <div class="font-semibold lg:font-medium text-2xl lg:text-5xl bn">
            Move to Canada for a Better Future with{" "}
            <span class="lg:whitespace-nowrap">Canada Visa Pathway!</span>
          </div>

          <div class="py-6 lg:text-lg opacity-95">
            Canadian immigration is made simple with our 3-step procedure.
          </div>

          <div class="flex flex-col lg:flex-row text-center uppercase pt-3 font-semibold">
            <Link
              to="/apply"
              class="lg:mr-3 mb-3 lg:mb-0 bg-red-700 text-white rounded-md px-10 py-4 outline-none border-2 border-red-700 hover:bg-white hover:text-red-700"
            >
              Apply Now
            </Link>
            <Link
              to="/apply"
              class="bg-transparent text-white rounded-md px-10 py-4 outline-none border-2 border-white hover:bg-white hover:text-red-700"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      {/* 
      <div class="flex flex-col lg:flex-row justify-center items-center py-8 lg:pt-32 lg:pb-16">
        <div class="lg:w-1/2 m-auto px-6 py-6 lg:pl-20 lg:pr-12">
          <img class="rounded-lg" src={about} />
        </div>
        <div class="lg:w-1/2 px-6 py-6 lg:pl-0 lg:py-0 lg:pr-20">
          <div class="text-red-700 font-semibold">WHO WE ARE</div>
          <div class="lg:text-4xl text-xl font-bold leading-10 lg:py-3">
            About
          </div>
          <div class="lg:text-4xl text-lg text-red-700 font-bold">
            Canada Visa Pathway
          </div>
          <div class="lg:py-3 py-2 leading-7 font-light lg:font-normal ">
            <div class=" lg:py-3 py-2">
              Canada Visa Pathway is dedicated to helping individuals and
              families obtain a permanent resident visa to Canada.
            </div>
            <div class=" lg:py-3 py-2">
              Since 2012, Canada Visa Pathway has been working with authorized
              immigration consultants to provide eligibility assessments and
              step-by-step guidance during the complex Canadian immigration
              procedure.
            </div>
            <div class=" lg:py-3 py-2">
              The mission of canadavisapathway.cc is to make immigration to
              Canada simple and affordable for you and your family with our
              3-step procedure.
            </div>
            <div class=" lg:py-3 py-2">
              To register for your Canadian visa eligibility assessment,{" "}
              <span class="text-red-700">click here!</span>
            </div>
          </div>
        </div>
      </div> */}
      <div class="flex lg:px-20 px-6 pt-24 py-16 lg:pt-32 lg:pb-32 flex-col justify-center items-center text-center">
        <div class="lg:text-4xl text-xl text-red-700 font-bold lg:font-semibold">
          Immigration - Choose the kind of Visa you want!
        </div>
        <div class="py-4 leading-7">
          From the list below read more about the kind of visa you want, apply
          now and begin your clear path to Canada. {"  "}
          <Link class="text-red-600 underline" to="/visa-services">
            Check Out More
          </Link>
        </div>
        <div
          id="three cards container"
          class="flex flex-col lg:flex-row py-8 lg:py-16"
        >
          <div
            id="first card"
            class="flex rounded-2xl flex-col py-10 px-6 card lg:w-1/3"
          >
            <div>
              <img class="lg:hidden block" src={limm} />
              <img class="hidden lg:block" src={imm} />
            </div>
            <Link
              to="/visa-services/tourist-visa"
              class="py-4 text-lg font-semibold text-left opacity-90 text-red-600 underline"
            >
              Tourist & Visitor Visa
            </Link>
            <div class="text-left opacity-90 lg:font-normal font-light">
              A visitor visa (also called a temporary resident visa) is an
              official document that we stick in your passport. It shows that
              you meet the re...
            </div>
          </div>
          <div
            id="first card"
            class="flex rounded-2xl flex-col py-10 px-6 card lg:w-1/3 my-6 lg:my-0 lg:mx-8"
          >
            <div>
              <img class="hidden lg:block" src={study} />
              <img class="lg:hidden block" src={lstudy} />
            </div>
            <Link
              to="/visa-services/student-visa"
              class="py-4 text-lg font-semibold text-left opacity-90 text-red-600 underline"
            >
              Student Visa
            </Link>
            <div class="text-left opacity-90 lg:font-normal font-light">
              To study in Canada, you'll need to obtain a Canadian Study Permit,
              which serves as a Canadian Student Visa for the duration of y...
            </div>
          </div>
          <div
            id="first card"
            class="flex rounded-2xl flex-col py-10 px-6 card lg:w-1/3"
          >
            <div>
              <img class="hidden lg:block" src={lbusiness} />
              <img class="lg:hidden block" src={business} />
            </div>
            <Link
              to="/visa-services/business-visa"
              class="py-4 text-lg font-semibold text-left opacity-90 text-red-600 underline"
            >
              Business Visa
            </Link>
            <div class="text-left opacity-90 lg:font-normal font-light">
              If you want to visit Canada on business, you’ll need to understand
              what a business visitor is, what you can do as a business visitor,
              and w...
            </div>
          </div>
        </div>
        <div>
          <div
            id="three cards container"
            class="flex flex-col lg:flex-row py-0 lg:py-0"
          >
            <div
              id="first card"
              class="flex rounded-2xl flex-col py-10 px-6 card lg:w-1/3"
            >
              <div>
                <img class="lg:hidden block" src={work} />
                <img class="hidden lg:block" src={lwork} />
              </div>
              <Link
                to="/visa-services/work-visa"
                class="py-4 text-lg font-semibold text-left opacity-90 text-red-600 underline"
              >
                Work Visa
              </Link>
              <div class="text-left opacity-90 lg:font-normal font-light">
                A work permit is always temporary in nature, but can often be
                extended from inside Canada. Below is a guide on how you can
                pursue a C...
              </div>
            </div>
            <div
              id="first card"
              class="flex rounded-2xl flex-col py-10 px-6 card lg:w-1/3 my-6 lg:my-0 lg:mx-8"
            >
              <div>
                <img class="hidden lg:block" src={ljoboffer} />
                <img class="lg:hidden block" src={joboffer} />
              </div>
              <a
                href="https://wa.me/14166197563"
                class="py-4 text-lg font-semibold text-left opacity-90 text-red-600 underline" //wa.me/14166197563""
              >
                Get IELTS Result/ Job Offer Letter
              </a>
              <div class="text-left opacity-90 lg:font-normal font-light">
                You can pay to get an IELTS result or a Job offer letter for
                your external Application. Below is a guide on how you can
                pursue a Canadian v...
              </div>
            </div>
            <div
              id="first card"
              class="flex rounded-2xl flex-col py-10 px-6 card lg:w-1/3"
            >
              <div>
                <img class="hidden lg:block" src={settle} />
                <img class="lg:hidden block" src={lsettle} />
              </div>
              <a
                href="https://wa.me/14166197563"
                class="py-4 text-lg font-semibold text-left opacity-90 text-red-600 underline"
              >
                Permanent Residency Visa
              </a>
              <div class="text-left opacity-90 lg:font-normal font-light">
                Permanent Residency gives you the option of staying in Canada
                forever which makes you a citizen and able to get a Canada
                Passport w...
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center px-6 py-8 lg:px-20 lg:pt-8 lg:pb-8">
        <div class="text-center">
          <div class="text-red-700 uppercase font-semibold">
            What they said ?
          </div>
          <div class="lg:text-3xl text-xl font-bold py-3">
            What our Clients say about us and the work we do
          </div>
        </div>
        <div class="cardcontainer flex flex-col lg:flex-row py-8 lg:py-16 ">
          <div class="flex-1 card px-6 py-10 justify-center items-center lg:mx-6 border-gray-100 rounded-2xl border">
            <div class="w-40 m-auto">
              <img src={image1} />
            </div>
            <div class="italic font-light py-6">
              “I was super skeptical about Canada VisaExperts Immigration, but i
              gave it a shot and now am in Canada with my family and friends,
              Thanks Canada VisaExperts, you guys are the best !!!”
            </div>
            <div class="font-semibold">DUSTIN A. MORGAN</div>
            <div class="uppercase text-red-700 font-semibold py-1">
              Canada Work Visa
            </div>
          </div>
          <div class="flex-1 card px-6 py-10 justify-center items-center lg:mx-6 my-6 lg:my-0 border-gray-100 rounded-2xl border">
            <div class="w-40 m-auto">
              <img src={image2} />
            </div>
            <div class="italic font-light py-6">
              “I feel on top of the world. I feel incredible, I feel motivated
              than ever, i feel empowered. Canada VisaExperts Immigration has
              made me the master of my own destiny.”
            </div>
            <div class="font-semibold">SANDRA M. LEBRUN</div>
            <div class="uppercase text-red-700 font-semibold py-1">
              Canada Study Visa
            </div>
          </div>
          <div class="flex-1 card px-6 py-10 justify-center items-center lg:mx-6 border-gray-100 rounded-2xl border">
            <div class="w-40 m-auto">
              <img src={image3} />
            </div>
            <div class="italic font-light py-6">
              “Through Canada VisaExperts Immigration, I encounted my best
              holiday ever, they are amazing and i will coming back for a
              Permanent Residency, Give them a try and you will understand
              better”
            </div>
            <div class="font-semibold">ROGER N. TOWLE</div>
            <div class="uppercase text-red-700 font-semibold py-1">
              Canada Visit Visa
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div class="flex flex-col lg:flex-row justify-center items-center px-6 lg:px-0 pt-16 pb-8 lg:pt-16 lg:pb-16">
        <div class="lg:w-1/2 py-6 lg:py-0 lg:pl-20 lg:order-1 order-2">
          <div class="text-red-700 font-semibold">
            BENEFITS OF Canada Visa Pathway
          </div>
          <div class="lg:text-4xl text-xl font-bold leading-10 lg:py-3">
            Why Choose
          </div>
          <div class="lg:text-4xl whitespace-nowrap text-lg text-red-700 font-bold">
            Canada Visa Pathway
          </div>
          <div class="py-3 font-light lg:font-normal leading-7 ">
            <div class=" py-3">
              For almost a decade, Canada Visa Pathway has been working with
              authorized immigration consultants to provide high quality
              professional services to guide individuals and families from start
              to finish on the pathway toward living and working in Canada as
              permanent residents.
            </div>
            <div class=" py-3">
              Canada Visa Pathway subcontracts authorized immigration
              consultants in Toronto, Ontario, and in Montreal, Quebec, who have
              assisted numerous individuals, from all over the world, to secure
              both permanent and temporary residence visas for Canada.
            </div>
            <div class=" py-3">
              The authorized immigration consultants who Immigration Consulate
              Canada works with can review your details and evaluate your best
              option for immigration to Canada.
            </div>
            <div class=" py-3">
              Furthermore, the authorized immigration consultants who
              collaborate with canadavisapathway.cc will work hard on
              your behalf to make the process go as smoothly as possible. To
              start your journey to Canada,{" "}
              <span class="text-red-700">click here!</span>
            </div>
          </div>
        </div>

        <div class="lg:w-1/2 mb-4 lg:mb-0 lg:pr-20 lg:pl-12 lg:order-2 order-1">
          <img src={benefits} />
        </div>
      </div> 
      */}

      <div class="flex flex-col lg:flex-row justify-center items-center px-6 py-8 lg:px-20 lg:pt-16 lg:pb-16">
        <div class="lg:w-2/4 rounded">
          <img class="rounded-lg" src={un1} />
        </div>
        <div class="lg:w-2/4 pt-4 lg:pt-0 lg:pl-10">
          <div class="text-red-700 font-semibold">PROFESSIONAL ADVISORS</div>
          <div class="lg:text-3xl text-xl font-bold py-3">
            Get guarantee success with our advisors
          </div>
          <div class="py-3 leading-7 font-light lg:font-normal">
            <div class=" lg:py-3 py-2">
              Are you looking for reliable immigration consultants to handle
              your immigration case? Our certified and knowledgeable Immigration
              advisors and professionals can help you get a positive decision on
              your case!
            </div>
            <div class=" lg:py-3 py-2">
              We strive to provide you with the best client service experience
              in the industry.
            </div>
            <div class="flex py-3">
              <a
                href="https://wa.me/14166197563"
                class="bg-transparent rounded-md px-10 py-3 outline-none border-2 border-red-700 hover:bg-black text-red-700 cursor-pointer"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center px-6 py-8 lg:px-20 lg:pt-8 lg:pb-16">
        <div class="text-center">
          <div class="lg:text-3xl text-xl font-bold pt-3 pb-5">
            Certification and Accreditation
          </div>
        </div>
        <div>
          <img class="lg:max-w-3xl w-auto pt-4 max-w-xs" src={cert} />
        </div>
      </div>
      <div class="loud pt-24 pb-20 px-6 flex flex-col justify-center items-center text-center">
        <div class="max-w-3xl w-full lg:text-4xl text-xl font-semibold lg:font-medium xz">
          Join Over 400,000 Immigrants Moving to Canada Each Year!
        </div>
        <div class="leading-7 lg:leading-normal py-6">
          Canada Visa Pathway makes the process easy and affordable!
        </div>
        <Link
          to="/apply"
          class="lg:mt-6 mt-3 uppercase font-semibold bg-red-700 text-white rounded-md px-10 py-4 outline-none border-2 border-red-700 hover:bg-white hover:text-red-700"
        >
          Apply Now
        </Link>
      </div>
      <div class="flex flex-col lg:flex-row py-8 px-6 lg:pt-32 lg:pb-16 lg:px-20">
        <div class="lg:w-1/2">
          <div class="text-red-700 font-semibold">GENERAL INFORMATION</div>
          <div class="lg:text-4xl xz text-xl font-bold py-3 opacity-90">
            Discover Frequently Asked Questions from Our Support
          </div>
          <Link
            to="/frequently-asked-questions"
            class="lg:mt-6 lg:mb-0 mt-3 mb-4 inline-block uppercase font-semibold bg-red-700 text-white rounded-md px-10 py-4 outline-none border-2 border-red-700 hover:bg-white hover:text-red-700"
          >
            Go to FAQ
          </Link>
        </div>
        <div class="lg:w-1/2 py-8">
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
                  <h2>How can canadavisapathway.cc help me?</h2>
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
                    canadavisapathway.cc can provide you with an eligibility
                    assessment of your best option to apply for immigration to
                    Canada and offers step-by-step guidance from a team of
                    authorized immigration consultants we work with to help make
                    the Canadian visa application process easier for you to
                    complete. Your forms will be properly prepared and correctly
                    submitted with the required documents to the Canadian
                    immigration officials and the team of authorized immigration
                    consultants will answer your questions along the way.
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
                    Yes – If you are approved for Canadian permanent residency
                    and your spouse/partner (opposite sex or same sex) and
                    unmarried children under 22 years of age also meet the
                    criteria, you can all immigrate to Canada together!
                  </p>
                </div>
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
                <a
                  href="https://wa.me/14166197563"
                  class="block hover:text-red-700 underline"
                >
                  Get IELTS Result/ Job Offer Letter
                </a>
                <a
                  href="https://wa.me/14166197563"
                  class="block hover:text-red-700 underline"
                >
                  Permanent Residency Visa
                </a>
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
                  <span class="pl-3">info@canadavisapathway.cc</span>
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
                  <span class="pl-3">+ 1 (416) 619 7563</span>
                </div>
              </div>
            </div>
          </div>

          <div id="footer-3" class="pt-5 lg:pt-10 pb-10">
            <div class="font-medium tracking-wider text-center text-sm">
              <p>© 2012-2023 Canada Visa Pathway. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
