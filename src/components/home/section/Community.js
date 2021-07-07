import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import DataBank from "../../DataBank";
import { Link, BrowserRouter as Router } from "react-router-dom";

export default function Community() {
    return (
        <div>
            <div className="flex w-full  py-16 bg-white text-black flex-col">
        <div className="flex w-full md:max-w-screen-xl md:mx-auto items-center items-center md:flex-row">
            
          <div className="images md:w-6/12 text-center">
            <LazyLoadImage
              src={DataBank.homepage.community.image}
              alt="Logo"
              className={`w-full mx-auto`}
              effect="blur"
            />
          </div>
          <div className="leftSection md:w-6/12">
            <h1 className="text-5xl font-bold pr-48 leading-tight">
              {DataBank.homepage.community.title}
            </h1>
            <p className="mt-8">{DataBank.homepage.community.desc}</p>
            <div className="cta flex flex-row mt-8 space-x-8">
              <Router>
                <Link to="#" className="bg-gradient-to-r font-bold text-white w-1/3 from-yellow-rasta to-green-rasta_cta text-center py-3 rounded-xl">
                  <button>Whitepaper</button>
                </Link>
                <Link to="#" className="border-2 font-bold border-green-rasta_cta text-green-rasta_cta py-3 rounded-xl w-1/3 text-center">
                  <button>Join The Community</button>
                </Link>
              </Router>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
