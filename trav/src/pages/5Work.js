import React, { useState } from "react";
import bg from "../images/backgroundImg1.png";
import { Link } from "react-router-dom";
import logo from "../images/icon.svg";
import axios from "axios";
import Navbar from "./navbar";

function Work() {
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
          <div class="font-semibold text-2xl lg:text-5xl bn">Work Visa</div>

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
            <span>Work Visa</span>
          </div>
        </div>
      </div>

      <div class="lg:px-20 px-6 pt-16 pb-8 lg:py-16">
        <div>
          <div class="lg:text-4xl text-xl font-bold pb-2 leading-8 lg:leading-10 lg:py-3">
            Overview
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            For Canadian immigration purposes the definition of “work” is very
            broad and is defined as an activity for which wages are paid or
            commission is earned, or that competes directly with activities of
            Canadian citizens or permanent residents in the Canadian labour
            market, no matter the duration of the intended activity. Generally
            speaking, a Labour Market Impact Assessment (LMIA) is required,
            indicating that the proposed employment will not adversely affect
            Canadian workers. In most cases a job offer from a Canadian employer
            is required to apply for a Canadian Work Permit. In limited
            situations, Canadian immigration regulations allow for Open Work
            Permits, which are not employer-specific. A work permit is always
            temporary in nature, but can often be extended from inside Canada.
            Below is a guide on how you can pursue a Canadian temporary work
            permit.
          </div>
          <div class="lg:text-3xl text-xl xz font-bold pt-4 pb-2 leading-8 lg:leading-10 lg:py-3">
            Step 1: Employer applies for a Labour Market Impact Assessment, if
            necessary
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            The Canadian government has two categories of work permits. A work
            permit either needs a labour market test or is exempt from requiring
            it. In some cases, the labour market test is required to demonstrate
            that the issuance of a work permit to a foreign national will not
            have a negative impact on the employment and wages of workers in
            Canada.
          </div>

          <div class=" lg:py-3 font-bold lg:text-xl pt-6 pb-1">
            What is an LMIA?
          </div>
          <div class="lg:py-1 pt-2 pb-0 leading-7 opacity-95">
            The name of the labour market test is called a Labour Market Impact
            Assessment (LMIA). The federal government department that oversees
            the LMIA process is called Employment and Social Development Canada
            (ESDC). A positive or neutral LMIA is issued by ESDC when it is
            satisfied that there is no Canadian citizen or permanent resident
            available to do the job. A negative LMIA is issued when it believes
            there are domestic workers available to do the job and hiring a
            foreign national will harm workers in Canada.
          </div>
          <div class="lg:py-1 pt-2 pb-0 leading-7 opacity-95">
            Typically, employers in Canada that wish to hire a foreign national
            are required to get a positive or neutral LMIA from ESDC. Once this
            is granted, the foreign national can then go to the federal
            department of Immigration, Refugees and Citizenship Canada (IRCC) to
            get their work permit. Once they get their work permit, they can go
            ahead and move to Canada to begin working for the employer.
          </div>
          <div class="lg:py-1 pt-2 pb-0 leading-7 opacity-95">
            Further, if the Canadian employer is hiring for a position located
            in the province of Quebec, the foreign worker will need to obtain a
            Certificat d’acceptation du Québec (CAQ) in order to work
            temporarily in Quebec. The CAQ application will have to be submitted
            to Quebec’s Ministère de l’Immigration, Francisation et de
            l’Intégration (MIFI) at the same time as the LMIA is submitted to
            ESDC.
          </div>
          <div class="lg:py-1 pt-2 pb-0 leading-7 opacity-95">
            ESDC and MIFI have made available to employers a streamlined LMIA
            process to fill selected positions in Quebec without having to
            include proof of recruitment efforts.
          </div>
          <div class=" lg:py-3 font-bold lg:text-xl pt-6 pb-1">
            When is an LMIA not required?
          </div>
          <div class="lg:py-1 pt-2 pb-0 leading-7 opacity-95">
            In a limited number of situations foreign workers may obtain a work
            permit without the need for a LMIA. These work permits are typically
            referred to as LMIA Exempt Work Permits and include the following:
          </div>

          <div class=" lg:py-3 py-2 px-6">
            <ul class="list-disc">
              <li class="py-1">
                International agreements, such as the North American Free Trade
                Agreement (NAFTA), Comprehensive Economic and Trade Agreement
                (CETA), or Comprehensive and Progressive Agreement for
                Trans-Pacific Partnership (CPTPP);
              </li>
              <li class="py-1">Canadian interest:</li>
              <ul class="list-disc lg:py-3 py-2 px-6">
                <li class="py-1">
                  As a result of significant economic, social or cultural
                  benefits to Canadians;
                </li>
                <li class="py-1">
                  As a result of reciprocal agreements Canada and its
                  provinces/territories have entered into with other countries,
                  such as youth and teacher exchange programs;
                </li>
                <li class="py-1">
                  To allow international students studying in Canada to fulfill
                  academic requirements known as co-op placements;
                </li>
                <li class="py-1">
                  To allow the accompanying spouses/common-law partners of
                  certain work permit and Study Permit holders residing in
                  Canada to work in Canada;
                </li>
                <li class="py-1">To allow for charitable or religious work;</li>
              </ul>
              <li class="py-1">
                In recognition that certain persons in Canada for reasons other
                than the above-mentioned, such as the making of a refugee claim,
                need to support themselves;
              </li>
              <li class="py-1">
                Certain permanent residence applicants in Canada;
              </li>
              <li class="py-1">
                Certain migrant workers and their dependents in Canada on
                employer-specific work permits who are experiencing abuse, or
                who are at risk of abuse.
              </li>
            </ul>
          </div>

          <div class="lg:text-3xl text-xl xz font-bold pt-4 pb-2 leading-8 lg:leading-10 lg:py-3">
            Step 2: Employer extends Temporary Job Offer
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Once a positive or neutral LMIA is granted, the Canadian employer
            must provide a copy of the LMIA approval letter along with a
            detailed job offer letter to the foreign worker, who will need those
            documents to apply for a work permit.
          </div>
          <div class="lg:text-3xl text-xl xz font-bold pt-4 pb-2 leading-8 lg:leading-10 lg:py-3">
            Step 3: Foreign Worker applies for Work Permit
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            With the LMIA approval letter, the job offer letter (and the CAQ if
            applicable), the foreign worker can submit an application for a
            Canadian temporary work permit to Immigration, Refugees and
            Citizenship Canada (IRCC). Depending on their country of
            citizenship, the foreign worker may need to obtain a temporary
            residence visa (TRV) to travel to Canada, and would therefore need
            to submit the temporary work permit application at a Canadian visa
            office abroad.
          </div>
          <div class="lg:text-3xl text-xl xz font-bold pt-4 pb-2 leading-8 lg:leading-10 lg:py-3">
            Step 4: Work Permit is issued
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            The Canadian temporary work permit, will be issued at the point of
            entry by a Canada Border Services Agency (CBSA) officer at the time
            the foreign worker arrives in Canada.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            A temporary work permit may be issued for a period of time ranging
            from a few days to a few years.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Most Canadian work permits are employer specific, otherwise referred
            to as “closed” work permits, and are granted for a specific job in
            Canada. Consequently, a foreign worker may only work for the
            employer specified on the work permit. As such, if the foreign
            worker finds a different employment and does not yet have permanent
            resident status, the foreign worker must apply for and receive a new
            work permit prior to changing employers or their position in Canada.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 opacity-95">
            Note that a Canadian Temporary Work Permit is for those foreign
            workers who plan on working in Canada for a finite period of time.
            To work and live in Canada on a permanent basis, foreign workers
            must undertake the Canadian permanent residence process. However, a
            temporary work permit may be a stepping stone to Canadian permanent
            residence. Once in Canada on a temporary work permit, a foreign
            worker may qualify for Canadian permanent residence under the
            Canadian Experience Class (CEC), through a Skilled Worker category,
            or through one of the Provincial Nominee Programs.
          </div>
        </div>
      </div>

      <div class="bg-red-700 text-white pt-24 pb-20 px-6 flex flex-col justify-center items-center text-center">
        <div class="max-w-4xl w-full lg:text-4xl text-xl font-semibold lg:font-medium xz">
          APPLY FOR A CANADIAN WORK PERMIT
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
            Do you need Work Permit assistance? We can help, Immigration
            Consulate Canada assists everybody obtain Canadian Work Permit.
          </div>
          <div class="lg:py-1 pt-2 pb-0 leading-7 opacity-95">
            Please complete this short form to submit your query directly to our
            Work Permit team. Our Work Permit Team is here to help:
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

export default Work;
