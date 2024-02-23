import React from "react";
import EVO from "../assets/EVO.jpg";
import LogoCornBox from "../components/ui/LogoCornbox";
import ShoppingCart from "../features/products/components/ShoppingCart";

function HomePage() {
  return (
    <>
      <div
        className="flex h-screen items-center justify-center w-full"
        style={{
          backgroundImage: `url(${EVO})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" select-none flex h-with_header items-center justify-center w-full backdrop-blur-sm">
          <LogoCornBox size="big" />
        </div>
      </div>
      <div
        className="backdrop-blur-lg flex items-center justify-center w-full h-screen bg-base-300"
        style={{ position: "relative", width: "100vw", height: "80vh" }}
      >
        <video
          className="-z-50"
          autoPlay
          loop
          muted
          style={{
            opacity: "0.5",
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="https://res.cloudinary.com/dhm6pitfd/video/upload/v1708670229/Street_Fighter_6_-_Your_Story_Trailer_kvn3ki.webm" />
        </video>
        <div className="absolute left flex text-9xl tracking-tighter z-50 p-5 backdrop-blur-sm w-full text-wrap bg-opacity-60">
          <div className="font-black text-primary">MASTER</div>
          <div>
            <div className=" ">YOUR</div>
            <div className="">SKILLS</div>
          </div>
        </div>
        <div className="transition-all right-0 absolute w-3/5 hover:z-50 hover:scale-105">
          <img src="https://i.imgur.com/LgoOidy.png"></img>
        </div>
      </div>

      <div
className="backdrop-blur-lg flex items-center justify-center w-full h-screen bg-base-300"
style={{ position: "relative", width: "100vw", height: "80vh" }}
>
<video
  className="-z-50"
  autoPlay
  loop
  muted
  style={{
    opacity: "0.5",
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }}
>
  <source src="https://res.cloudinary.com/dhm6pitfd/video/upload/v1708671752/GUILTY_GEAR_-STRIVE-_Available_Now_with_Xbox_Game_Pass_mhxkcg.webm" />
</video>
<div className="absolute right-0 flex text-9xl tracking-tighter z-50 p-5 p-8">
  <div>
    <div className="font-bold text-base-100 ">YOUR</div>
    <div className="font-bold text-base-100">GAME</div>
  </div>
  <div className="font-black text-primary">DOMINATE</div>
</div>
<div
  style={{ transform: "scaleX(-1)" }}
  className="transition-all left-0 absolute w-1/2 r:z-50"
>
  <img src="https://www.guiltygear.com/ggst/en/wordpress/wp-content/uploads/2020/09/chara_pc_ram.webp"></img>
</div>
</div>
    
    
    </>
  );
}

export default HomePage;
