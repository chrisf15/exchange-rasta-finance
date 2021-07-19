import React from "react";
import * as TiIcons from "react-icons/ti";
import { Link } from "react-router-dom";

export default function LetsConnect(props) {
  console.log(props);
  return (
    <div
      className="w-full py-64"
      style={{
        backgroundImage: "url(" + props.bg + ")",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-xl mx-auto bg-white text-black flex px-48 py-12 flex-row mt-32">
        <div className="rastaFinance flex flex-col flex-grow-1">
          <h2 className="text-2xl font-bold">{props.items.heading}</h2>
          <div className="list-content mt-12">
            {props.items.listContent.map((item, index) => {
              return (
                <div
                  className="flex flex-row item-list items-center"
                  key={index}
                >
                  <span className="icon text-green-rasta text-2xl">
                    {<TiIcons.TiTick />}
                  </span>
                  <span className="icon font-bold flex-grow-1">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lets-connect flex flex-col w-6/12">
          <h3 className="text-xl  border-l-4 border-green-rasta pl-8 font-bold">
            {props.items.subHeading}
          </h3>
          <div className="desc pl-8 mt-8">{props.items.textContent}</div>
          <div className="button flex flex-row pl-8 mt-8 space-x-8">
            <Link
              to={props.items.link.btn.joinNowLink}
              className="border-2 border-green-rasta px-8 py py-2 rounded-xl bg-gradient-to-r hover:border-white hover:text-white hover:from-green-rasta hover:to-yellow-rasta"
            >
              <button>Join Now</button>
            </Link>

            <Link
              to={props.items.link.btn.farmRastaLink}
              className="border-2 border-green-rasta px-8 py-2 rounded-xl bg-gradient-to-r hover:border-white hover:text-white hover:from-green-rasta hover:to-yellow-rasta"
            >
              <button>Farm Rasta</button>
            </Link>
          </div>
          <div className="social-media flex flex-row space-x-4 pl-8 mt-4">
            {props.items.link.social.map((item, index) => {
              return (
                <Link to={item.link} key={index}>
                  <div className="border-2 rounded-full border-gray-500 text-gray-500 text-xl p-2 bg-gradient-to-r hover:border-white hover:text-white hover:from-green-rasta hover:to-yellow-rasta">
                    {item.icon}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
