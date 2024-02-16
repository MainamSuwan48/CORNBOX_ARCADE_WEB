import React from "react";
import LogoCornbox from "../../components/ui/LogoCornbox";

function Footer() {
  return (
    <div className="transition-all drop-shadow-lg backdrop-blur-sm flex justify-between items-center pr-16 py-2 border-t-2 min-w-full">
      <LogoCornbox size="tiny" />
      <p>Copyright © Cornbox Arcade</p>
    </div>
  );
}

export default Footer;
