import React, { useState, useEffect } from "react";
import axios from "axios";

function WaitingList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/get_emails").then((res) => {
      setData(() => res.data);
    });
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-blue-600 text-3xl font-semibold w-10/12 md:w-1/2 mb-5">
        Waiting List
      </h1>
      <div
        className={`w-10/12 md:w-1/2 relative flex-grow-1 h-4/5 shadow-lg border-2 border-gray-100 rounded-md flex flex-col items-center ${
          data && data.length > 0 ? "justify-start" : "justify-center"
        } z-30 overflow-auto`}
      >
        {data ? (
          <>
            {data.length > 0 ? (
              <>
                {data.reverse().map((email, index) => (
                  <div
                    key={email.email + String(index)}
                    className="w-full pl-5 mt-5 mb-5 relative"
                    style={{
                      borderBottomWidth: 0.3,
                      borderBottomColor: "rgba(0,0,0,0.2)",
                    }}
                  >
                    <h1 className="font-medium">{email.email}</h1>
                  </div>
                ))}
              </>
            ) : (
              <p className="text-blue-500 text-lg">No emails yet</p>
            )}
          </>
        ) : (
          <p className="text-blue-400">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default WaitingList;
