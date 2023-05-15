RequireAuth.jsx
import { Navigate, useLocation } from "react-router-dom"

export const RequireAuth = ({children}) => {
    // lo que necestite este componente es saber la ruta en la que esta el usuario para cerrarle el acceso o no
    let location = useLocation();
    // vamos a hacer un condicional o comprobación en el cual le vamos a decir decir que si no hay dentro del localstorage un token, lo que va a hacer es redirigir a mi usuario al login para que se logee
    if (!localStorage.getItem("token")) {
        return <Navigate to="/login" state={{ from: location}} replace/>
    }
    return children;

}