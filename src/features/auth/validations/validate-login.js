import Joi from "joi";
import validate from "../../../utils/validator";

const loginSchema = Joi.object({
  usernameOrEmail: Joi.string().required().messages({
    "string.empty": "Please enter your username or email",
    "any.required": "Please enter your username or email",
  }),
  password: Joi.string().min(6).required().messages({
    "string.empty": "Please enter your password",
    "string.min": "Password must be at least 6 characters",
    "any.required": "Please enter your password",
  }),
});

const validateLogin = (input) => validate(loginSchema)(input);
export default validateLogin;
