import React from "react";
import logo from "../assets/images/company_logo.png";
import { navTabs } from "../constants";

function Navbar() {
  console.log(navTabs);
  return (
    <div className="flex flex-col justify-between bg-[#1E2640] w-[224px] text-white py-[16px] px-[8px]">
      <div className="flex justify-between items-center mb-[24px] px-[8px]">
        <img className="rounded-[4px]" src={logo} alt="Logo" width={40} />
        <div className="w-[108px]">
          <p className="text-[15px] font-[500] mb-[4px]">Nishyan</p>
          <p className="text-[13px] opacity-80 cursor-pointer underline underline-offset-2">
            Visit store
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-[20px] h-[20px] cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div className="h-[1314px] mb-[16px]">
        <ul>
          {navTabs.map((tab) => (
            <li>
              <a
                href="#"
                className={`flex items-center py-[8px] px-[16px] text-[14px] font-[500] ${
                  !tab.active ? "opacity-80" : "bg-[#FFFFFF1A] rounded-[4px]"
                }`}
                aria-current="page"
              >
                <img
                  className={`mr-[12px] h-[20px] w-[20px] ${
                    tab.active ? "text-white" : ""
                  }`}
                  src={tab.logo}
                ></img>
                {tab.name}
              </a>
            </li>
          ))}
          {/* <li>
            <a
              href="#"
              className="flex items-center bg-[#FFFFFF1A] py-[8px] px-[16px] text-[14px] font-[500] rounded-[4px]"
              aria-current="page"
            >
              <svg
                className="w-[20px] h-[20px] me-2 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              Profile
            </a>
          </li> */}
        </ul>
      </div>
      <div className="flex items-center bg-[#353C53] py-[6px] px-[12px] rounded-[4px]">
        <div className="bg-[#FFFFFF1A] h-[36px] w-[36px] rounded-[4px] p-[6px] mr-[12px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.0002 1.79727C2.42343 1.79727 1.8002 2.35527 1.8002 3.24727V16.7473C1.8002 17.6393 2.42343 18.1973 3.0002 18.1973H21.0002C21.577 18.1973 22.2002 17.6393 22.2002 16.7473V13.8473H17.0003C14.874 13.8473 13.1503 12.1236 13.1503 9.99727C13.1503 7.87097 14.874 6.14727 17.0003 6.14727H22.2002V3.24727C22.2002 2.35527 21.577 1.79727 21.0002 1.79727H3.0002ZM23.8002 6.14727V3.24727C23.8002 1.65398 22.6326 0.197266 21.0002 0.197266H3.0002C1.36782 0.197266 0.200195 1.65398 0.200195 3.24727V16.7473C0.200195 18.3405 1.36782 19.7973 3.0002 19.7973H21.0002C22.6326 19.7973 23.8002 18.3405 23.8002 16.7473V13.8473H23.8503V6.14727H23.8002ZM16.0002 9.94727C16.0002 9.47783 16.3808 9.09727 16.8502 9.09727H18.1502C18.6197 9.09727 19.0002 9.47783 19.0002 9.94727C19.0002 10.4167 18.6197 10.7973 18.1502 10.7973H16.8502C16.3808 10.7973 16.0002 10.4167 16.0002 9.94727ZM14.8503 9.99727C14.8503 8.80986 15.8129 7.84727 17.0003 7.84727H22.1503V12.1473H17.0003C15.8129 12.1473 14.8503 11.1847 14.8503 9.99727Z"
              fill="white"
            />
          </svg>
        </div>
        <div>
          <p className="text-[13px] opacity-80">Available credits</p>
          <p className="font-[500]">222.10</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
