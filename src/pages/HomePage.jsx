import React from "react";
import EVO from "../assets/EVO.jpg";
import LogoCornBox from "../components/ui/LogoCornbox";

function HomePage() {
  return (
    <div className="flex h-with_header items-center justify-center w-full">      
      <div className=" select-none flex h-with_header items-center justify-center w-full backdrop-blur-sm">
        <LogoCornBox size="big" />
      </div>
    </div>
  );
}

export default HomePage;
