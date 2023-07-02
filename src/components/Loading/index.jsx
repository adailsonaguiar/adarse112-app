import React from "react";

export const Loading = () => {
  return (
    <div className="fixed top-40 bottom-0 left-0 right-0">
      <div className="flex items-center justify-center bg-black/50 w-full h-full">
        <div className="w-52">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 100 100"
          >
            <circle cx={6} cy={50} r={6} fill="#fff">
              <animate
                attributeName="opacity"
                begin={0.1}
                dur="1s"
                repeatCount="indefinite"
                values="0;1;0"
              />
            </circle>
            <circle cx={26} cy={50} r={6} fill="#fff">
              <animate
                attributeName="opacity"
                begin={0.2}
                dur="1s"
                repeatCount="indefinite"
                values="0;1;0"
              />
            </circle>
            <circle cx={46} cy={50} r={6} fill="#fff">
              <animate
                attributeName="opacity"
                begin={0.3}
                dur="1s"
                repeatCount="indefinite"
                values="0;1;0"
              />
            </circle>
          </svg>
        </div>
      </div>
    </div>
  );
};
