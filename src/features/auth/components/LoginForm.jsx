import React, { useState } from "react";
import Input from "../../../components/ui/Input";
import Header from "../../../components/ui/Title";
import Button from "../../../components/ui/Button";
import Link from "../../../components/ui/Link";
import { useAuth } from "../contexts/AuthContext";

function LoginForm() {
  const test = import.meta.env.VITE_API_URL;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const handleSubmit = (e) => {
    console.log(test)
    e.preventDefault();
    console.log("submitted");
  };

  const handleInputChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/3">
        <Header>SIGN IN</Header>
        <Input
          onChange={handleInputChange}
          name="username"
          value={username}
          type="text"
          placeholder="Email Or Username please"
        />
        <Input
          onChange={handleInputChange}
          name="password"
          value={password}
          type="password"
          placeholder="Password please"
        />
        <Link size={"base"}>How about signing up?</Link>
        <Button onClick={() => login(username, password)}>LOGIN</Button>
      </form>
    </div>
  );
}

export default LoginForm;
