import React, { useState } from "react";
import bg from "../images/backgroundImg1.png";
import { Link } from "react-router-dom";
import logo from "../images/icon.svg";
import axios from "axios";
import Navbar from "./navbar";

function Student() {
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
          <div class="font-semibold text-2xl lg:text-5xl bn">Student Visa</div>

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
            <span>Student Visa</span>
          </div>
        </div>
      </div>

      <div class="lg:px-20 px-6 pt-16 pb-8 lg:py-16">
        <div>
          <div class="lg:text-4xl text-xl font-bold pb-2 leading-8 lg:leading-10 lg:py-3">
            Benefits of <span class="text-red-700">Studying in Canada</span>
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 ">
            Canada has made it easier for international students to begin their
            Canadian immigration journey. Whether you wish to begin your program
            at a Canadian college or university, you will be able to study
            online in your home country and still access the same benefits of
            being in Canada.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 ">
            The reason for this is that Canada is allowing new international
            students to start their Canadian educational programs online, and
            still be eligible to obtain a Post-Graduation Work Permit after they
            complete their program. This is a temporary policy that aims to
            provide more flexibility to international students due to the global
            coronavirus pandemic.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 ">
            According to Immigration, Refugees and Citizenship Canada (IRCC), a
            student can complete up their entire Canadian program online and
            remain eligible for the PGWP.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 ">
            The PGWP is important for international students that want to make
            their Canadian immigration applications more competitive. The
            combination of a Canadian education and Canadian work experience
            gained through the PGWP will enhance a student’s chances of
            obtaining Canadian permanent residence.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 ">
            Hence, assuming that a student is currently enrolled in a qualifying
            two-year program at a Canadian college or university or other
            designated learning institution, they can get a full, three-year
            PGWP after completing their program as long as they complete 50 per
            cent of their program in Canada
          </div>
          <div class="lg:py-1 pt-2 pb-0 leading-7 ">
            The benefits of beginning your Canadian immigration journey include:
          </div>
          <div class=" lg:py-3 py-2 px-6">
            <ul class="list-disc">
              <li class="py-1">
                Get peace of mind that you can start your Canadian program in
                your country even if you are unable to come to Canada in time
                because of a coronavirus interruption (e.g., lack of available
                flights).
              </li>
              <li class="py-1">
                Canadian colleges and universities are currently offering their
                programs online for the 2020-21 academic year.
              </li>
              <li class="py-1">
                If you take a qualifying program at a Canadian designated
                learning institution (e.g., a college or university) of at least
                two years in duration, you can get a full, three-year
                Post-Graduation Work Permit (PGWP). A PGWP of this length will
                provide you with three years to get enough qualifying Canadian
                work experience to become eligible for more immigration
                programs.
              </li>
              <li class="py-1">
                Beginning your program online can make studying in Canada even
                more affordable for you. Canada is already more affordable to
                study in than the likes of the United States, United Kingdom,
                Europe, and Australia. This temporary PGWP policy enables you to
                save on several months of living costs in Canada while you
                remain in your home country.
              </li>
              <li class="py-1">
                If you are like most study permit holders, you will be legally
                eligible to work in Canada for any employer as soon as you
                arrive to the country. Under the terms of most study permits,
                you can work for up to 20 hours per week during your program,
                and full-time during regularly scheduled breaks such as winter
                and summer breaks.
              </li>
              <li class="py-1">
                Your spouse or partner is eligible to obtain an open work permit
                to work for any Canadian employer during and after you complete
                your studies. You can also bring your children with you to
                Canada and they can attend one of Canada’s public schools
                without needing their own study permit.
              </li>
              <li class="py-1">
                Once you complete your program, you will get a Canadian degree,
                diploma, or other credentials that will be recognized and
                respected by Canadian employers and government authorities. This
                credential will help you integrate into the Canadian labour
                market and gain more points under a variety of federal and
                provincial immigration programs.
              </li>
              <li class="py-1">
                Pursuing Canadian studies will also help to enhance your English
                and/or French skills. Stronger language skills will support your
                economic and social integration in Canada and also help you
                obtain more points under Canada’s immigration programs.
              </li>
            </ul>
          </div>
          <div class=" lg:py-3 font-bold lg:text-xl pt-8 pb-2">
            About Canada’s Universities and Colleges
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 ">
            There are over 1,500 universities, colleges, and other educational
            institutions that are authorized by Immigration, Refugees and
            Citizenship Canada (IRCC) to welcome international students. These
            educational institutions are called designated learning institutions
            (DLIs) and they exist to help international students learn in Canada
            and stay in the country after graduation. The list of DLIs that are
            authorized by IRCC is constantly growing. Please verify that the
            university, college, or other institution you wish to enroll in is
            authorized by IRCC by visiting the Canadian government’s official
            website.
          </div>
          <div class="lg:py-2 pt-2 pb-0 leading-7 ">
            Ontario and Quebec are Canada’s largest provinces by population, and
            hence, they host the most number of DLIs in the country (nearly
            1,000 combined).
          </div>
          <div class="lg:py-2 pt-2 pb-0 leading-7 ">
            Given the large number of DLIs across Canada, you are very likely to
            find an educational program that meets your needs.
          </div>
          <div class="lg:py-2 pt-2 pb-0 leading-7 ">
            If you wish to pursue undergraduate (i.e., Bachelors) or
            post-graduate studies (i.e., Master’s or PhD), Canada has some 100
            universities, including internationally-renowned schools such as:
          </div>

          <div class=" lg:py-3 py-2 px-6">
            <ul class="list-disc">
              <li class="py-1">Dalhousie University</li>
              <li class="py-1">McGill University</li>
              <li class="py-1">McMaster University</li>
              <li class="py-1">Queen’s University</li>
              <li class="py-1">Simon Fraser University</li>
              <li class="py-1">University of Alberta</li>
              <li class="py-1"> University of British Columbia</li>
              <li class="py-1">University of Calgary</li>
              <li class="py-1"> University of Montreal</li>
              <li class="py-1">University of Ottawa</li>
              <li class="py-1"> University of Toronto</li>
              <li class="py-1"> University of Waterloo</li>
            </ul>
          </div>
          <div class="lg:py-2 pt-2 pb-0 leading-7 ">
            Generally speaking, universities across Canada offer comparable
            levels of high-quality education. The reason for this is that Canada
            promotes equity within its education system, meaning that it strives
            to ensure all students get the best possible education possible,
            irrespective of which institution that they go to.
          </div>
          <div class="lg:py-2 pt-2 pb-0 leading-7 ">
            Canada also has some 150 community colleges which also offer good
            quality education. Whereas universities specialize in providing
            theoretical knowledge and career training in certain professions
            (e.g., medicine, engineering, law), community colleges offer more
            applied training to help students quickly integrate into the labour
            market. College programs are more practical, with the knowledge
            provided to students meant to help them find work within their area
            of study.
          </div>
          <div class="lg:py-2 pt-2 pb-0 leading-7 ">
            Just like universities, colleges across Canada tend to offer similar
            levels of education. International students should take comfort at
            studying at a Canadian college, since the credential that they gain
            will support their professional and immigration ambitions upon
            graduation.
          </div>
          <div class="lg:py-2 pt-2 pb-0 leading-7 ">
            If you want help finding the right program for you at a Canadian
            designated learning institution, whether it is a college,
            university, or other type of designated learning institution, please
            complete CanadaVisa’s Study Assessment Form so that we can assist
            you as soon as possible.
          </div>
          <div class="lg:text-4xl text-xl font-bold pt-8 pb-2 leading-8 lg:leading-10 lg:pt-8 lg:pb-3">
            Study Pathways to Permanent Residence (PR)
          </div>
          <div class="lg:py-2 pt-2 pb-0 leading-7 ">
            If you want help finding the right program for you at a Canadian
            designated learning institution, whether it is a college,
            university, or other type of designated learning institution, please
            complete CanadaVisa’s Study Assessment Form so that we can assist
            you as soon as possible.
          </div>
          <div class="lg:py-2 pt-2 pb-0 leading-7 ">
            Your education in Canada may put you at an advantage when it comes
            to pursuing Canadian permanent residence. Many federal and
            provincial immigration programs value candidates with Canadian
            education and work experience.
          </div>
          <div class="lg:py-2 pt-2 pb-0 leading-7 ">
            After completing your education in Canada, you can gain Canadian
            work experience by obtaining a Post-Graduation Work Permit (PGWP)
            which, depending on your Canadian academic program, may enable you
            to work in Canada for up to three years.
          </div>
          <div class="lg:py-2 pt-2 pb-0 leading-7 ">
            While holding a PGWP, you can then go ahead and pursue a number of
            federal and provincial permanent residence avenues, such as:
          </div>
          <div class=" lg:py-3 font-bold lg:text-xl pt-8 pb-2">
            Express Entry
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 ">
            One of the most prominent ways of pursuing permanent residence is by
            submitting an Express Entry profile. Express Entry is the main way
            that Canada manages economic class immigration applications.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 ">
            Express Entry candidates are assessed through the Comprehensive
            Ranking System. The Comprehensive Ranking System rewards candidates
            who are young, have Canadian education and work experience, and
            strong English and/or French proficiency. These are characteristics
            that many of Canada’s international students possess.
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 ">
            Through Express Entry, former international students may be
            well-placed to be eligible for the popular Canadian Experience Class
            (CEC) program, which enables tens of thousands of former
            international students and temporary foreign workers to become
            permanent residents each year.
          </div>
          <div class=" lg:py-3 font-bold lg:text-xl pt-8 pb-2">
            Provincial Nominee Program (PNP)
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 ">
            The Provincial Nominee Program (PNP) allows provinces and
            territories across Canada to identify immigration candidates who
            meet their local economic needs. Many PNP streams reward candidates
            who are former international students or are specifically dedicated
            to international students.
          </div>
          <div class=" lg:py-3 font-bold lg:text-xl pt-8 pb-2">Quebec</div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 ">
            Quebec is Canada’s second largest province and the city of Montreal
            is a very popular destination for international students. The
            province operates its own immigration system with programs that are
            different from those offered by the federal government and under the
            PNP. Quebec also encourages former international students to
            transition to permanent residence. One of the notable ways it seeks
            to do this is through the Quebec Experience Program.
          </div>
          <div class=" lg:py-3 font-bold lg:text-xl pt-8 pb-2">
            Other Federal Programs
          </div>
          <div class="lg:py-3 pt-2 pb-0 leading-7 ">
            In addition to the three programs it manages under Express Entry,
            the federal government operates additional economic class
            immigration programs. The programs offer special streams to
            international students and/or exemptions from Canadian work
            experience requirements. These include the Atlantic International
            Graduate Program (which operates under the Atlantic Immigration
            Pilot) and the Rural and Northern Immigration Pilot.
          </div>
        </div>
      </div>

      <div class="bg-red-700 text-white pt-24 pb-20 px-6 flex flex-col justify-center items-center text-center">
        <div class="max-w-4xl w-full lg:text-4xl text-xl font-semibold lg:font-medium xz">
          Apply for a Student Visa TO CANADA
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
          <div class="lg:py-1 pt-2 pb-0 leading-7 ">
            Do you need Study Visa assistance? We can help, Immigration
            Consulate Canada assists everybody obtain Canadian Study Visa.
          </div>
          <div class="lg:py-1 pt-2 pb-0 leading-7 ">
            Please complete this short form to submit your query directly to our
            Study Visa team. Our Study Visa Team is here to help:
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

export default Student;
