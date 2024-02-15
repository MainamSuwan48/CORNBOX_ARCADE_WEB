import React from "react";

const NotFoundPage = () => {
  return (
    <div className="bg-red-400 mt-20">
      <h1>404 Not Found</h1>
      <p>Oops! Looks like you've stumbled upon a page that doesn't exist.</p>
      <p>
        But don't worry, our team of highly trained corn experts is on the case!
      </p>
      <img src="https://example.com/corn.gif" alt="Funny Corn" />
      <p>In the meantime, why not enjoy this delightful corn animation?</p>
      <LogoCornbox />
    </div>
  );
};

export default NotFoundPage;
