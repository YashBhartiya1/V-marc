import React from "react";
import "./aboutUs.css";
import Image from "next/image";
function AboutUs() {
  return (
    <div className="main_div">
      <div className="card_main aboutUs_block">
        <div className="text_card_main">
          <h1 className="text_card_main_h1">
            Premium & Durable Wires
            <br /> and cables
          </h1>
          <p className="text_card_main_p1">
            V-Marc is one of the global leader in providing reliable and <br />
            consistent quality of products, we enable our clients to achieve{" "}
            <br />
            more and outperform their competitors and stay ahead of the <br />
            innovation curve. The growth of the latter is the first stepping
            stone <br />
            towards the growth of the company and hence customer’s <br />
            satisfaction is its prime objective.
          </p>
          <p className="text_card_main_p2">
            V-Marc has earned the trust and reputation in India by winning the{" "}
            <br />
            customer’s confidence.{" "}
          </p>

          <div className="text_card_grop">
            <div className="excellence_card">
              <p className="text_card_red">10+</p>
              <p className="ventures_card_p1">years of delivering</p>
              <p className="ventures_card_p2">EXCELLENCE</p>
            </div>
            <div className="ventures_card">
              <p className="text_card_red">1k+</p>
              <p className="ventures_card_p1">up and running</p>
              <p className="ventures_card_p2">VENTURES</p>
            </div>
          </div>
        </div>
        <div className="img_card_main">
          <div className="img_div">
            <Image
              className="Frame2_img"
              src="/img/Frame2.png"
              alt="Frame2.png"
              width={800}
              height={800}
            />
          </div>
          <button className="Frame2_read_more_button">Read More</button>
        </div>
      </div>
      <div className="arrow_img_main">
        <Image src="/img/arrow.png" alt="error" width={800} height={800} />
      </div>
    </div>
  );
}

export default AboutUs;
