import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiSend } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import SuccessModal from "../components/SuccessModal";

function Home() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");

  const [isFocus, setIsFocus] = useState(false);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5001/api/get_emails").then((res) => {
      console.log(res);
      setData((prev) => [...prev, res]);
    });
  }, []);

  const submit_email = async () => {
    axios
      .post("http://localhost:5001/api/submit_email", { email })
      .then((res) => {
        console.log("It worked with data: ", res);
        setShowSuccessModal(true);
      })
      .catch((e) => console.log("Error: ", e));
  };

  return (
    <form
      className="w-screen h-screen flex flex-col items-center justify-evenly"
      onSubmit={async (e) => {
        e.preventDefault();
        await submit_email();
      }}
    >
      <div
        className="w-screen bg-blue-400 absolute top-0"
        style={{ height: "2vh" }}
      />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        Sign up for the waiting list
      </h1>
      <div
        className={`rounded-full p-2 outline-none w-3/4 md:w-2/3 lg:w-1/3 flex flex-row items-start justify-between border-gray-200 pr-5 transition-all duration-100 ${
          isFocus ? "shadow-lg border-transparent" : "shadow-none"
        }`}
        style={{ borderWidth: 1 }}
      >
        <HiOutlineMail color="#000" size={25} />
        <input
          placeholder="Email goes here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline-none w-full ml-5 bg-transparent"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        <button
          className={`${
            email.includes("@")
              ? "text-black cursor-pointer"
              : "text-gray-500 cursor-not-allowed"
          }`}
          disabled={email.includes("@") ? false : true}
          type="submit"
        >
          <FiSend size={25} />
        </button>
      </div>
      <a href="/waiting-list" className="text-blue-500">
        Check waiting list
      </a>
      {showSuccessModal && <SuccessModal setIsOpen={setShowSuccessModal} />}
    </form>
  );
}

export default Home;
