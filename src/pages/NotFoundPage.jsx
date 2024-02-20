import React from "react";
import LogoCornbox from "../components/ui/LogoCornbox";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-3xl flex flex-col p-8">
      <h1 className="text-center text-9xl text-red-700">404 Not Found</h1>
      <p>Lost?</p>
      <p>
        Get back to the
        <Link to="/">
          <LogoCornbox />
        </Link>
      </p>
      <img
        className="w-1/2 mx-auto"
        src="https://media1.tenor.com/m/BAzma6OlbvAAAAAd/dancing-toothless-tothless.gif"
        alt="Funny Corn"
      />
      <p
        className="text-center text-2xl text-primary font-bold"
        style={{ color: "var(--color-primary)" }}
      >Why not enjoy this delightful dancing boi</p>
    </div>
  );
};

export default NotFoundPage;
