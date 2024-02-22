import React from "react";
import Header from "./Header";
import HeroImage from "../../../assets/heroimg.png";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <section className="relative bg-black-100">
      {/* Illustration behind hero content */}
      <Header />
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
      
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="flex flex-col text-5xl text-white-100 md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Finance made easy with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-astra-100 to-astra-200">
                Ultimate ERP
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-300 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Managing your business based expense is easy with our ERP solution. <br/>
                Scale your business
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <Link
                    className="btn text-white-100 p-3 bg-astra-100 hover:bg-astra-200 rounded-md w-full mb-4 sm:w-auto sm:mb-0"
                    to="/signup"
                  >
                    Join us
                  </Link>
                </div>
                <div>
                  <a
                    className="btn text-white-100 p-3 bg-black-200 hover:bg-black-300 rounded-md w-full sm:w-auto sm:ml-4"
                    href="/signup"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center">
                <img
                  className="mx-auto"
                  src={HeroImage}
                  width="768"
                  height="432"
                  alt="Hero"
                />
                <svg
                  className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto"
                  width="768"
                  height="432"
                  viewBox="0 0 768 432"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g fill="none" fillRule="evenodd">
                    <circle
                      fillOpacity=".04"
                      fill="url(#hero-ill-a)"
                      cx="384"
                      cy="216"
                      r="128"
                    />
                    <circle
                      fillOpacity=".16"
                      fill="url(#hero-ill-b)"
                      cx="384"
                      cy="216"
                      r="96"
                    />
                    <g fillRule="nonzero">
                      <use fill="#000" xlinkHref="#hero-ill-d" />
                      <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
