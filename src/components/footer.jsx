import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#cde8da] font-sans">
      {/* Newsletter Section */}
      <div className="relative flex flex-col items-center pt-16 pb-14 px-4 overflow-hidden">
        {/* Red Arrow Decorations */}
        <div className="flex items-end gap-1 mb-3">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 10 C30 10, 10 20, 15 50"
              stroke="#f87171"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M10 44 L15 52 L22 46"
              stroke="#f87171"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <svg
            width="50"
            height="60"
            viewBox="0 0 50 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35 8 C20 10, 5 22, 12 52"
              stroke="#f87171"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M7 46 L12 54 L19 48"
              stroke="#f87171"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1
          className="text-[64px] font-black text-center text-gray-900 leading-[1.1] mb-5"
          style={{ fontFamily: "'Nunito', 'Poppins', sans-serif", letterSpacing: "-1px" }}
        >
          Subscribe to
          <br />
          our newsletter
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-base text-center mb-8 tracking-wide">
          To make your stay special and even more memorable
        </p>

        {/* Subscribe Button */}
        <button className="bg-black text-white text-sm font-bold px-10 py-3.5 rounded-full hover:bg-gray-800 transition-colors duration-200">
          Subscribe Now
        </button>

        {/* Purple Decorative Shape */}
        <div
          className="absolute right-14 top-16 w-[90px] h-[130px] bg-[#7c3aed]"
          style={{
            borderRadius: "0 0 0 100%",
            transform: "rotate(10deg)",
          }}
        />
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mx-10" />

      {/* Footer Links Grid */}
      <div className="grid grid-cols-4 gap-6 px-16 py-14">
        {/* Company */}
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-5">Company</h3>
          <ul className="space-y-3">
            {["Home", "Studio", "Service", "Blog"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Terms & Policies */}
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-5">
            Terms &amp; Policies
          </h3>
          <ul className="space-y-3">
            {["Privacy Policy", "Terms & Conditions", "Explore", "Accesibility"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-5">Follow Us</h3>
          <ul className="space-y-3">
            {["Instagram", "LinkedIn", "Youtube", "Twitter"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-5">
            Terms &amp; Policies
          </h3>
          <div className="space-y-3">
            <p className="text-gray-600 text-sm leading-relaxed">
              1498w Fluton ste, STE
              <br />
              2D Chicgo, IL 63867.
            </p>
            <p className="text-gray-600 text-sm">(123) 456789000</p>
            <p className="text-gray-600 text-sm">info@elementum.com</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center pb-8 pt-2">
        <p className="text-gray-500 text-sm">
          ©2023 Elementum. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;