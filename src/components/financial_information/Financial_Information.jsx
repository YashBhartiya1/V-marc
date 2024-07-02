import React from "react";
import "./Financial_Informtion.css";

const Financial_Information = () => {
  return (
    <div className="bg-black w-full h-[100vh] relative overflow-y-scroll overflow-x-hidden flex justify-center">
      <div
        id="earth_img"
        className="absolute w-[176vw] h-[61vh] md:h-[80vh] lg:h-[160vh] top-[-30%] lg:top-[-100%] right-[-51%] lg:right-[-60%] "
        style={{ transform: "rotate(-55deg)" }}
      >
        <img
          className="w-full h-full opacity-60"
          src="/img/earth.png"
          alt="error"
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
            <img
              className="w-[4rem] md:w-[7rem] lg:w-[9rem] xl:w-[11rem]"
              src="/img/invest1.png"
              alt="error"
            />
          </div>
        </div>
        {/* next div start */}
        <div
          id="buttons"
          className="text-white w-full absolute bottom-0 flex justify-between gap-2 text-xs md:text-sm lg:text-base xl:text-lg"
          style={{ fontFamily: "poppins" }}
        >
          <a
            href="/leadershipteam"
            className="bg-[#4456B0] p-2 rounded lg:w-[20%]"
          >
            Leadership Team
          </a>
          <a
            href="/businessdetail"
            className="bg-[#4B4D58] p-2 rounded lg:w-[20%]"
          >
            Details of Business
          </a>
          <a
            href="financial_information"
            className="bg-[#4B4D58] p-2 rounded lg:w-[20%]"
          >
            Financial Information
          </a>
          <button className="bg-[#4B4D58] p-2  rounded lg:w-[20%]">
            Shareholding Pattern
          </button>
        </div>
        {/* next div end */}
      </div>
      <div className="absolute bottom-[30%] md:bottom-[2%] border-b border-[#FFFFFF52] w-full"></div>

      {/* custom css section */}
      <div className="financial_container">
        <h1 className="financial_heading">FINANCIAL INFORMATION</h1>
        <div className="main_2024">
          <div className="main_2024_box_1">
            <p className="box_1_text_1">2023-2024</p>
          </div>
          <div className="main_2024_box_2">
            <p className="box_2_text_1">HY 1</p>
            <p className="box_2_text_2">Financial Results</p>
            <p className="box_2_text_3">Board Meeting</p>
          </div>
          <div className="main_2024_box_3">
            <p className="box_3_text_1">HY 2</p>
            <p className="box_3_text_2">Board Meeting</p>
          </div>
          <div className="main_2024_box_4"></div>
        </div>
        {/* 2023 */}
        <div className="main_2023">
          <div className="main_2023_box_1">
            <p className="box_1_text_1_2023">2022-2023</p>
          </div>
          <div className="main_2023_box_2">
            <p className="box_2_text_1_2023">HY 1</p>
            <p className="box_2_text_2_2023">Financial Results</p>
            <p className="box_2_text_3_2023">Board Meeting</p>
          </div>
          <div className="main_2023_box_3">
            <p className="box_3_text_1_2023">HY 2</p>
            <p className="box_3_text_2_2023">Financial Results</p>
            <p className="box_3_text_3_2023">Board Meeting</p>
          </div>
          <div className="main_2023_box_4">
            <p className="box_4_text_1_2023">Annual Report</p>
            <p className="box_4_text_2_2023">View</p>
          </div>
        </div>
        {/* 2022 */}
        <div className="main_2022">
          <div className="main_2022_box_1">
            <p className="box_1_text_1_2023">2021-2022</p>
          </div>
          <div className="main_2022_box_2">
            <p className="box_2_text_1_2022">HY 1</p>
            <p className="box_2_text_2_2022">Financial Results</p>
            <p className="box_2_text_3_2022">Board Meeting</p>
          </div>
          <div className="main_2022_box_3">
            <p className="box_3_text_1_2022">HY 2</p>
            <p className="box_3_text_2_2022">Financial Results</p>
            <p className="box_3_text_3_2022">Board Meeting</p>
          </div>
          <div className="main_2023_box_4">
            <p className="box_4_text_1_2022">Annual Report</p>
            <p className="box_4_text_2_2022">View</p>
          </div>
        </div>
        {/* 2021 */}
        <div className="main_2021">
          <div className="main_2021_box_1">
            <p className="box_1_text_1_2021">2020-2021</p>
          </div>
          <div className="main_2021_box_2">
            <p className="box_2_text_2_2021">Financial Results</p>
            <p className="box_2_text_3_2021">Board Meeting</p>
          </div>
          <div className="main_2021_box_3"></div>
          <div className="main_2021_box_4">
            <p className="box_4_text_1_2021">Annual Report</p>
            <p className="box_4_text_2_2021">View</p>
          </div>
        </div>
        {/* 2020 */}
        <div className="main_2020">
          <div className="main_2020_box_1">
            <p className="box_1_text_1_2020">2019-2020</p>
          </div>
          <div className="main_2020_box_2">
            <p className="box_2_text_1_2020">Financial Results</p>
          </div>
          <div className="main_2020_box_3"></div>
        </div>
        {/* 2019 */}
        <div className="main_2019">
          <div className="main_2019_box_1">
            <p className="box_1_text_1_2019">2018-2019</p>
          </div>
          <div className="main_2019_box_2">
            <p className="box_2_text_1_2019">Financial Results</p>
          </div>
        </div>
        {/* 2018 */}
        <div className="main_2018">
          <div className="main_2018_box_1">
            <p className="box_1_text_1_2018">2017-2018</p>
          </div>
          <div className="main_2018_box_2">
            <p className="box_2_text_1_2018">Financial Results</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial_Information;
