import React from "react";
import Sidebar from "../global/Sidebar";
import DataBank from "../DataBank";
import { LazyLoadImage } from "react-lazy-load-image-component";
import * as FaIcons from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <header className="border-b-default border-white border-opacity-50">
          <div className="flex  items-center justify-between w-10/12 mx-auto">
          <Sidebar />
        <div className="logo flex-grow-1 text-center">
        <LazyLoadImage
              src={DataBank.navbar.logo}
              alt="Logo"
              className={`w-64 mx-auto`}
              effect="blur"
            />
        </div>
        <div className="right-cta items-center flex flex-row">
            <button className="text-white border-1 px-8 py-1 rounded-xl border-green-rasta">Connect</button>
            <button className="text-white px-6 text-2xl">
                <FaIcons.FaUserCircle/>
            </button>
        </div>
        </div>
      </header>
    </div>
  );
}
