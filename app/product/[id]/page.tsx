"use client";
import React from "react";
// import LandingPage from "./prelaunch/LandingPage";
// import Background from "../components/mycomponents/Background";
import ProcuctDetails from "../productdetail/ProcuctDetails";

export default function page({ params }:any) {
  console.log('first page', params)
  return (
    <div className=" ">
      <ProcuctDetails />
      {/* <LandingPage />
      <Background /> */}
    </div>
  );
}
