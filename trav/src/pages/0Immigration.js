import React, { useState } from "react";
import bg from "../images/backgroundImg1.png";
import { Link } from "react-router-dom";
import logo from "../images/icon.svg";
import axios from "axios";
import Navbar from "./navbar";

function Express() {
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

        <div class="lg:pb-28 lg:pt-64 pt-80 pb-16 max-w-4xl px-6 lg:px-20 flex flex-col m-auto justify-center items-center">
          <div class="font-semibold text-2xl lg:text-5xl bn">
            Express Entry Services
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
            <span>Express Entry Services</span>
          </div>
        </div>
      </div>

      <div class="lg:px-20 px-6 pt-16 pb-8 lg:py-16">
        <div>
          <div class="lg:text-4xl text-xl font-bold pb-2 leading-8 lg:leading-10 lg:py-3">
            Express Entry
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            The demand for highly-skilled workers continues to grow across
            Canada and, therefore, on January 1, 2015, the Canadian government
            launched the Express Entry system for immigration to Canada.
          </div>
          <div class="lg:py-1 pt-2 pb-0 leading-7 opacity-95">
            Express Entry is an electronic Canadian immigration system for
            skilled foreign workers that manages applications for a Permanent
            Resident (PR) Visa to Canada in a very FAST and EFFICIENT way for
            the following programs:
          </div>
          <div class=" lg:py-3 py-2 px-6">
            <ul class="list-disc">
              <li class="py-1">Federal Skilled Workers Program (FSWP)</li>
              <li class="py-1">Federal Skilled Trades Program (FSTP)</li>
              <li class="py-1">Canadian Experience Class (CEC) Program.</li>
            </ul>
          </div>

          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Foreign workers can also apply for the Provincial Nominees Program
            (PNP) through the Express Entry system or using the “traditional”
            application method.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Provinces and territories across Canada that are looking for
            qualified skilled foreign workers are able to review the profiles of
            Express Entry candidates who register with the Canadian government’s
            Job Bank and may “nominate” skilled foreign workers for the
            Provincial Nominees Program (PNP) if they seem to meet the criteria
            established for their particular province or territory.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            The Express Entry system for immigration to Canada involves two
            major stages.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            The authorized immigration consultants who Canada Visa Pathway works
            with can assist you through both major stages of the Express Entry
            procedure.
          </div>
          <div class="lg:text-3xl text-xl xz font-bold pt-4 pb-2 leading-8 lg:leading-10 lg:py-3">
            Stage One – Express Entry Profile
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            During the first stage of the procedure, skilled foreign workers
            will complete an online Express Entry profile which will include
            details about their education, language abilities, job skills, work
            experience, age and other details.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Canada Visa Pathway offers a beneficial service, provided by the
            authorized immigration consultants we subcontract, to correctly file
            the Express Entry profile on behalf of its clients.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            People who meet the criteria for one of the “economic immigration”
            programs mentioned above (i.e., FSWP, FSTP, CEC or PNP) will be
            placed into the pool of Canadian immigration candidates and will be
            ranked according to the others in the pool on the Comprehensive
            Ranking System (CRS).
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Those who have a qualifying job offer from a Canadian employer or
            who have received a nomination from a province or territory in
            Canada “will be given high scores in the ranking system.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            If a candidate does not have a valid job offer from a Canadian
            employer or a provincial/territorial nomination when they submit
            their Express Entry profile, then he or she should register with the
            Government of Canada’s Job Bank, which will connect him or her with
            eligible Canadian employers so that he or she may obtain a valid job
            offer.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Canadian employers will be able to access the profiles of those who
            register with Canada’s Job Bank so they can find eligible skilled
            foreign workers and extend to them offers of employment in Canada.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Provinces and territories across Canada will also be able to search
            the Job Bank and may offer nominations to their Provincial Nominees
            Program (PNP) to skilled foreign workers who seem to meet their
            eligibility requirements.
          </div>
          <div class="lg:text-3xl text-xl xz font-bold pt-4 pb-2 leading-8 lg:leading-10 lg:py-3">
            Stage Two – Invitation to Apply
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            In the second major stage of the Express Entry process, the Canadian
            government will review the qualifications of skilled foreign workers
            in the pool and will select eligible candidates (based on skills,
            experience, points and other factors) to be invited to apply for a
            Permanent Resident Visa to Canada.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            In general, in order to receive an Invitation to Apply (ITA) for a
            Permanent Resident Visa to Canada, a candidate in the Express Entry
            pool must have one of the highest scores on the Comprehensive
            Ranking System OR receive a qualifying Canadian job offer OR be
            nominated for a Provincial Nominees Program (PNP).
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Those who receive an ITA will have 60 days to submit an electronic
            application for Canadian Permanent Residence and will normally be
            given a response within only 6 months.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            That is why this Canadian immigration system is called Express
            Entry!
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            People who do not receive an Invitation to Apply (ITA) for a PR Visa
            to Canada after being in the pool for 12 months will be removed from
            the pool, but they may then submit a new Express Entry profile to
            re-enter the pool of Canadian immigration candidates, if they meet
            the criteria for the eligible Canadian immigration programs at that
            time.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Canadian employers will be able to access the profiles of those who
            register with Canada’s Job Bank so they can find eligible skilled
            foreign workers and extend to them offers of employment in Canada.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            The authorized immigration consultants who work with Canadian Visa
            Expert can assess your eligibility to apply for Express Entry and,
            if you qualify, they can help to make the procedure go as smoothly
            as possible for you and your family.
          </div>
        </div>
      </div>

      <div class="bg-red-700 text-white pt-24 pb-20 px-6 flex flex-col justify-center items-center text-center">
        <div class="max-w-4xl w-full lg:text-4xl text-xl font-semibold lg:font-medium xz">
          Immigrate to Canada with Express Entry!
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
            Do you need Express Entry assistance? We can help, Immigration
            Consulate Canada assists everybody obtain Canadian Express Entry.
          </div>
          <div class="lg:py-1 pt-2 pb-0 leading-7 opacity-95">
            Please complete this short form to submit your query directly to our
            Express Entry team. Our Express Entry Team is here to help:
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
            <button class="bg-red-700 text-white py-4 px-10 rounded-md">
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
                  <span class="pl-3">info@canadavisapathway.ca</span>
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

export default Express;
