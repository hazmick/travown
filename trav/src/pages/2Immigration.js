import React, { useState } from "react";
import bg from "../images/backgroundImg1.png";
import { Link } from "react-router-dom";
import logo from "../images/icon.svg";
import axios from "axios";
import Navbar from "./navbar";

function Fstp() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [message, setmessage] = useState("");
  const [success, setsuccess] = useState("");
  const [error, seterror] = useState("");
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

  const submitHandler1 = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    setTimeout(() => {
      setsuccess(
        "We have recieved your details, We'll get back to you soonest. Thank you."
      );
    }, 14000);

    setTimeout(() => {
      window.location.reload(false);
    }, 20000);

    try {
      const { data } = await axios.post(
        "/api/mail/metafa/",
        {
          name,
          email,
          mobile,
          message,
        },
        config
      );
    } catch (error) {
      setTimeout(() => {
        seterror("");
      }, 5000);
      seterror("An error occurred don't worry. Please retry.");
      setTimeout(() => {
        window.location.reload(false);
      }, 8000);
      console.log(error);
    }
  };

  return (
    <div>
      {error && (
        <div
          id="pop-up"
          style={{ zIndex: 9999, borderTopWidth: "6px" }}
          class="fixed border-red-600 shadow-xl bg-white mt-12 lg:mt-28 mr-4 max-w-xs top-0 right-0 py-2 px-5"
        >
          <h2 class="font-bold tracking-wider">Submission Failed</h2>
          <p class="text-sm text-left tracking-wider pt-1">{error}</p>
        </div>
      )}
      {success && (
        <div
          id="pop-up"
          style={{ zIndex: 9999, borderTopWidth: "6px" }}
          class="fixed  border-green-600 shadow-xl bg-white mt-12 xl:mt-28 mr-4 max-w-xs top-0 right-0 py-2 px-5"
        >
          <h2 class="font-bold tracking-wider">Submission Successful</h2>
          <p class="text-sm text-left tracking-wider pt-1">{success}</p>
        </div>
      )}
      <div class="visad">
        <Navbar />

        <div class="lg:pb-28 lg:pt-80 pt-64 pb-16 max-w-5xl lg:text-center px-6 lg:px-20 flex flex-col m-auto justify-center items-center">
          <div class="font-semibold text-2xl lg:text-5xl bn">
            Federal Skilled Trades Program Services
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
            <span>Federal Skilled Trades Program </span>
          </div>
        </div>
      </div>

      <div class="lg:px-20 px-6 pt-16 pb-8 lg:py-16">
        <div>
          <div class="lg:text-4xl text-xl font-bold pb-2 leading-8 lg:leading-10 lg:py-3">
            Federal Skilled Trades Program (FSTP)
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            The Federal Skilled Trades Program (FSTP) was established to offer a
            Permanent Resident (PR) Visa to Canada to qualified skilled foreign
            tradespeople in dozens of high-demand occupations (such as
            carpenters, electricians, plumbers and welders).
          </div>
          <div class="lg:py-1 pt-2 pb-0 leading-7 opacity-95">
            Many of these skilled trades are related to jobs in such occupation
            categories as:
          </div>
          <div class=" lg:py-3 py-2 px-6">
            <ul class="list-disc">
              <li class="py-1">Construction, Electrical and Industrial</li>
              <li class="py-1">Equipment Operation and Maintenance</li>
              <li class="py-1">
                Supervisors and Technical Jobs in Natural Resources,
              </li>
              <li class="py-1">Agriculture and Related Production</li>
              <li class="py-1">
                Processing, Manufacturing and Utilities Supervisors and Central
                Control Operators
              </li>
            </ul>
          </div>
          <div class="lg:text-3xl text-xl xz font-bold pt-4 pb-2 leading-8 lg:leading-10 lg:py-3">
            Who Can Apply for the FSTP?
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            In order to qualify for the Federal Skilled Trades Program (FSTP),
            an applicant must have a minimum of two years of full-time paid work
            experience during the past five years in a trade that is eligible
            for the FSTP.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Canada Visa Pathway offers a beneficial service, provided by the
            authorized immigration consultants we subcontract, to correctly file
            the Express Entry profile on behalf of its clients.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Dozens of jobs in Canada qualify for the FSTP, particularly in the
            construction industry, oil & gas sector, trades related to heavy
            machinery, and various technical fields, among many others.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Currently, all of the skilled trades eligible for the FSTP will be
            listed under the NOC Skill Level B category in the following groups
            (groups 72, 73, 82 and 92 each have several specific occupations
            listed as eligible for the FSTP):
          </div>
          <div class=" lg:py-3 py-2 px-6">
            <ul class="list-disc">
              <li class="py-1">
                Major Group 72, industrial, electrical and construction trades
              </li>
              <li class="py-1">
                Major Group 73, maintenance and equipment operation trades
              </li>
              <li class="py-1">
                Major Group 82, supervisors & technical jobs in natural
                resources, agriculture & related production
              </li>
              <li class="py-1">
                Major Group 92, processing, manufacturing and utilities
                supervisors and central control operators
              </li>
              <li class="py-1">Minor Group 632, chefs and cooks, and</li>
              <li class="py-1">Minor Group 633, butchers and bakers</li>
            </ul>
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Skilled foreign workers will also need to meet the requirements for
            employment in their FSTP-eligible trade as defined by the NOC
            system.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Examples of some of the dozens of occupations that qualify for the
            Federal Skilled Trades Program (FSTP) include:
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Aircraft Mechanics and Aircraft Inspectors; Appliance Servicers and
            Repairers; Automotive Service Technicians, Truck and Bus Mechanics
            and Mechanical Repairers; Bakers; Bricklayers; Butchers;
            Cabinetmakers; Cable Television Service and Maintenance Technicians;
            Carpenters; Chefs; Concrete Finishers; Cooks; Crane Operators;
            Electrical Power Line and Cable Workers; Electricians; Elevator
            Constructors and Mechanics; Floor Covering Installers; Gas Fitters;
            Glaziers; Heavy-Duty Equipment Mechanics; Insulators; Ironworkers;
            Logging Machinery Operators; Machine Fitters; Machinists and
            Machining and Tooling Inspectors; Oil and Gas Well Drillers,
            Servicers, Testers and Related Workers; Petroleum, Gas and Chemical
            Process Operators; Plasterers, Drywall Installers and Finishers and
            Lathers; Plumbers; Power Engineers and Power System Operators;
            Printing Press Operators; Railway and Yard Locomotive Engineers;
            Railway Conductors and Brakemen/Women; Refrigeration and Air
            Conditioning Mechanics; Roofers and Shinglers; Sheet Metal Workers;
            Steamfitters, Pipefitters and Sprinkler System Installers;
            Telecommunications Installation and Repair Workers; Tilesetters;
            Tool and Die Makers; Water and Waste Treatment Plant Operators;
            Welders – and more!
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Please note that there are many other occupations that also qualify
            for the Federal Skilled Trades Program (FSTP).
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            The authorized immigration consultants who work with Canadian Visa
            Expert can let you know if your occupation qualifies for the FSTP or
            another program for immigration to Canada.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            To check your eligibility,{" "}
            <span class="text-red-700">click here!</span>
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            An applicant for the FSTP must be able to prove that they have
            acceptable English or French language abilities necessary for their
            particular trade (as measured by such language evaluation exams as
            the IELTS or TEF).
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Additionally, applicants for the FSTP long-term work visa to Canada
            must have a qualifying Canadian job offer of full-time employment
            lasting at least 12 months OR a “certificate of qualification” from
            one of the provinces or territories where they want to live and work
            in Canada.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Although an Educational Credential Assessment (ECA) is not a
            requirement for the Federal Skilled Trades Program (FSTP), there is
            potential to receive more points toward Canadian immigration on the
            “Express Entry” Comprehensive Ranking System (CRS). Therefore,
            obtaining an ECA is recommended by the Canadian government for FSTP
            applicants.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            As with each type of work visa to Canada, applicants for the Federal
            Skilled Trades Program (FSTP) must meet health and character
            requirements and provide “proof of funds,” among other criteria.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Keep in mind that skilled foreign workers who want to live and work
            in the French-speaking Canadian province of Quebec should apply for
            a unique Quebec immigration program known as the Quebec Regular
            Skilled Workers Program.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            The authorized immigration consultants who work with Canadian Visa
            Expert can review your CV and relevant details to evaluate whether
            your occupation and profile meet the requirements for the FSTP or
            another Canadian immigration program.
          </div>
          <div class="lg:text-3xl text-xl xz font-bold pt-4 pb-2 leading-8 lg:leading-10 lg:py-3">
            FSTP Benefits
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Skilled foreign tradespeople and their eligible family members who
            are granted a PR Visa to Canada through the Federal Skilled Trades
            Program (FSTP) are authorized to live and work in Canada long-term,
            receive free basic healthcare (after a brief waiting period), get
            access to educational programs, and have the opportunity to enjoy
            the high standard of living that Canada is famous for.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Another great benefit of being issued a PR Visa to Canada through
            the FSTP is the option to apply for Canadian citizenship after
            living in Canada as a permanent resident at least three years and
            meeting other criteria!
          </div>
        </div>
      </div>

      <div class="bg-red-700 text-white pt-24 pb-20 px-6 flex flex-col justify-center items-center text-center">
        <div class="max-w-4xl w-full lg:text-4xl text-xl font-semibold lg:font-medium xz">
          To receive your personalized assessment of your options for
          immigration to Canada
        </div>
        <Link
          to="/apply"
          class="lg:mt-6 mt-3 uppercase font-semibold text-white rounded-md px-10 py-4 outline-none border-2 border-white cursor-pointer hover:bg-white hover:text-red-700"
        >
          Apply Now
        </Link>
      </div>

      <div class="lg:px-20 px-6 pt-16 pb-8 lg:py-16">
        <form onSubmit={submitHandler1}>
          <div class="lg:text-4xl text-xl font-bold pb-2 leading-8 lg:leading-10 lg:py-3">
            Contact Us
          </div>
          <div class="lg:py-1 pt-2 pb-0 leading-7 opacity-95">
            Do you need Federal Skilled Trades Program assistance? We can help,
            Canada Visa Pathway assists everybody.
          </div>
          <div class="lg:py-1 pt-2 pb-0 leading-7 opacity-95">
            Please complete this short form to submit your query directly to our
            Federal Skilled Trades Program team. Our Federal Skilled Trades
            Program Team is here to help:
          </div>

          <div class="flex flex-col max-w-3xl">
            <div class="flex flex-col py-3">
              <label class="py-2">
                Name <span class="text-sm text-red-700">(Required)</span>
              </label>
              <input
                class="border border-gray-900 rounded p-3"
                required
                type="text"
                placeholder="Ellen Maguire"
                name="name"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
            <div class="flex flex-col py-3">
              <label class="py-2">
                Email <span class="text-sm text-red-700">(Required)</span>
              </label>
              <input
                class="border border-gray-900 rounded p-3"
                required
                type="email"
                placeholder="abc@gmail.com"
                name="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div class="flex flex-col py-3">
              <label class="py-2">Phone Number</label>
              <input
                class="border border-gray-900 rounded p-3"
                required
                type="tel"
                placeholder=""
                name="mobile"
                value={mobile}
                onChange={(e) => {
                  setmobile(e.target.value);
                }}
              />
            </div>
            <div class="flex flex-col py-3">
              <label class="py-2">
                Message <span class="text-sm text-red-700">(Required)</span>
              </label>
              <textarea
                class="border h-32 border-gray-900 rounded p-3"
                required
                type="text"
                placeholder="Let us know know what you have to say..."
                name="message"
                value={message}
                onChange={(e) => {
                  setmessage(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="flex justify-start mt-3 mb-6 xl:mb-0 xl:mt-6">
            <button class=" bg-red-700 text-white py-4 px-10 rounded-md">
              Send Email
            </button>
          </div>
        </form>
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

export default Fstp;
