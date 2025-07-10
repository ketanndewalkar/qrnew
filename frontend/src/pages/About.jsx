import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
const About = () => {
  const { pathname } = useLocation();
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(".img", {
      y: -15, // move up by 15px
      duration: 1, // how fast it moves
      repeat: -1, // infinite repeat
      yoyo: true, // reverse back to original
      ease: "power5.inOut", // smooth easing
      stagger: 0.2,
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-dvw h-fit pt-[8vw] relative about">
      <div className="size-full py-[3vw] px-[10.2vw] relative z-50 about1">
        <div className=" size-full flex flex-col about11 justify-center gap-[6vw]">
          <h1 className="w-full text-center text-[5vw] font-bold text-white about111">
            About Us
          </h1>
          <div className="h-fit about112 p-[2vw] flex gap-[2vw] items-center justify-evenly about112">
            <div className="relative w-[20vw] h-[20vw] border-3 border-gray-200 rounded-lg bg-gray-100 overflow-hidden group about1121">
              {/* Image */}
              <img
                src="aradhya.png"
                alt="profile"
                className="w-full h-full object-cover overflow-hidden"
              />

              {/* Dropup Info - Hidden by default, shows on hover */}
              <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-sm text-white px-[2vw] py-[0.7vw] rounded-t-lg transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                <h3 className="text-[1.5vw] font-bold w-full text-center">
                  Aradhya Dike
                </h3>
                <p className="text-[0.8vw] w-full text-center">CEO</p>
              </div>
            </div>
            <div className="relative w-[20vw] h-[20vw] border-3 border-gray-200 rounded-lg bg-gray-100 overflow-hidden group about1121">
              {/* Image */}
              <img
                src="tejas.png"
                alt="profile"
                className="w-full h-full object-cover overflow-hidden"
              />

              {/* Dropup Info - Hidden by default, shows on hover */}
              <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-t-lg transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                <h3 className="text-[1.5vw] font-bold w-full text-center">
                  Tejas
                </h3>
                <p className="text-[0.8vw] w-full text-center">Sample</p>
              </div>
            </div>
            <div className="relative w-[20vw] h-[20vw] border-3 border-gray-200 rounded-lg bg-gray-100 overflow-hidden group about1121">
              {/* Image */}
              <img
                src="Ketan.png"
                alt="Ketan"
                className="w-full h-full object-cover overflow-hidden"
              />

              {/* Dropup Info - Hidden by default, shows on hover */}
              <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-t-lg transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                <h3 className="text-[1.5vw] font-bold w-full text-center">
                  Ketan Dewalkar
                </h3>
                <p className="text-[0.8vw] w-full text-center">
                  Chief Technical Officer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[calc(100vh-15vw)] flex p-[5vw] about2 margin-top">
          <div className="w-1/2 h-full about21">
            <div className="size-full flex flex-col items-center justify-center gap-[2vw] about211">
              <h1 className="text-[2.5vw] w-full text-left">Our Vision</h1>
              <span className="text-[1.2vw] text-gray-700 flex flex-col items-center justify-center w-full gap-[0.8vw]">
                <p className="w-full text-justify">
                  At <strong>QRWALK</strong>, we believe everyday spaces hold
                  powerful potential. Walls, poles, and corners that people pass
                  without notice can become meaningful touchpoints between
                  brands and people. Our vision is to turn traditional banners
                  into interactive, QR-powered experiences that make these
                  moments count.
                </p>

                <p className="w-full text-justify">
                  We aim to help local businesses and startups connect with
                  customers instantly, without the high cost of digital ads. By
                  placing smart, scannable banners in high-traffic areas like
                  markets, campuses, and bus stops, we make it easy for brands
                  to spark engagement, drive action, and gather insights in real
                  time. We’re building a future where advertising feels like a
                  conversation, not a distraction.{" "}
                  <strong>It all starts with a scan.</strong>
                </p>
              </span>
            </div>
          </div>
          <div className="w-1/2 h-full flex items-center justify-start p-[3vw] about22">
            {/* <div className="size-[90%] border-1"> */}
            <img
              src="ourvision.png"
              className=" object-center object-cover img rounded-2xl sizee-full"
              ref={imgRef}
            />
            {/* </div> */}
          </div>
        </div>
        <div className="w-full h-[calc(100vh-15vw)] flex p-[5vw] about3">
          <div className="w-1/2 h-full flex items-center justify-center p-[3vw] about31">
            {/* <div className="size-[90%] border-1"> */}
            <img
              src="whoweare.png"
              className=" object-center object-cover img size-full"
              ref={imgRef}
            />
            {/* </div> */}
          </div>
          <div className="w-1/2 h-full about31">
            <div className="size-full flex flex-col items-center justify-center gap-[1.5vw] about311">
              <h1 className="text-[2.5vw] w-full text-left">Who We Are</h1>
              <span className="text-[1.2vw] text-gray-700 flex flex-col items-center justify-center w-full gap-[0.8vw]">
                <p className="w-full text-justify">
                  <strong>QRWALK</strong> is an innovative offline advertising
                  platform that combines traditional banners with QR technology.
                  We help local businesses and startups turn everyday public
                  spaces into interactive brand touchpoints using smart,
                  scannable banners placed in high-traffic areas.
                </p>

                <p className="w-full text-justify">
                  Our goal is to make advertising more accessible, actionable,
                  and measurable. Whether on a campus, street corner, or bus
                  stop, QRWALK connects brands with people on the move, turning
                  simple glances into real-time engagement and lasting
                  impressions.
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-[calc(100vh-15vw)] flex p-[5vw] about2">
          <div className="w-1/2 h-full about21">
            <div className="size-full flex flex-col items-center justify-center gap-[1.5vw] about211">
              <h1 className="text-[2.5vw] w-full text-left">Our Mission</h1>
              <span className="text-[1.2vw] text-gray-700 flex flex-col items-center justify-center w-full gap-[0.8vw]">
                <p className="w-full text-justify">
                  Our mission at <strong>QRWALK</strong> is to redefine offline
                  advertising by making it smarter, more interactive, and
                  accessible to everyone. We aim to help brands of all sizes
                  connect with people in real-world environments using
                  affordable, QR-enabled banners.
                </p>

                <p className="w-full text-justify">
                  By placing scannable banners in high-footfall areas, we
                  empower businesses to spark instant engagement, track
                  real-time insights, and build stronger customer relationships
                  — all while turning everyday spaces into meaningful marketing
                  opportunities.
                </p>
              </span>
            </div>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center p-[3vw] about22">
            {/* <div className="size-[90%] border-1"> */}
            <img
              src="ourmission.jpg"
              className=" object-center object-cover img size-full"
              ref={imgRef}
            />
            {/* </div> */}
          </div>
        </div>
        <div className="w-full h-[calc(100vh-15vw)] flex p-[5vw] about3">
          <div className="w-1/2 h-full flex items-center justify-center p-[3vw] about31">
            {/* <div className="size-[90%] border-1"> */}
            <img
              src="ourstory.png"
              className=" object-center object-cover img size-full"
              ref={imgRef}
            />
            {/* </div> */}
          </div>
          <div className="w-1/2 h-full about31">
            <div className="size-full flex flex-col items-center justify-center gap-[1.5vw] about311">
              <h1 className="text-[2.5vw] w-full text-left">Our Story</h1>
              <span className="text-[1.2vw] text-gray-700 flex flex-col items-center justify-center w-full gap-[0.8vw]">
                <p className="w-full text-justify">
                  <strong>QRWALK</strong> was born from a simple yet powerful
                  insight. In an age dominated by digital noise, the streets
                  still speak. People notice what’s around them — at bus stops,
                  college gates, market walls — and in those brief moments, they
                  discover brands. We saw an untapped opportunity in this
                  real-world attention and decided to turn it into something
                  meaningful.
                </p>

                <p className="w-full text-justify">
                  That’s how QRWALK came to life — a platform that bridges
                  offline visibility with online measurability. By combining
                  bold, physical banners with smart QR codes, we transform
                  everyday spaces into gateways for digital engagement. Our goal
                  is more than advertising. It’s about creating visibility,
                  sparking action, and delivering real impact for modern
                  businesses.
                </p>
              </span>
            </div>
          </div>
        </div>

        {/* <div className="mt-[5vw] about12">
          <h3 className="text-[2vw] font-bold">Who Are We ? </h3>
          <p className="text-[1.2vw] mt-[0.2vw] font-semibold">
            QRwalk is a groundbreaking offline advertising platform that merges
            the familiarity of traditional banners with the innovation of QR
            technology. Our mission is to transform everyday public spaces into
            powerful brand interaction zones by placing smart, scannable banners
            in high-footfall areas. We empower local businesses and startups to
            boost their visibility, drive instant customer actions, and gain
            real-time insights  all without the high cost of digital ads. Every
            QRwalk banner becomes a dynamic and measurable touchpoint, allowing
            your brand to connect directly with people on the move. Whether it’s
            a college campus, market street, or bus stop, QRwalk turns casual
            glances into customer journeys bridging the gap between offline
            presence and online engagement.
          </p>
          <h3 className="text-[2vw] mt-[1.5vw] font-bold">Our Story :</h3>
          <p className="text-[1.2vw] mt-[0.2vw] font-semibold">
            QRwalk was born from a powerful insight in an age dominated by
            digital noise, the streets still speak.People notice what's around
            them. They pause at bus stops, walk past college gates, glance at
            market walls and in those moments, they discover brands. We saw an
            untapped opportunity in this real-world attention. So, we created
            QRwalk: a platform that seamlessly bridges the offline world’s
            visibility with the online world’s measurability. By combining bold
            physical banners with smart QR codes, we turn everyday spaces into
            gateways for digital engagement driving traffic, conversions, and
            insights for modern businesses. It’s not just advertising  it’s
            visibility, action, and impact.
          </p>
          <h3 className="text-[2vw] mt-[1.5vw] font-bold">Our Mission :</h3>
          <p className="text-[1.2vw] mt-[0.2vw] font-semibold">
            To empower businesses of all sizes with smart, impactful, and
            measurable offline advertising combining the simplicity of QR
            codes with the power of real-world visibility to deliver real return
            on investment. At QRwalk, we make every street corner an
            opportunity, every banner a bridge, and every scan a step toward
            growth.
          </p>
          <h3 className="text-[2vw] mt-[1.5vw] font-bold">Our Vision :</h3>
          <p className="text-[1.2vw] mt-[0.2vw] font-semibold">
            We envision a future where every wall, pole, and footpath becomes a launchpad for growth seamlessly connecting curious passersby to businesses through instant, meaningful interactions. With QRwalk, the physical world becomes your brand’s most powerful digital gateway.
          </p>
        </div> */}
      </div>
      <img
        src="svg1.png"
        className="h-[80vh] absolute top-0 left-0 obect-center object-cover z-10"
      />
    </div>
  );
};

export default About;
