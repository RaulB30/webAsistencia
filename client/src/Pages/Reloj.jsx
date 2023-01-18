import { useEffect } from 'react';
import styles from './Reloj.module.css';

function Reloj() {

    useEffect(() => {
        let mostrarfecha = document.getElementById("fecha")
        let mostrarreloj = document.getElementById("reloj")

        let fecha = new Date();

        let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
        let mesAnio = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

        mostrarfecha.innerHTML = `${diaSemana[fecha.getDay()]},${fecha.getDate()} de ${mesAnio[fecha.getMonth()]} de ${fecha.getFullYear()}`;

        setInterval(() => {
            let hora = new Date();
            mostrarreloj.innerHTML = hora.toLocaleTimeString();
        }, 1000);
    })



    return (
        <div className={styles.reloj_container}>
            <fieldset >
                <legend id="fecha">-
                </legend>
                <h2 id="reloj">-</h2>
            </fieldset>
        </div>
    )
}

export default Reloj