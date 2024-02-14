import React from "react";
import LogoCornbox from "../../components/ui/LogoCornbox";

function Footer() {
  return (
    <div className="-mb-20 bg-base-200 mx-4 drop-shadow-lg backdrop-blur-sm flex justify-between items-center pr-16 py-2 border-t-2  my-5">
      <LogoCornbox scale="50" />
      <p>Copyright © Cornbox Arcade</p>
    </div>
  );
}

export default Footer;
