import React, { useState } from "react";
import bg from "../images/backgroundImg1.png";
import { Link } from "react-router-dom";
import logo from "../images/icon.svg";
import axios from "axios";
import Navbar from "./navbar";

function Fswv() {
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

        <div class="lg:pb-28 lg:pt-80 pt-64 pb-16 max-w-4xl px-6 lg:px-20 flex flex-col m-auto justify-center items-center">
          <div class="font-semibold text-2xl lg:text-5xl bn">
            Federal Skilled Worker Visa
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
            <span>Federal Skilled Worker Visa</span>
          </div>
        </div>
      </div>

      <div class="lg:px-20 px-6 pt-16 pb-8 lg:py-16">
        <div>
          <div class="lg:text-4xl text-xl font-bold pb-2 leading-8 lg:leading-10 lg:py-3">
            Federal Skilled Worker Visa
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Canada is facing a skilled labor shortage as its economy continues
            to expand at the same time as growing numbers of Canadians are
            retiring from the workforce.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Consequently, Canada’s government and Canadian businesses have been
            increasingly seeking skilled foreign workers to help fill thousands
            of Canadian job openings across the country.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            In order to attract thousands of skilled foreign workers who can
            immediately integrate into Canada’s economy, the Federal Skilled
            Workers Program (FSWP) was established to offer a long-term Canadian
            work visa (i.e., Permanent Resident Visa to Canada) to foreign
            nationals in various high-demand managerial, professional and
            technical occupations that often require a college or university
            education or other advanced post-secondary training.
          </div>
          <div class="lg:text-3xl text-xl xz font-bold pt-4 pb-2 leading-8 lg:leading-10 lg:py-3">
            Who Can Apply for the FSWP?
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            The Canadian government has announced its goal to issue a Permanent
            Resident (PR) Visa to Canada to 232,000 “economic immigrants” in
            2021 through various Canadian immigration programs, such as the
            Federal Skilled Workers Program (FSWP).
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            The Federal Skilled Workers Program (FSWP) is a points-based
            Canadian immigration program designed to offer a Permanent Resident
            (PR) Visa to Canada to thousands of qualified skilled foreign
            workers (and their eligible family members) who meet certain
            criteria.
          </div>
          <div class="lg:py-1 pt-2 pb-0 leading-7 opacity-95">
            Points are given for factors considered important to the success of
            skilled foreign workers who immigrate to Canada such as:
          </div>
          <div class=" lg:py-3 py-2 px-6">
            <ul class="list-disc">
              <li class="py-1">
                English/French language skills (28 points possible)
              </li>
              <li class="py-1">Education (25 points possible)</li>
              <li class="py-1">Work experience (15 points possible).</li>
              <li class="py-1">Age (12 points possible)</li>
              <li class="py-1">
                Qualifying Canadian job offer (10 points possible)
              </li>
              <li class="py-1">Adaptability (10 points possible)</li>
            </ul>
          </div>

          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            A minimum of 67 points out of a maximum of 100 points is needed to
            qualify for the FSWP, along with meeting other eligibility criteria.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Applicants must also have their English and/or French language
            abilities evaluated by taking the IELTS and/or TEF exams and obtain
            an acceptable score; receive a favorable Educational Credential
            Assessment (ECA) from one of the agencies authorized by the Canadian
            government; plus meet the health and character standards and other
            criteria.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Please note that if you would like to live and work in Quebec, you
            cannot apply for immigration to Canada through the FSWP and must
            instead apply for Canadian immigration through the Quebec Regular
            Skilled Workers Program (QSWP).
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            One of the key eligibility requirements for the Federal Skilled
            Workers Program (FSWP) is to have at least one year of continuous
            full-time paid work experience during the past 10 years in a
            qualifying occupation listed by the National Occupational
            Classification (NOC) as being at Skill Type 0 (certain management
            occupations), Skill Level A (certain professions usually requiring a
            university education), or Skill Level B (certain technical jobs and
            skilled trades usually requiring a college education or
            apprenticeship training).
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            There are dozens of managerial, professional and other high-demand
            occupations that are eligible for the FSWP.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            For example, some of the Skill Type 0 (Managerial) jobs in Canada
            that qualify for the FSWP include: Banking, Credit and Other
            Investment Managers; Computer and Information Systems Managers;
            Construction Managers; Engineering Managers; Managers in Health
            Care; Human Resources Managers; Purchasing Managers; Restaurant and
            Food Service Managers; and Retail and Wholesale Trade Managers.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Skill Level A (Professional) jobs in Canada (usually requiring a
            university education) that are eligible for the FSWP include:
            Accountants; Architects; Audiologists and Speech Pathologists;
            Chemical Engineers; Civil Engineers; Database Analysts and Data
            Administrators; Dentists; Dietitians and Nutritionists; Electrical
            and Electronics Engineers; Elementary and Kindergarten Teachers;
            Financial and Investment Analysts; General Practitioners and Family
            Physicians; Geoscientists and Oceanographers; Land Surveyors;
            Mechanical Engineers; Occupational Therapists; Optometrists;
            Petroleum Engineers; Pharmacists; Physicists and Astronomers;
            Physiotherapists; Professional Occupations in Advertising, Marketing
            and Public Relations; Psychologists; Registered Nurses and
            Registered Psychiatric Nurses; Secondary School (High School)
            Teachers; Software Engineers and Designers; Specialist Physicians;
            Translators, Terminologists and Interpreters; and University
            Professors and Lecturers.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Examples of Skill Level B (Skilled Trades and Technical Jobs in
            Canada) that usually require a college education or apprenticeship
            training include: Bakers; Butchers; Carpenters; Chefs; Crane
            Operators; Electricians; Heavy-Duty Equipment Mechanics; Plumbers;
            Power Engineers and Power Systems Operators; Refrigeration and Air
            Conditioning Mechanics; Telecommunications Line and Cable Workers;
            and more! Please note that the above occupations are a limited
            sample of the many occupations that qualify for the Federal Skilled
            Workers Program (FSWP) and that there are dozens of additional
            occupations that are also eligible for this popular Canadian
            immigration program.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            The authorized immigration consultants who collaborate with Canadian
            Visa Expert can evaluate your CV and other relevant details and
            inform you as to whether your occupation, work experience, job
            skills and other factors are likely to qualify for the FSWP.
          </div>

          <div class="lg:text-3xl text-xl xz font-bold pt-4 pb-2 leading-8 lg:leading-10 lg:py-3">
            Application Procedure
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Application for the FSWP begins by filing an online Express Entry
            profile with the Canadian immigration agency.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Before the Express Entry profile is filed, however, the applicant
            should have a passing score on an approved English or French
            language evaluate exam that is less than two years old, and receive
            a favorable Education Credential Assessment (ECA).
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Further details regarding language tests and the ECA can be provided
            to clients of Canada Visa Pathway who are assessed as eligible to
            start the process for the FSWP.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            When the Express Entry profile is filed, details about the
            applicant’s family, education, work experience, language tests
            scores, and other information will be entered.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            A Canadian immigration official will then review the profile and if
            the applicant seems to meet the criteria for the FSWP, his or her
            profile will be placed in the Express Entry pool of candidates.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            If the Express Entry candidate has one of the highest scores on the
            Comprehensive Ranking System OR receives a qualifying offer of
            Canadian employment OR is nominated for the Provincial Nominees
            Program (PNP), he or she could be issued an Invitation to Apply
            (ITA).
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            After the ITA is received, the skilled foreign worker will have up
            to 60 days to file the Application for a Permanent Resident Visa to
            Canada, including the documents and governmental fees.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Canada’s immigration authorities normally make a decision regarding
            Express Entry in six months or less after a complete Canadian Visa
            Application is filed.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            If the skilled immigrant and his or family members are approved for
            Express Entry immigration to Canada, they will receive a
            Confirmation of Permanent Residence (COPR) and a Canadian Permanent
            Resident Visa may also be placed in their passport (if someone from
            their country is required to have a visa to Canada).
          </div>
        </div>
      </div>

      <div class="bg-red-700 text-white pt-24 pb-20 px-6 flex flex-col justify-center items-center text-center">
        <div class="max-w-4xl w-full lg:text-4xl text-xl font-semibold lg:font-medium xz">
          To learn if you are likely to meet the criteria for the Federal
          Skilled Workers Program (FSWP)
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
            Do you need Federal Skilled Workers Program assistance? We can help,
            Canada Visa Pathway assists everybody.
          </div>
          <div class="lg:py-1 pt-2 pb-0 leading-7 opacity-95">
            Please complete this short form to submit query directly to our
            Federal Skilled Workers Program team. Our Federal Skilled Workers
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

export default Fswv;
