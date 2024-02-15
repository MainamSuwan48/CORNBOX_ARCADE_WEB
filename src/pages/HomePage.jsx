import React from "react";
import EVO from "../assets/EVO.jpg";
import LogoCornBox from "../components/ui/LogoCornbox";

function HomePage() {
  return (
    <div className="flex h-with_header items-center justify-center w-full">
      <img
        src={EVO}
        alt="EVO"
        className="w-full absolute -z-20 h-with_header"
      />
      <div className="flex h-with_header items-center justify-center w-full backdrop-blur-sm">
        <LogoCornBox size="big" />
      </div>
    </div>
  );
}

export default HomePage;
