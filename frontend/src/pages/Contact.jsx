import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useAuth } from "../context/Context";

const Contact = () => {
    const {status , setstatus , setpopshow} = useAuth();
  const [loader, setloader] = useState(false);
  const [formdata, setformdata] = useState({
    first: "",
    middle: "",
    last: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    companyName: "",
    companyCategory: "",
    description: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const resetform = () =>
    setformdata({
      first: "",
      middle: "",
      last: "",
      email: "",
      phone: "",
      country: "",
      address: "",
      companyName: "",
      companyCategory: "",
      description: "",
      message: "",
    });
  const handleSubmit = async (e) => {
    console.log("clicked");
    e.preventDefault();
    if (
      !formdata.first.trim() ||
      !formdata.middle.trim() ||
      !formdata.last.trim() ||
      !formdata.email.trim() ||
      !formdata.phone.trim() ||
      !formdata.country.trim() ||
      !formdata.address.trim() ||
      !formdata.companyName.trim() ||
      !formdata.companyCategory.trim() ||
      !formdata.description.trim() ||
      !formdata.message.trim()
    ) {
      alert("Please fill all the fields");
      return;
    }
    try {
      setloader(true);
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/get-form-data`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formdata),
        }
      );
      setstatus(res.status);
      setloader(false);
      setpopshow(true);
      resetform();
    } catch (error) {
      console.error("Error:", error);
      setloader(false);
      setstatus(500);
      setpopshow(true);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-dvw h-fit pt-[8vw] relative page2 page1">
      <div className="size-full p-[2vw] page11 px-[10.2vw]">
        <h1 className="font-bold pl-[2vw] text-[2vw] mt-[1vw] text-red-600 page2111 page111">
          Contact Form
        </h1>
        <div className="w-full h-[2px] bg-gradient-to-r from-black to-white page112"></div>
        <div className=" flex flex-col items-start justify-center mt-[2vw]  px-[2vw] page1121">
          <div className="w-full h-fit flex items-center gap-10 page11211">
            <label htmlFor="first" className="text-[1.2rem] w-1/3 page112111">
              First Name :<br />
              <input
                type="text"
                id="first"
                name="first"
                placeholder="First Name"
                value={formdata.first}
                onChange={handleChange}
                className="px-3 py-2 w-full mt-3 focus:outline-0 rounded-md border-1 border-[#999ea3]"
              />
            </label>
            <label htmlFor="middle" className="text-[1.2rem] w-1/3 page112111">
              Middle Name :<br />
              <input
                type="text"
                id="middle"
                name="middle"
                value={formdata.middle}
                onChange={handleChange}
                placeholder="Middle Name"
                className="px-3 py-2 w-full mt-3 focus:outline-0 rounded-md border-1 border-[#999ea3]"
              />
            </label>
            <label htmlFor="last" className="text-[1.2rem] w-1/3 page112111">
              Last Name :<br />
              <input
                type="text"
                id="last"
                name="last"
                value={formdata.last}
                onChange={handleChange}
                placeholder="Last Name"
                className="px-3 py-2 w-full mt-3 focus:outline-0 rounded-md border-1 border-[#999ea3]"
              />
            </label>
          </div>

          <div className="w-full h-fit flex items-center gap-10 mt-[2vw] page11211 page11212">
            <label
              htmlFor="email"
              className="text-[1.2rem] w-1/3 page112111 page112121"
            >
              Email :<br />
              <input
                type="email"
                id="email"
                name="email"
                value={formdata.email}
                onChange={handleChange}
                placeholder="Email"
                className="px-3 py-2 w-full mt-3 focus:outline-0 rounded-md border-1 border-[#999ea3]"
              />
            </label>
            <label
              htmlFor="country"
              className="text-[1.2rem] w-1/3 page112111 page112122"
            >
              Country :<br />
              <select
                id="country"
                name="country"
                value={formdata.country}
                onChange={handleChange}
                className="px-3 py-2 w-full mt-3 focus:outline-0 rounded-md border-1 border-[#999ea3]"
              >
                <option value="" className="text-[#999ea3]">
                  Select a country
                </option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="Brazil">Brazil</option>
                <option value="South Africa">South Africa</option>
                <option value="Italy">Italy</option>
                <option value="Russia">Russia</option>
                <option value="Mexico">Mexico</option>
                <option value="Singapore">Singapore</option>
              </select>
            </label>
            <label
              htmlFor="phone"
              className="text-[1.2rem] w-1/3 page112111 page112123"
            >
              Phone No :<br />
              <input
                type="text"
                id="phone"
                name="phone"
                value={formdata.phone}
                onChange={handleChange}
                placeholder="Phone No"
                maxLength={20}
                className="px-3 py-2 w-full mt-3 focus:outline-0 rounded-md border-1 border-[#999ea3]"
              />
            </label>
          </div>

          <div className="w-full h-fit flex items-center gap-10 page11211 mt-[2vw]">
            <label htmlFor="first" className="text-[1.2rem] w-1/2 page112111">
              Company Name :<br />
              <input
                type="text"
                id="companyName"
                name="companyName"
                placeholder="Company Name"
                value={formdata.companyName}
                onChange={handleChange}
                className="px-3 py-2 w-full mt-3 focus:outline-0 rounded-md border-1 border-[#999ea3]"
              />
            </label>
            <label
              htmlFor="companyCategory"
              className="text-[1.2rem] w-1/2 page112111 page112122"
            >
              Company Category :<br />
              <select
                id="companyCategory"
                name="companyCategory"
                value={formdata.companyCategory}
                onChange={handleChange}
                className="px-3 py-2 w-full mt-3 focus:outline-0 rounded-md border-1 border-[#999ea3]"
              >
                <option value="" className="text-[#999ea3]">
                  Select a category
                </option>
                <option value="Technology">Technology</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Finance">Finance</option>
                <option value="Education">Education</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Retail">Retail</option>
                <option value="Transportation & Logistics">
                  Transportation & Logistics
                </option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Marketing & Advertising">
                  Marketing & Advertising
                </option>
                <option value="Hospitality">Hospitality</option>
                <option value="Media & Entertainment">
                  Media & Entertainment
                </option>
                <option value="Agriculture">Agriculture</option>
                <option value="Energy">Energy</option>
                <option value="Legal Services">Legal Services</option>
                <option value="Construction">Construction</option>
                <option value="Telecommunications">Telecommunications</option>
                <option value="Non-Profit / NGO">Non-Profit / NGO</option>
                <option value="Consulting">Consulting</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>

          <div className="w-full h-fit flex items-center gap-10 page11211 page11213 mt-[2vw]">
            <label
              htmlFor="address"
              className="text-[1.2rem] w-full page112131 page112111"
            >
              Company Address :<br />
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                value={formdata.address}
                onChange={handleChange}
                className="px-3 py-2 w-full mt-3 focus:outline-0 rounded-md border-1 border-[#999ea3]"
              />
            </label>
          </div>

          <div className="w-full h-fit flex items-center gap-10 page11211 page11213 mt-[2vw]">
            <label
              htmlFor="address"
              className="text-[1.2rem] w-full page112131 page112111"
            >
              Company Description :<br />
              <textarea
                type="text"
                id="description"
                name="description"
                placeholder="Company Description"
                value={formdata.description}
                onChange={handleChange}
                className="px-3 py-2 w-full mt-3 focus:outline-0 rounded-md border-1 border-[#999ea3] min-h-12"
              />
            </label>
          </div>

          <label htmlFor="message" className="text-[1.2rem] w-full mt-[2vw]">
            Message :<br />
            <textarea
              type="text"
              id="message"
              name="message"
              value={formdata.message}
              onChange={handleChange}
              placeholder="Message"
              className="px-3 py-2 w-full mt-3 focus:outline-0 rounded-md border-1 border-[#999ea3] min-h-60"
            />
          </label>
          <button
            className="px-6 py-3 mt-2 bg-red-600 hover:cursor-pointer rounded-md"
            onClick={handleSubmit}
          >
            {!loader ? (
              <b className="text-white font-bold text-[1.2rem]">Submit</b>
            ) : (
              <Loader />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
