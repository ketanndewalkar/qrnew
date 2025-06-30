import React from "react";

const Hero2 = () => {
  return (
    <div className="w-dvw h-[calc(100vh-8vw)] hero2 relative">
      <div className=" size-full px-[10.2vw] py-[1vw] hero21">
        <div className="size-full flex hero211">
          <div className="w-1/2 h-full p-[5vw] hero2111">
            <div className="border-5 size-full relative rounded-lg z-49 flex items-center bg-gray-200 hero21111 ">
              <img
                src="new1.png"
                className="object-center object-cover size-full mix-blend-multiply"
              />
              <div className="absolute top-[-5.5vw] left-[-5vw] w-[10vw] h-[11vw] rounded-lg z-50 bg-white border-5 border-white hero211111">
                <video
                  autoPlay
                  loop
                  muted
                  className="h-full w-full border-5 border-black rounded-lg"
                >
                  <source src="landing1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute bottom-[-5.5vw] right-[-5vw] w-[10vw] h-[11vw] rounded-lg z-50 bg-white border-5 border-white hero211112">
                <video
                  autoPlay
                  loop
                  muted
                  className="h-full w-full border-5 border-black rounded-lg"
                >
                  <source src="QrCode.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full hero2112 p-[1.5vw]">
            <section
              id="how-it-works"
              class="how-it-works hero21121 size-full flex justify-start flex-col"
            >
              <h2 className="hero211211 text-[2.5vw] font-bold">
                How QRwalk Works:
              </h2>
              <ol className="flex flex-col gap-[2vw] h-full justify-evenly w-full hero211212">
                <li className="p-[1vw] rounded-lg bg-gray-100">
                  <h3 className="text-[1.5vw] font-semibold">
                    1. We Find the Perfect Location
                  </h3>
                  <p className="text-[1.1vw] pl-[1.4vw]">
                    Our team targets busy footpaths, bus stops, colleges, and
                    local hotspots where your customers already spend time.
                  </p>
                </li>
                <li className=" p-[1vw] rounded-lg bg-gray-100">
                  <h3 className="text-[1.5vw] font-semibold">
                    2. Your Customers Scan QR Codes
                  </h3>
                  <p className="text-[1.1vw] pl-[1.4vw]">
                    Each banner displays multiple QR codes that direct users
                    instantly to your website, app, or offers.
                  </p>
                </li>
                <li className="p-[1vw] rounded-lg bg-gray-100">
                  <h3 className="text-[1.5vw] font-semibold">
                    3. Track & Analyze Your Impact
                  </h3>
                  <p className="text-[1.1vw] pl-[1.4vw]">
                    Access a real-time dashboard to see who scanned your codes,
                    where, and when — helping you optimize campaigns and ROI.
                  </p>
                </li>
              </ol>
            </section>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero2;
