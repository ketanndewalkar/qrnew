import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Demo = () => {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(
      ".demo111 h1",
      {
        y: 20,
        duration: 0.5,
        opacity: 0,
        delay: 0.2,
        ease: "none",
        stagger: 0.2,
      },
      "first"
    );
    tl.from(".demo112 p", {
      y: 20,
      duration: 0.3,
      opacity: 0,
      delay: 0.2,
      ease: "none",
    });
    tl.fromTo(
      ".demo112 a",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        delay: 0.2,
        ease: "none",
      }
    );
    tl.from(
      ".demo121",
      {
        x: "50%",
        opacity: 0,
        ease: "none",
        duration: 0.8,
      },
      "first"
    );
  }, []);
  return (
    <div className="w-full h-fit px-[10.2vw] pt-[8vw] pb-[2vw] demo">
      <div className="w-full h-[calc(100dvh-10vw)] flex relative demo1">
        <div className="w-1/2 h-full py-[1vw]] flex flex-col justify-evenly demo11">
          <span className="demo111">
            <h1 className="text-[4.8vw] font-bold bg-gradient-to-b from-black to-black/50 bg-clip-text text-transparent">
              Insight-Driven.
            </h1>
            <h1 className="text-[4.5vw] font-bold bg-gradient-to-b from-black to-black/50 bg-clip-text text-transparent">
              QR Engagement.
            </h1>
            <h1 className="text-[4.5vw] font-bold bg-gradient-to-b from-black to-black/50 bg-clip-text text-transparent">
              DashBoard.
            </h1>
          </span>
          <span className="flex flex-col gap-[2vw] demo112">
            <p className="font-semibold text-gray-600 text-justify pr-[5vw] text-[1.2vw]">
              With QR Walk powerful dashboard, create and manage QR campaigns in
              real time. Track performance, understand audience behavior, and
              turn insights into action all in one place.
            </p>
            <a href="#demo2" className="border-1 border-gray-300 bg-[#ff5462] text-white font-bold w-fit py-[1vw] px-[2vw] rounded-2xl cursor-pointer">
              {" "}
              Demo Video
            </a>
          </span>
        </div>
        <div className=" w-full absolute top-0 h-full flex flex-col justify-center right-[-50%] demo12">
          <div className="demo121 w-full h-[98%] p-[1vw] border-1 border-gray-200 rounded-[1rem] flex items-center justify-center shadow-xl bg-gradient-to-br from-[#cb202d]/5 to-[#cb202d]/20 backdrop-blur-3xl">
            <div className="size-full rounded-[1rem] border-1 border-gray-200 p-[1vw] bg-gray-100 relative demo1211">
              <img
                src="/dashboard.png"
                className="object-cover object-center h-full rounded-[1rem]"
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="mt-[9vw] w-full text-[2vw] font-bold text-center demo-video-h1">Demo Video</h1>
      <div id="demo2" className="demo2 p-[2vw] w-full min-h-fit flex relative border mt-[1vw] rounded-2xl shadow-xl bg-gradient-to-br from-[#cb202d]/5 to-[#cb202d]/20 backdrop-blur-3xl border-gray-300">
        
        <div className="w-full  min-h-[calc(100dvh-15vw)] demo21">
          <video className="w-full h-full rounded-[1rem]" autoPlay loop muted>
            <source src="/demodashboardviddeo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Demo;
