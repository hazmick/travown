import React from "react";
import bg from "../images/backgroundImg1.png";
import { Link } from "react-router-dom";
import logo from "../images/icon.svg";
import staff1 from "../images/staff1.png";
import staff2 from "../images/staff2.png";
import staff3 from "../images/staff3.png";
import staff4 from "../images/staff4.jpg";
import staff5 from "../images/staff6.jpg";
import Navbar from "./navbar";

function Agent() {
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
      <div class="agent">
        <Navbar />

        <div class="lg:pb-28 lg:pt-80 pt-64 pb-16 max-w-4xl px-6 lg:px-20 flex flex-col m-auto justify-center items-center">
          <div class="font-semibold text-2xl lg:text-5xl bn">
            SENIOR MANAGEMENT TEAM
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
            <span>Agents List</span>
          </div>
        </div>
      </div>

      <div class="card-container flex w-full flex-wrap px-6 py-16 lg:px-20 lg:pt-32 lg:pb-16">
        <div class="flex flex-col w-full lg:w-1/4 p-3">
          <div class="card ">
            <div class="flex justify-center">
              <img src={staff4} class="w-full" />
            </div>
            <div class="px-3 py-4">
              <div class="font-semibold">Marcel Hudges</div>
              <div class="text-red-700 py-1">RCIC NUMBER: #R407903</div>
              <div>Chief Operating Officer</div>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full lg:w-1/4 p-3">
          <div class="card ">
            <div class="flex justify-center">
              <img src={staff5} class="w-full" />
            </div>
            <div class="px-3 py-4">
              <div class="font-semibold">Bernie Asphash</div>
              <div class="text-red-700 py-1">RCIC NUMBER: #R708530</div>
              <div>Principal Partner</div>
            </div>
          </div>
        </div>

        <div class="flex flex-col w-full lg:w-1/4 p-3">
          <div class="card ">
            <div class="flex justify-center">
              <img src={staff2} class="w-full" />
            </div>
            <div class="px-3 py-4">
              <div class="font-semibold">Nathan Harrison</div>
              <div class="text-red-700 py-1">RCIC NUMBER: #R234330</div>
              <div>Senior Immigration Officer</div>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full lg:w-1/4 p-3">
          <div class="card ">
            <div class="flex justify-center">
              <img src={staff1} class="w-full" />
            </div>
            <div class="px-3 py-4">
              <div class="font-semibold">Williams Beverly</div>
              <div class="text-red-700 py-1">RCIC NUMBER: #R423175</div>
              <div>Senior Immigration Officer</div>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full lg:w-1/4 p-3">
          <div class="card ">
            <div class="flex justify-center">
              <img src={staff3} class="w-full" />
            </div>
            <div class="px-3 py-4">
              <div class="font-semibold">Anderson Williams</div>
              <div class="text-red-700 py-1">RCIC NUMBER: #R987275</div>
              <div>Senior Immigration Officer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agent;
