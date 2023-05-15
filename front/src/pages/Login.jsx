import { useContext } from "react"
import { JwtContext} from "../context/jwtContext"
import {useForm} from "react-hook-form"
import { API } from "../services/Api";
import "./Login.scss"
const Login = () => {
  // nos traemos de nuestro contexto un seteador con el que llenaremos la información del usuario
  // const { setJwt } = useContext(JwtContext)
  // nos traemos de nuestro useForm un register y handlesubmit para que me registre la información
  const {register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
  // console.log(formData);
  API.post("users/login",formData).then((res) => {
    console.log(res)
    // mando a mi localstorage la información que a mi me interesa que tenga el navegador como tal, el primer campo es el nombre de la variable que le vamos a poner y el segundo campo la información la cual mandas
    localStorage.setItem("token", res.data.data.token)
    localStorage.setItem("user", res.data.data.user.emoji)
    setJwt(localStorage.getItem("token"));

  })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" {...register("email",{ required: true})}/>

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" {...register("password",{ required: true})}/>

    <button type="submit">Logearse</button>
    </form>
  )
}

export default Login