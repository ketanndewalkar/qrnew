import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

const Hero1 = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from(".hero1111 h1 p",{
      opacity:0,
      y:50,
      ease:"none",
      duration:0.4,
      stagger:0.3
    });
    tl.from(".hero-content",{
      y:50,
      duration:0.4,
      ease:"none",
      opacity:0
    },"Ani")
    tl.from(".hero11121",{
      x:"100%",
      duration:0.7,
      ease:"none",
      opacity:0,
    },"ANI")
    tl.from(".hero-content1 li",{
      y:50,
      duration:0.4,
      ease:"none",
      opacity:0,
      stagger:0.2
    })
    tl.from(".hero-btn",{
      scale:0.5,
      rotate:"90deg",
      duration:0.4,
      ease:"bounce",
      opacity:0,
      stagger:0.2
    })

  })
  return (
    <div className="w-dvw h-dvh pt-[8vw] hero1">
      <div className="size-full px-[10.2vw] hero11">
        <div className=" size-full flex hero111">
          <div className="w-[70%] h-full flex justify-center flex-col gap-[1.2vw] hero1111">
            <h1 className="text-[3.8vw] font-bold leading-16 text-gray-700 overflow-hidden hero11111">
              <p>Turn Every Walk.</p>
              <p>Into a Customer Touchpoint.</p>
            </h1>
            <p className="text-[#2D2D2D] w-[80%] mt-[4vw] text-[1.15vw] font-semibold hero-content hero11112">
              QRwalk connects your brand with real people in the real world —
              placing QR code banners in high-traffic spots that drive instant
              engagement and measurable growth.

            </p>
            <ul className="list-disc px-[3vw] text-[1.15vw] font-semibold hero-content1 marker:text-[#cb202d] hero11113">
                <li>Meet people where they move</li>
                <li>Turn footsteps into measurable action</li>
            </ul>
            <button className="font-semibold py-[0.8vw] px-[1.2vw] border-1 rounded-lg bg-[#cb202d] shadow-lg text-white mt-[2vw] w-fit h-fit hero-btn hero11114 hover:cursor-pointer" onClick={()=>navigate("/contact")}>Partner with Us</button>
          </div>
          <div className="w-[30%] h-full flex items-center justify-center p-[0.1vw] hero-video hero1112">
            <video autoPlay muted loop className="h-full hero11121 mix-blend-multiply">
              <source src="/landing1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
