import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    name: "",
    message: ""
  })
  const sendEmail = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(formValues.message);
    window.location.href = `mailto:19asifani30@gmail.com?subject=${'Hire Asif!'}&body=${body}`;
  };

  return (
    <div id="hire-me" className="container m-auto mt-16">
      {/* heading */}
      <div
        // data-aos="fade-up"
        className="relative mb-5"
      >
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Hire Me
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
            <div data-aos="zoom-in">
              <h1 className="text-5xl font-bold sm:text-3xl">Hire Me!</h1>
              <h3 className="text-xl sm:text-lg">
                Innovative developer, transforming ideas into impact.
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">
            <button
              data-aos="zoom-in"
              className=" text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] "
            >
              <BsArrowRight className=" md:rotate-90" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <form
            data-aos="zoom-in"
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
            onSubmit={sendEmail}

            // action="mailto:xyz@gmail.com"
          >
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="e.g. youremail@email.com"
              name="email"
              required
              value={formValues.email}
              onChange={(e)=>setFormValues(prev=>({...prev, email: e.target.value}))}
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="e.g. your name"
              name="name"
              id='name'
              value={formValues.name}
              onChange={(e)=>setFormValues(prev=>({...prev, name: e.target.value}))}

            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              placeholder="Write your message"
              name="mesage"
              id="message"
              required
              value={formValues.message}
              onChange={(e)=>setFormValues(prev=>({...prev, message: e.target.value}))}

            />
            <button
              className="bg-yellow-500 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
              type="submit"
            >
              <span>Send</span>
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
