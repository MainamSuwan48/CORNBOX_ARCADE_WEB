import { useState } from "react";
import Input from "../../../components/ui/Input";
import Header from "../../../components/ui/Title";
import Button from "../../../components/ui/Button";
import { useAuth } from "../contexts/AuthContext";
import validateRegister from "../validations/validate-register";

function RegisterForm() {
  const [input, setInput] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const { register } = useAuth();

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateRegister(input);
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }
    const { email, username, password, confirmPassword } = input;
    try {
      await register(email, username, password, confirmPassword);
      console.log("Registered")
      setErrors({});
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/3">
        <Header>SIGN UP</Header>
        <Input
          name="email"
          value={input.email}
          onChange={handleInputChange}
          type="text"
          placeholder="Email please"
          errorMessage={errors.email}
        />
        <Input
          name="username"
          value={input.username}
          onChange={handleInputChange}
          type="text"
          placeholder="Username please"
          errorMessage={errors.username}
        />
        <Input
          name="password"
          value={input.password}
          onChange={handleInputChange}
          type="password"
          placeholder="Password please"
          errorMessage={errors.password}
        />
        <Input
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={handleInputChange}
          type="password"
          placeholder="Confirm Password please"
          errorMessage={errors.confirmPassword}
        />
        <Button>REGISTER</Button>
      </form>
    </div>
  );
}

export default RegisterForm;
