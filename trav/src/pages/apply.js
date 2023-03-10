import React, { useState } from "react";
import bg from "../images/backgroundImg1.png";
import { Link } from "react-router-dom";
import logo from "../images/icon.svg";
import axios from "axios";
import Navbar from "./navbar";

function Apply() {
  const [fname, setfname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [age, setage] = useState("");
  const [address, setaddress] = useState("");
  const [marraigestats, setmarraigestats] = useState("");
  const [spousefname, setspousefname] = useState("");
  const [spouseage, setspouseage] = useState("");
  const [edulevel, setedulevel] = useState("");
  const [spouseedulevel, setspouseedulevel] = useState("");
  const [employmentHistory, setemploymentHistory] = useState("");
  const [spouseemploymentHistory, setspouseemploymentHistory] = useState("");
  const [childrenunder19, setchildrenunder19] = useState("");
  const [childrenabove19, setchildrenabove19] = useState("");
  const [passport, setpassport] = useState("");
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
        "/api/mail/meta/",
        {
          fname,
          email,
          mobile,
          age,
          email,
          address,
          marraigestats,
          spousefname,
          spouseage,
          edulevel,
          spouseedulevel,
          employmentHistory,
          spouseemploymentHistory,
          childrenunder19,
          childrenabove19,
          passport,
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

        <div class="lg:pb-28 lg:pt-80 pt-64 pb-16 max-w-4xl lg:text-center px-6 lg:px-20 flex flex-col m-auto justify-center items-center">
          <div class="font-semibold text-2xl lg:text-5xl bn">
            IMMIGRATION ASSESSMENT FORM
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
            <span>Apply</span>
          </div>
        </div>
      </div>

      <div class="lg:px-20 px-6 pt-16 pb-8 lg:pt-16 lg:pb-3">
        <div>
          <div class="lg:text-4xl text-xl font-bold pb-2 leading-8 lg:leading-10 lg:py-3">
            IMMIGRATION ASSESSMENT FORM
          </div>
          <div class="lg:py-1 pt-2 pb-0 leading-7">
            Complete the assessment forms below
          </div>
          <div class="lg:pb-3 lg:pt-3 pt-2 pb-0">
            We will provide you with your immigration options within 1-2
            business days.
          </div>
        </div>
      </div>

      <div
        id="form"
        style={{ color: "rgba(0,0,0,0.90)" }}
        class="lg:px-20 px-6 pb-16"
      >
        <form onSubmit={submitHandler1}>
          <div id="first">
            <div id="one" class="flex justify-between flex-col lg:flex-row">
              <div class="flex flex-col w-full lg:pr-6 py-3">
                <label class="py-2">
                  Full Name <span class="text-sm text-red-700">(Required)</span>
                </label>
                <input
                  required
                  id="fname"
                  name="fname"
                  value={fname}
                  onChange={(e) => {
                    setfname(e.target.value);
                  }}
                  class="border border-gray-900 rounded p-3"
                  type="text"
                  placeholder="Ellen Maguire"
                />
              </div>
              <div class="flex flex-col w-full lg:pl-6 py-3">
                <label class="py-2">
                  Email <span class="text-sm text-red-700">(Required)</span>
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  class="border border-gray-900 rounded p-3"
                  type="email"
                  placeholder="abc@gmail.com"
                />
              </div>
            </div>
            <div id="one" class="flex justify-between flex-col lg:flex-row">
              <div class="flex flex-col w-full lg:pr-6 py-3">
                <label class="py-2">
                  Mobile <span class="text-sm text-red-700">(Required)</span>
                </label>
                <input
                  required
                  id="mobile"
                  name="mobile"
                  value={mobile}
                  onChange={(e) => {
                    setmobile(e.target.value);
                  }}
                  class="border border-gray-900 rounded p-3"
                  type="tel"
                />
              </div>
              <div class="flex flex-col w-full lg:pl-6 py-3">
                <label class="py-2">
                  Age <span class="text-sm text-red-700">(Optional)</span>
                </label>
                <input
                  id="age"
                  name="age"
                  value={age}
                  onChange={(e) => {
                    setage(e.target.value);
                  }}
                  class="border border-gray-900 rounded p-3"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <div id="one" class="flex justify-between flex-col lg:flex-row">
              <div class="flex flex-col w-full lg:pr-6 py-3">
                <label class="py-2">
                  Residential Address{" "}
                  <span class="text-sm text-red-700">(Required)</span>
                </label>
                <input
                  required
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => {
                    setaddress(e.target.value);
                  }}
                  class="border border-gray-900 rounded p-3"
                  type="text"
                  placeholder=""
                />
              </div>
              <div class="flex flex-col w-full lg:pl-6 py-3">
                <label class="py-2">
                  Marital Status{" "}
                  <span class="text-sm text-red-700">(Required)</span>
                </label>
                <select
                  class="border border-gray-900 rounded p-3"
                  id="marraigestats"
                  name="marraigestats"
                  value={marraigestats}
                  onChange={(e) => {
                    setmarraigestats(e.target.value);
                  }}
                >
                  <option id="null" value="Choose from this list">
                    Choose from this list
                  </option>
                  <option id="Single" value="Single">
                    Single
                  </option>
                  <option id="Married" value="Married">
                    Married
                  </option>
                  <option id="Divorced" value="Divorced">
                    Divorced
                  </option>
                  <option id="Others" value="Others">
                    Others
                  </option>
                </select>
              </div>
            </div>
            <div id="one" class="flex justify-between flex-col lg:flex-row">
              <div class="flex flex-col w-full lg:pr-6 py-3">
                <label class="py-2">
                  Spouse Full Name{" "}
                  <span class="text-sm text-red-700">(Optional)</span>
                </label>
                <input
                  id="spousefname"
                  name="spousefname"
                  value={spousefname}
                  onChange={(e) => {
                    setspousefname(e.target.value);
                  }}
                  class="border border-gray-900 rounded p-3"
                  type="text"
                  placeholder=""
                />
              </div>
              <div class="flex flex-col w-full lg:pl-6 py-3">
                <label class="py-2">
                  Spouse Age{" "}
                  <span class="text-sm text-red-700">(Optional)</span>
                </label>
                <input
                  id="spouseage"
                  name="spouseage"
                  value={spouseage}
                  onChange={(e) => {
                    setspouseage(e.target.value);
                  }}
                  class="border border-gray-900 rounded p-3"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <div id="one" class="flex justify-between flex-col lg:flex-row">
              <div class="flex flex-col w-full lg:pr-6 py-3">
                <label class="py-2">
                  Educational Level{" "}
                  <span class="text-sm text-red-700">(Required)</span>
                </label>
                <select
                  class="border border-gray-900 rounded p-3"
                  id="edulevel"
                  name="edulevel"
                  value={edulevel}
                  onChange={(e) => {
                    setedulevel(e.target.value);
                  }}
                >
                  <option id="null" value="Choose from this list">
                    Choose from this list
                  </option>
                  <option id="Single" value="Single">
                    High School
                  </option>
                  <option id="Married" value="Married">
                    College
                  </option>
                  <option id="Divorced" value="Divorced">
                    Bachelor Degree
                  </option>
                  <option id="Others" value="Others">
                    Doctorate / PHD
                  </option>
                  <option id="Associate Degree" value="Associate Degree">
                    Associate Degree
                  </option>
                  <option id="Certificate" value="Certificate">
                    Certificate
                  </option>
                  <option id="Diploma" value="Diploma">
                    Diploma
                  </option>
                  <option id="Others" value="Others">
                    Others
                  </option>
                </select>
              </div>
              <div class="flex flex-col w-full lg:pl-6 py-3">
                <label class="py-2">
                  Spouse Educational Level{" "}
                  <span class="text-sm text-red-700">(Optional)</span>
                </label>
                <select
                  class="border border-gray-900 rounded p-3"
                  id="spouseedulevel"
                  name="spouseedulevel"
                  value={spouseedulevel}
                  onChange={(e) => {
                    setspouseedulevel(e.target.value);
                  }}
                >
                  <option id="null" value="Choose from this list">
                    Choose from this list
                  </option>
                  <option id="Single" value="Single">
                    High School
                  </option>
                  <option id="Married" value="Married">
                    College
                  </option>
                  <option id="Divorced" value="Divorced">
                    Bachelor Degree
                  </option>
                  <option id="Others" value="Others">
                    Doctorate / PHD
                  </option>
                  <option id="Associate Degree" value="Associate Degree">
                    Associate Degree
                  </option>
                  <option id="Certificate" value="Certificate">
                    Certificate
                  </option>
                  <option id="Diploma" value="Diploma">
                    Diploma
                  </option>
                  <option id="Others" value="Others">
                    Others
                  </option>
                </select>
              </div>
            </div>
            <div id="one" class="flex justify-between flex-col lg:flex-row">
              <div class="flex flex-col w-full lg:pr-6 py-3">
                <label class="py-2">
                  Employment History
                  <span class="text-sm text-red-700">(Required)</span>
                </label>
                <input
                  required
                  id="employmentHistory"
                  name="employmentHistory"
                  value={employmentHistory}
                  onChange={(e) => {
                    setemploymentHistory(e.target.value);
                  }}
                  class="border border-gray-900 rounded p-3"
                  type="How many months or years ?"
                  placeholder=""
                />
              </div>
              <div class="flex flex-col w-full lg:pl-6 py-3">
                <label class="py-2">
                  Spouse Employment History{" "}
                  <span class="text-sm text-red-700">(Optional)</span>
                </label>
                <input
                  id="spouseemploymentHistory"
                  name="spouseemploymentHistory"
                  value={spouseemploymentHistory}
                  onChange={(e) => {
                    setspouseemploymentHistory(e.target.value);
                  }}
                  class="border border-gray-900 rounded p-3"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <div id="one" class="flex justify-between flex-col lg:flex-row">
              <div class="flex flex-col w-full lg:pr-6 py-3">
                <label class="py-2">
                  Do you have any children under the age of 19?
                  <span class="text-sm text-red-700">(Required)</span>
                </label>
                <input
                  required
                  id="childrenunder19"
                  name="childrenunder19"
                  value={childrenunder19}
                  onChange={(e) => {
                    setchildrenunder19(e.target.value);
                  }}
                  class="border border-gray-900 rounded p-3"
                  type="How many months or years ?"
                  placeholder="Yes or No ? If yes, how many ?"
                />
              </div>
              <div class="flex flex-col w-full lg:pl-6 py-3">
                <label class="py-2">
                  Do you have any children over the age of 19?
                  <span class="text-sm text-red-700">(Required)</span>
                </label>
                <input
                  required
                  id="childrenabove19"
                  name="childrenabove19"
                  value={childrenabove19}
                  onChange={(e) => {
                    setchildrenabove19(e.target.value);
                  }}
                  class="border border-gray-900 rounded p-3"
                  type="text"
                  placeholder="Yes or No ? If yes, how many ?"
                />
              </div>
            </div>
            <div id="one" class="flex justify-between flex-col lg:flex-row">
              <div class="flex lg:w-1/2 flex-col lg:pr-6 py-3">
                <label class="py-2">
                  Do you Currently Hold a Valid passport?
                  <span class="text-sm text-red-700">(Optional)</span>
                </label>
                <select
                  id="passport"
                  name="passport"
                  value={passport}
                  onChange={(e) => {
                    setpassport(e.target.value);
                  }}
                  class="border border-gray-900 rounded p-3"
                >
                  <option id="null" value="Choose from this list">
                    Choose from this list
                  </option>
                  <option id="Yes" value="Yes">
                    Yes
                  </option>
                  <option id="No" value="No">
                    No
                  </option>
                </select>
              </div>
            </div>
            <div class="pt-8 lg:w-1/2 flex items-center">
              <label
                for="veri"
                htmlFor="veri"
                class="leading-7 lg:pr-6 opacity-90"
              >
                By selecting "Apply Now" agree to the storage and handling of my
                data by this website. You acknowledge that in order to continue
                the process our representative will contact you.
              </label>
            </div>
            <div class="flex">
              <button class="my-8 bg-red-700 text-white rounded-md px-10 py-4 outline-none border-2 border-red-700 hover:bg-white hover:text-red-700">
                Apply Now
              </button>
            </div>
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

export default Apply;
