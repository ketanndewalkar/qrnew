import React from "react";

const Hero3 = () => {
  return (
    <div className="w-full h-[70vh] hero3">
      <div className="w-full h-full flex items-center justify-center px-[10.2vw] hero31">
        <div className="size-full hero311">
          <ul className="w-full h-full flex items-center justify-between gap-[2vw] hero3111">
            <li className="w-1/4 h-[55%] border-1 rounded-lg border-gray-300 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-105">
                <div className="w-full h-[70%] flex items-center justify-center">
                    <img
                        src="chat.png"
                        className="object-center object-cover mix-blend-multiply"
                        alt="Landing Logo"
                    />
                </div>
                <div className="w-full h-[30%] flex items-center justify-center">
                    <h1 className="text-[1.2vw] font-semibold text-center">
                        Engage with Customers
                    </h1>
                </div>
            </li>
            <li className="w-1/4 h-[55%] border-1 rounded-lg border-gray-300 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-105">
                <div className="w-full h-[70%] flex items-center justify-center">
                    <img
                        src="pc.png"
                        className="object-center object-cover mix-blend-multiply"
                        alt="Landing Logo"
                    />
                </div>
                <div className="w-full h-[30%] flex items-center justify-center">
                    <h1 className="text-[1.2vw] font-semibold text-center">
                        Boost Your Brand
                    </h1>
                </div>
            </li>
            <li className="w-1/4 h-[55%] border-1 rounded-lg border-gray-300 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-105">
                <div className="w-full h-[70%] flex items-center justify-center">
                    <img
                        src="delivery.png"
                        className="object-center object-cover mix-blend-multiply"
                        alt="Landing Logo"
                    />
                </div>
                <div className="w-full h-[30%] flex items-center justify-center">
                    <h1 className="text-[1.2vw] font-semibold text-center">
                        Drive Sales and Conversions
                    </h1>
                </div>
            </li>
            <li className="w-1/4 h-[55%] border-1 rounded-lg border-gray-300 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-105">
                <div className="w-full h-[70%] flex items-center justify-center">
                    <img
                        src="ecomerce.png"
                        className="object-center object-cover mix-blend-multiply"
                        alt="Landing Logo"
                    />
                </div>
                <div className="w-full h-[30%] flex items-center justify-center">
                    <h1 className="text-[1.2vw] font-semibold text-center">
                        Enhance Customer Experience
                    </h1>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
