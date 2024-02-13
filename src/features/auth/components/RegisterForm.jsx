import React from "react";
import Input from "../../../components/ui/Input";
import Header from "../../../components/ui/Header";
function RegisterForm() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form className="flex flex-col gap-4 w-1/3">
        <Header>SIGN UP</Header>
        <Input type="text" placeholder="Email please" />
        <Input type="text" placeholder="Username please" />
        <Input type="password" placeholder="Password please" />
        <Input type="password" placeholder="Confirm Password please" />
        <button
          type="submit"
          className="p-2 bg-primary text-neutral rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
