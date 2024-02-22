import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function ForgotPassword() {
  return (
    <div className="w-screen h-screen text-white-100 bg-black-100 flex justify-center items-center flex-col z-50">

<Link to="/" className="flex items-center gap-2" aria-label="Cruip">
              <svg
                className="w-8 h-8"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    cx="21.152%"
                    cy="86.063%"
                    fx="21.152%"
                    fy="86.063%"
                    r="79.941%"
                    id="header-logo"
                  >
                    <stop stopColor="#575FFE" offset="0%" />
                    <stop stopColor="#3F49FE" offset="100%" />
                  </radialGradient>
                </defs>
                <rect
                  width="32"
                  height="32"
                  rx="16"
                  fill="url(#header-logo)"
                  fillRule="nonzero"
                />
              </svg>
              <span className="text-astra-100 font-bold">Ultimate ERP</span>
            </Link>

      <h3 className="mb-3 text-3xl font-bold">Forgot Password</h3>
      <p className="mb-5 text-gray-400">Enter email to reset password</p>
      <div className="w-full max-w-xs">
        <form className="bg-black-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" for="Email">
              Email
            </label>
            <input
              className="shadow bg-black-100 appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-astra-100"
              id="Email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-astra-100 hover:bg-astra-200 text-white font-bold py-2 px-4 rounded focus:ring-2 focus:ring-astra-100 focus:ring-opacity-70"
              type="button"
            >
              Send Email
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
         Making Business Easy
        </p>
      </div>
    </div>
  );
}
