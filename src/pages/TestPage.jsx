import React from "react";
import LogoCornbox from "../components/ui/LogoCornbox";
import Header from "./layouts/Header";


function TestPage() {
  return (
    <div className="bg-red-600">
      <>       
        <Header />
        <button className="btn border-primary hover:scale-125">Button</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>
      </>
    </div>
  );
}

export default TestPage;
