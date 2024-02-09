import { useState } from "react";
import React from 'react'

function Card(props) {


  return (
    <div className="border-solid">
      <div className="relative h-[400px] w-[300px] rounded-md m-auto  border-gray-500 border-2">
        <img
          src={props.src}
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">
            {props.first || "Pimpalkar"}
          </h1>
          <p class="mt-2 text-sm text-gray-300">
            {props.work || "Work in Progresssssss............"}
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {props.BtnText || "Visit me"} →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card
