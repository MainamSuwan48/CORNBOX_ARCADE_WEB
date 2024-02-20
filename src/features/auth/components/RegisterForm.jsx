import { useState } from "react";
import Input from "../../../components/ui/Input";
import Header from "../../../components/ui/Title";
import Button from "../../../components/ui/Button";
import { useAuth } from "../contexts/AuthContext";
import validateRegister from "../validations/validate-register";
import LinkWeb from "../../../components/ui/LinkWeb";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useProduct } from "../../products/contexts/ProductContext";

function RegisterForm() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const { createCart } = useProduct();
  const { register ,setAuthUser } = useAuth();

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
      const res = await register(email, username, password, confirmPassword);
      setAuthUser(res.user);
      console.log(res.user.id);
      const cartData = {
        userId: res.user.id,
      };
      await createCart(cartData);
      setErrors({});
      navigate(`/user/${res.user.id}`);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.error);
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
        <Link to="/login">
          <LinkWeb size="base" to="/login">
            Already have an account? Sign in
          </LinkWeb>
        </Link>
        <Button>REGISTER</Button>
      </form>
    </div>
  );
}

export default RegisterForm;
