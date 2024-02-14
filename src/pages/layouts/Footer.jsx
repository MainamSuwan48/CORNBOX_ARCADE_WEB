import React from "react";
import LogoCornbox from "../../components/ui/LogoCornbox";

function Footer() {
  return (
    <div className="fixed bottom-0  mx-4 drop-shadow-lg backdrop-blur-sm flex justify-between items-center pr-16 py-2 border-t-2 min-w-full">
      <LogoCornbox scale="50" />
      <p>Copyright © Cornbox Arcade</p>
    </div>
  );
}

export default Footer;
