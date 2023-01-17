import styles from './Login.module.css';
import { useState } from 'react';
import { login } from "../api/empleados.api.js";
import { Toaster, toast } from "react-hot-toast";
function Login() {


  const [dni, setuserLogin] = useState("");
  const [password, setpasword] = useState("");

  const prueba = async (e) => {
    e.preventDefault();
    console.log(dni, password)
    const user = {
      dni, password
    }

    try {
      const response = await login(user);
      window.localStorage.setItem("token", response.data.token)
      toast.success("Login correcto", {
        style: {
          color: "green",
          border: "1px solid green",
        },
      });
    } catch (error) {

      setuserLogin("");
      setpasword("");
      toast.error("Usuario o password invalido", {
        style: {
          color: "red",
          border: "1px solid red",
        },
      });
    }

  }

  return (
    <>

      <div className={styles.main_container}>

        <h1 className={styles.encabezado}>Inicie Sesion</h1>

        <form className={styles.login_container}>

          <input onChange={e => setuserLogin(e.target.value)} className={styles.login_input} type="text" placeholder="ingrese su usuario" name='dni' />
          <input onChange={e => setpasword(e.target.value)} className={styles.login_input} type="password" placeholder="Ingrese su password" name='password' />

          <button onClick={prueba} className={styles.login_button}>Login</button>

        </form>
        <Toaster position="top-center" />
      </div>
    </>
  )
}

export default Login