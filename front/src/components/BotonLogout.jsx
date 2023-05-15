import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";
import { useNavigate } from "react-router-dom";

export const ButtonLogout = () => {
  //nos traemos nuestro seteador para luego vaciar nuestra variable de estado de lo que hubiera
  const { setJwt } = useContext(JwtContext);
  const navigate = useNavigate();
  const logout = () => {
    // en esta función lo que hacemos es remover nuestro localstorage que habiamos metido mediante el login y cargar nuestra variable jwt con su seteador en null

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setJwt(null);
    navigate("/login");
  };

  return <button onClick={logout}>LogOut</button>;
};