import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import styles from "./MantenimientoEmpleados.module.css";
import { useEffect, useState } from "react";
import { listarEmpleados, eliminarEmpleado } from "../api/empleados.api";
import swal from "sweetalert2";


function MantenimientoEmpleados() {
  const [tablaEmp, settablaEmp] = useState([]);
  const [empleados, setempleados] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function dataEmpleados() {
      const response = await listarEmpleados();
      settablaEmp(response.data);
      setempleados(response.data);
    }
    dataEmpleados();
  }, []);

  const confirmDelete = (dni) => {
    swal
      .fire({
        title: "¿Seguro que desea eliminar?",
        text: `Estas eliminando el trabajador con DNI:  ${dni}`,
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "Cancelar",
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await eliminarEmpleado(dni);
            console.log(res);
            location.reload();
          } catch (error) {
            console.log(error);
          }
        }
      });
  };

  const actualizartabla = () => {
    let criterio = document.getElementsByName("dni")[0].value.toUpperCase();
    let filtroEmpleados = "";
    // alert(criterio.length);
    console.log("TABLA EMPLEADOS: ", tablaEmp);
    console.log("EMPLEADOS ", empleados);
    if (criterio.length > 0) {
      setempleados(tablaEmp);
      console.log("EMPLEADOS ", empleados);
      filtroEmpleados = empleados.filter((emp) => {
        if (
          emp.DNI.toString().toUpperCase().startsWith(criterio) ||
          emp.APEPAT.toString().toUpperCase().startsWith(criterio) ||
          emp.APEMAT.toString().toUpperCase().startsWith(criterio)
        )
          return empleados;
      });

      if (filtroEmpleados.length !== 0) {
        document.getElementsByName("datos")[0].style.visibility = "visible";
        setempleados(filtroEmpleados);
      } else {
        document.getElementsByName("datos")[0].style.visibility = "hidden";
      }
    } else {
      document.getElementsByName("datos")[0].style.visibility = "visible";
      setempleados(tablaEmp);
    }
  };

  return (
    <div className={styles.main}>
      <h1>Mantenimiento de Empleados</h1>
      <div className={styles.main_container}>
        <Formik className={styles.form_container} initialValues={{ dni: "" }}>
          {({ handleSubmit, values }) => (
            <Form className={styles.form_container}>
              <label>DNI</label>
              <input
                type="text"
                name="dni"
                placeholder="Realiza tu busqueda"
                onChange={actualizartabla}
                className={styles.caja_busqueda}
              />

              <button title="Buscar" className={styles.btn_busqueda}>
                🔍
              </button>
              <Link to="/nuevoEmpleado">
                <button
                  type="submit"
                  className={styles.btn_nuevo}
                  title="Nuevo Empleado"
                >
                  ➕
                </button>
              </Link>
            </Form>
          )}
        </Formik>
      </div>
      <div className={styles.table_container}>
        <table className={styles.tbl_empleados}>
          <thead>
            <tr>
              <th>DNI</th>
              <th>Nombres</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody name="datos">
            {empleados.map((empleado) => (
              <tr key={empleado.ID}>
                <td>{empleado.DNI}</td>
                <td>{empleado.NOMBRES}</td>
                <td>{empleado.APEPAT}</td>
                <td>{empleado.APEMAT}</td>
                <td>
                  <button
                    onClick={() => confirmDelete(empleado.DNI)}
                    title="Eliminar empleado"
                    className={styles.action_buttons}
                  >
                    ❌
                  </button>
                  <button
                    onClick={() => navigate(`/editEmpleado/${empleado.DNI}`)}
                    title="Ver empleado"
                    className={styles.action_buttons}
                  >
                    👁️‍🗨️
                  </button>
                  <button
                    title="Registro de Asistencia"
                    className={styles.action_buttons}
                  >
                    📒
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MantenimientoEmpleados;
