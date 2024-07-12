import React from "react";
// import styles from "./hero.module.css"
import "./Home.css";
import Image from "next/image";
import Home from "@/app/page";
function Hero() {
  return (
    <div className={"main"}>
      <div className={"container_box"}>
        <div className={"text_box"} >
          <p>Experience Excellence with Us</p>
          <h1 className={"hero_text"}>
            {" "}
            Connecting & <br /> Enlightening Lives
          </h1>

          <div className={"button_main"}>
            <button className={"button1"}> Our Services</button>
            <button className={"button2"}>
              <Image src="/img/video.svg" alt="error" width={20} height={20}/>
              <p>Watch Video </p>{" "}
            </button>
          </div>
        </div>
      </div>
      <div className={"earth_image_main"}>
        <Image className={"earth_image"} src="/img/earth.png" alt="error" width={800} height={800}/>
      </div>
    </div>
  );
}

export default Hero;
