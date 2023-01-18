import { useEffect } from 'react'
import Navbar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";
import Reloj from "./Reloj";
import style from './UserPage.module.css';
function UserPage() {

    const navigate = useNavigate();
    useEffect(() => {
        if (!window.localStorage.getItem("token")) {
            navigate("/")
        }
    })
    const tiempo = Date.now();
    const hoy = new Date(tiempo);
    return (


        <>
            <Reloj />
            <div className={style.main_container}>
            <div className={style.user_main}>
                <button className={style.btnIngreso}>Marcar Ingreso</button>
                <button className={style.btnSalida}>Marcar Salida</button>
            </div>
            </div>
        </>
    )
}

export default UserPage