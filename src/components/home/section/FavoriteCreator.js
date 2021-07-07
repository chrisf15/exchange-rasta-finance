import React from "react";
import DataBank from "../../DataBank";
import { Link, BrowserRouter as Router } from "react-router-dom";

import BgImage from "../../../assets/favCreator-bg.jpg";

export default function FavoriteCreator() {
  return (
    <div>
      <div
        className="flex w-full text-black flex-col bg-blend-overlay bg-black bg-opacity-50 text-white py-16"
        style={{
          backgroundImage: "url(" + BgImage + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex w-full md:max-w-screen-xl md:mx-auto items-center items-center md:flex-row text-center items-center h-64">
          <div className="leftSection w-full ">
            <h2 className="text-5xl font-bold leading-tight">
              {DataBank.homepage.favCreator.title}
            </h2>
            <div className="cta flex flex-row mt-8 space-x-8 items-center text-center">
              <Router>
                <Link
                  to="#"
                  className="bg-gradient-to-r font-bold text-white mx-auto from-yellow-rasta to-green-rasta_cta text-center py-3 px-8 rounded-xl"
                >
                  <button>Go To Launch Pad</button>
                </Link>
              </Router>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r text-white from-red-rasta to-yellow-rasta py-8">
        <div className="flex flex-row w-10/12 mx-auto items-center">
            <div className="text w-8/12">
                <span className="font-bold block">REQUEST A LAUNCH:</span>
                <span className="block">Sign up to join the community as an artist, and receive direct financial benefit from your fan-base and the entire RastaCommunity.</span>
            </div>
            <div className="text w-4/12 text-right" >
            <Router>
                <Link
                  to="#"
                  className="bg-red-rasta font-bold text-white mx-auto text-center py-4 px-8 rounded-xl"
                >
                  <button>SIGN IN AS AN ARTIST</button>
                </Link>
              </Router>
            </div>
        </div>
      </div>
    </div>
  );
}
