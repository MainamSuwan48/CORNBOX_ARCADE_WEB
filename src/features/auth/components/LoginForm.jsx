import React from "react";
import Input from "../../../components/ui/Input";
import Header from "../../../components/ui/Header";
import Button from "../../../components/ui/Button";
import Link from "../../../components/ui/Link";

function LoginForm() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form className="flex flex-col gap-4 w-1/3">
        <Header>SIGN IN</Header>
        <Input type="text" placeholder="Email Or Username please" />
        <Input type="password" placeholder="Password please" />
        <Link size={"base"}>How about signing up?</Link>
        <Button >LOGIN</Button>
      </form>
    </div>
  );
}

export default LoginForm;
