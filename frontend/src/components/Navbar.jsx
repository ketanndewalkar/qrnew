import React, { useRef, useState } from "react";
import { MdCall } from "react-icons/md";
import Hamburger from "hamburger-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  // Consistent animation config
  const defaultEase = "power3.out";
  const defaultDuration = 0.4;

  // Mount animations
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".nav1111", {
      y: -40,
      duration: defaultDuration,
      ease: defaultEase,
      opacity: 0,
    });
    tl.from(".nav1114", {
      y: -40,
      duration: defaultDuration,
      ease: defaultEase,
      opacity: 0,
    });
    tl.from(".nav11121 a", {
      y: -40,
      duration: defaultDuration,
      ease: defaultEase,
      opacity: 0,
      stagger: 0.1,
    });
    tl.from(".nav11131", {
      y: -40,
      duration: defaultDuration,
      ease: defaultEase,
      opacity: 0,
    });
  }, []);

  // Slide-in menu on hamburger toggle
  useGSAP(() => {
    gsap.to(menuRef.current, {
      x: isOpen ? "100%" : "0%",
      duration: 0.4,
      ease: defaultEase,
      opacity: isOpen ? 1 : 0.85,
    });
  }, [isOpen]);

  return (
    <div className="w-dvw h-[8vw] nav fixed top-0 z-100">
      <div className="w-dvw h-full relative">
        <nav className="w-full h-full py-[1vw] px-[10vw] nav1">
          <div className="size-full rounded-full bg-white px-[3vw] nav11 border border-gray-400 shadow-lg">
            <div className="size-full flex justify-between nav111 overflow-hidden">
              {/* Logo */}
              <div className="h-full flex items-center nav1111">
                <img
                  src="Logo.png"
                  alt="logo"
                  className="h-[35%] nav11111 logo cursor-pointer"
                  onClick={() => navigate("/")}
                />
              </div>

              {/* Menu */}
              <div className="h-full nav1112 opacity-100" ref={menuRef}>
                <ul className="flex h-full items-center gap-[4vw] text-[1.1vw] font-semibold nav11121">
                  {[
                    { label: "Home", to: "/" },
                    { label: "About Us", to: "/about" },
                    { label: "Contact", to: "/contact" },
                  ].map(({ label, to }) => (
                    <NavLink
                      key={to}
                      to={to}
                      className={({ isActive }) =>
                        `hover:text-[#cb202d] hover:cursor-pointer transform hover:scale-110 ${
                          isActive ? "text-[#cb202d]" : ""
                        }`
                      }
                      onClick={()=>setOpen(false)}
                    >
                      {label}
                    </NavLink>
                  ))}

                  {/* Contact Info */}
                  <div className="h-full flex items-center gap-[1vw] nav11131">
                    <div className="bg-[#cb202d] rounded-full p-[0.5vw]">
                      <MdCall className="text-[2.5vw] text-white" />
                    </div>
                    <div className="h-full flex flex-col items-start justify-center leading-5">
                      <p className="text-gray-500 text-[0.95vw] font-semibold">
                        Make A Call Anytime
                      </p>
                      <b className="text-[1.2vw]">+91 9545-722-987</b>
                    </div>
                  </div>
                </ul>
              </div>

              {/* Hamburger */}
              <div className="nav1114 h-full items-center hidden">
                <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  className="border-1"
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
