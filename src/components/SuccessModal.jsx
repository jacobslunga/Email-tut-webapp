import React from "react";

function SuccessModal({ setIsOpen }) {
  return (
    <div
      className="w-screen h-screen overflow-hidden fixed z-50 flex items-center justify-center"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
      }}
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          setIsOpen(false);
        }
      }}
    >
      <div className="w-10/12 md:w-1/2 h-4/5 flex flex-col relative items-center justify-center bg-white rounded-md">
        <h3 className="text-blue-500 text-xl md:text-2xl lg:text-3xl text-center font-bold px-5">
          Awesome, you've signed up for the waiting list!
        </h3>
        <a
          className="text-blue-400 transition-all duration-100 hover:text-blue-900 font-medium mt-20"
          href="/waiting-list"
        >
          Check out the waiting list
        </a>
        <button
          style={{ position: "absolute", top: "80%" }}
          className="bg-red-400 rounded-full p-3 font-medium text-red-800"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
