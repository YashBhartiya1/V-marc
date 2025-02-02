"use client";
import React, { useState } from "react";
import Image from "next/image";
// import Investors from "./Investors";
// import Slider from "react-slick";
import { useRef } from "react";
import BOD from "./BOD";

const LeadershipTeam = ({ commitee, investors }) => {
  console.log(commitee);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const slideTo = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="bg-black w-full h-[100vh] relative overflow-y-scroll overflow-x-hidden flex justify-center">
      <div
        id="earth_img"
        className="absolute w-[176vw] h-[61vh] md:h-[80vh] lg:h-[160vh] top-[-30%] lg:top-[-100%] right-[-51%] lg:right-[-60%] "
        style={{ transform: "rotate(-55deg)" }}
      >
        <Image
          className="w-full h-full opacity-60"
          src="/img/earth.png"
          alt="error"
          width={500} height={300}
        />
      </div>

      <div className="absolute top-[20%] w-[80%] h-[50%] md:h-[78%] flex flex-col">
        <div className="flex justify-between items-center h-[70%]">
          <h2
            className="text-xs md:text-base lg:text-xl xl:text-2xl text-white font-[500]"
            style={{ fontFamily: "poppins" }}
          >
            Disclosure As Per Regulation 46 of the <br />
            <span className="font-[800] text-xl md:text-3xl lg:text-4xl xl:text-[44px] leading-8 lg:leading-10 xl:leading-[50px]">
              SEBI (LODR), 2015
            </span>
          </h2>

          <div>
            <Image
              className="w-[4rem] md:w-[7rem] lg:w-[9rem] xl:w-[11rem]"
              src="/img/invest1.png"
              alt="error"
              width={100} height={100}
            />
          </div>
        </div>
        {/* next div start */}
        <div
          id="buttons"
          className="text-white w-full absolute bottom-0 flex justify-between gap-2 text-xs md:text-sm lg:text-base xl:text-lg"
          style={{ fontFamily: "poppins" }}
        >
          <a href="/leadershipteam" className="bg-[#4456B0] p-2 rounded lg:w-[20%]">
            Leadership Team
          </a>
          <a href="/businessdetail" className="bg-[#4B4D58] p-2 rounded lg:w-[20%]">
            Details of Business
          </a>
          <a href="/financial_information" className="bg-[#4B4D58] p-2 rounded lg:w-[20%]">
            Financial Information
          </a>
          <button className="bg-[#4B4D58] p-2  rounded lg:w-[20%]">
            Shareholding Pattern
          </button>
        </div>
        {/* next div end */}
      </div>
      <div className="absolute bottom-[30%] md:bottom-[2%] border-b border-[#FFFFFF52] w-full"></div>
      {/* second section start  */}
      <div className="absolute top-[70%] md:top-[100%] w-[80%] h-[100%]">
        <h2 className="text-white text-center mt-5 text-sm">
          BOARD OF DIRECTORS
        </h2>
        <div className="investors-container w-full h-[100%] my-5 ">
          {/* <Investors investors={investors} /> */}
          <BOD investors={investors} />
        </div>
      </div>
      {/* second section end */}

      {/* third section start */}
      <div className="absolute w-full bg-[#2B2B2B] h-[115vh] md:h-[130vh] top-[290%] md:top-[275%] flex justify-center">
        <div className="w-[80%] h-full text-[#FFFFFF]">
          <h2 className="mt-5">COMMITTEE OF BOARD</h2>
          <div
            id="buttons"
            className="text-white w-full flex justify-between gap-2 text-xs md:text-sm lg:text-base xl:text-lg mt-5"
            style={{ fontFamily: "poppins" }}>
            <button className="bg-[#4456B0] p-2 rounded w-[25%]">
              Audit
            </button>
            <button className="bg-[#4B4D58] p-2 rounded ">
              Nomination And Remuneration
            </button>
            <button className="bg-[#4B4D58] p-2 rounded ">
              Stakeholder Relationship
            </button>
            <button className="bg-[#4B4D58] p-2  rounded ">
              Corporate Social Responsibility
            </button>
          </div>

          {/* designation in commit container */}
          <div
            className="w-full h-[80%] mt-8 "
            style={{ fontFamily: "poppins" }}
          >
            <div className="flex justify-end">
              <p className="bg-[#4456B0] text-[#ffffff] rounded-tl-[6px] rounded-tr-[6px] px-4 py-2">
                Designation in Committee
              </p>
            </div>

            <div className="border-2 border-[#363636] w-full rounded-t rounded-b p-1">
              <div className="md:flex justify-between p-2">
                <div className="md:p-2">
                  <h2 className="text-[#FFFFFF] text-lg">
                    Mr Ranjeet Kumar Tiberwal
                  </h2>
                  <p className="text-[#A9A27B] text-md">Independent Director</p>
                </div>
                <p className="text-[#FFFFFF] md:py-4 md:px-12 text-lg mt-1 md:mt-0">
                  Chairman
                </p>
              </div>
            </div>
            <div className="border-2 border-[#363636] w-full border-t-0 p-1 ">
              <div className="md:flex justify-between p-2">
                <div className="md:p-2">
                  <h2 className="text-[#FFFFFF] text-lg">
                    Mr Ranjeet Kumar Tiberwal
                  </h2>
                  <p className="text-[#A9A27B] text-md">Independent Director</p>
                </div>
                <p className="text-[#FFFFFF] md:py-4 md:px-12 text-lg mt-1 md:mt-0">
                  Member
                </p>
              </div>
            </div>
            <div className="border-2 border-[#363636] w-full border-t-0 p-1 ">
              <div className="md:flex justify-between p-2">
                <div className="md:p-2">
                  <h2 className="text-[#FFFFFF] text-lg">
                    Mr Ranjeet Kumar Tiberwal
                  </h2>
                  <p className="text-[#A9A27B] text-md">Independent Director</p>
                </div>
                <p className="text-[#FFFFFF] md:py-4 md:px-12 text-lg mt-1 md:mt-0">
                  Member
                </p>
              </div>
            </div>
            <div className="border-2 border-[#363636] w-full border-t-0 p-1 ">
              <div className="md:flex justify-between p-2">
                <div className="md:p-2">
                  <h2 className="text-[#FFFFFF] text-lg">
                    Mr Ranjeet Kumar Tiberwal
                  </h2>
                  <p className="text-[#A9A27B] text-md">Independent Director</p>
                </div>
                <p className="text-[#FFFFFF] md:py-4 md:px-12 text-lg mt-1 md:mt-0">
                  Member
                </p>
              </div>
            </div>
            <div className="border-2 border-[#363636] w-full border-t-0 p-1 ">
              <div className="md:flex justify-between p-2">
                <div className="md:p-2">
                  <h2 className="text-[#FFFFFF] text-lg">
                    Mr Ranjeet Kumar Tiberwal
                  </h2>
                  <p className="text-[#A9A27B] text-md">Independent Director</p>
                </div>
                <p className="text-[#FFFFFF] md:py-4 md:px-12 text-lg mt-1 md:mt-0">
                  Member
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* third section end */}
    </div>
  );
};

export default LeadershipTeam;
