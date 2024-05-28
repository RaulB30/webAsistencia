import { useEffect } from 'react'

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

    const logout = () => {
        window.localStorage.clear();
        location.reload();
    }
    return (


        <>
            <Reloj />
            <div className={style.main_container}>
                <div className={style.user_main}>
                    <input type="text" name='placa' placeholder='Ingrese la placa' />
                    <button className={style.btnIngreso}>Marcar Ingreso</button>
                    <button className={style.btnSalida}>Marcar Salida</button>
                </div>
            </div>

            <footer>
                <div className={style.user_footer}>
                    <h4>{`Dni : ${window.localStorage.getItem("dni")}`}</h4>
                    <h3>{`Usuario : ${window.localStorage.getItem("nombres")} ${window.localStorage.getItem("apePat")} ${window.localStorage.getItem("apeMat")}`}</h3>
                    <button onClick={logout}>Cerrar Sesion</button>
                </div>

            </footer>

        </>
    )
}

export default UserPage