import React, { useEffect, useState } from "react";
import Input from "../../../components/ui/Input";
import Header from "../../../components/ui/Title";
import Button from "../../../components/ui/Button";
import Link from "../../../components/ui/LinkWeb";
import { useAuth } from "../contexts/AuthContext";
import validateLogin from "../validations/validate-login";

function LoginForm() {
  const [input, setInput] = useState({ usernameOrEmail: "", password: "" });
  const [errors, setErrors] = useState({});
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateLogin(input);
  
    if (validationErrors) {
      // If there are validation errors, update the state and stop the function
      setErrors(validationErrors);
      return;
    }
  
    const { usernameOrEmail, password } = input;
    try {
      await login(usernameOrEmail, password);
      setErrors({});
    } catch (err) {
      console.log(err);
    }
   
  };

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log('Component has re-rendered');
  }, [errors]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/3">
        <Header>SIGN IN</Header>
        <Input
          onChange={handleInputChange}
          name="usernameOrEmail"
          value={input.usernameOrEmail}
          type="text"
          placeholder="Email Or Username please"
          errorMessage={errors.usernameOrEmail}
        />
        <Input
          onChange={handleInputChange}
          name="password"
          value={input.password}
          type="password"
          placeholder="Password please"
          errorMessage={errors.password}
        />
        <Link size={"base"}>How about signing up?</Link>
        <Button>LOGIN</Button>
      </form>
    </div>
  );
}

export default LoginForm;
