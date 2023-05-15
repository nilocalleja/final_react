import { useForm } from "react-hook-form";
import { API } from "../services/Api";
import { useNavigate } from "react-router-dom";
import "./Register.scss"

const Register = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    API.post("users/register" , formData).then((res) => {

    })
    navigate("/login");
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        {...register("email", { required: true })}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        {...register("password", { required: true })}
      />

      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Register;
