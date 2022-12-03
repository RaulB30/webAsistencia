import { Form, Formik, Field } from "formik";
import styles from "./FrmEmpleados.module.css";
import {
  crearEmpleado,
  empleadobyDNI,
  actualizarEmpleado,
} from "../api/empleados.api.js";
import { Toaster, toast } from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function FrmEmpleados() {
  const params = useParams();
  const navigate = useNavigate();
  const [empleado, setempleado] = useState({
    dni: "",
    nombres: "",
    apePat: "",
    apeMat: "",
    estado: "",
    fecNac: "",
    telf: "",
    direccion: "",
    hijos: false,
    licencia: "",
    contactoEmer:"",
  });

  useEffect(() => {
    if (params.id) {
      async function getEmpleado() {
        try {
          const empleado = await empleadobyDNI(params.id);
          console.log(empleado.data);
          setempleado({
            dni: empleado.data.DNI,
            nombres: empleado.data.NOMBRES,
            apePat: empleado.data.APEPAT,
            apeMat: empleado.data.APEMAT,
            direccion: empleado.data.DIRECCION,
            contactoEmer: empleado.data.CONTACTO_EMER,
            estado: empleado.data.ESTADO_CIV,
            hijos: empleado.data.HIJOS,
            sistemaPension: empleado.data.SISTEMA_PENSION,
            licencia: empleado.data.LICENCIA,
            fecNac: empleado.data.date,
            telf: empleado.data.TELEFONO,
          });
        } catch (error) {
          navigate("/");
        }
      }
      getEmpleado();
    }
  }, []);

  return (
    <div>
      <h1>{params.id ? "Editar Empleado" : "Crear Nuevo Empleado"}</h1>
      <div className={styles.main}>
        <Formik
          initialValues={empleado}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            console.log(values);

            try {
              if (params.id) {
                const response = await actualizarEmpleado(params.id,values);
                console.log(response);
              }
              const response = await crearEmpleado(values);
              console.log(response);
              toast.success("Empleado registado!", {
                style: {
                  color: "green",
                  border: "1px solid green",
                },
              });
              actions.resetForm();
            } catch (error) {
              console.log(error);
              if (error.response.data.message.includes("Duplicate"))
                toast.error("Dni ya registrado", {
                  style: {
                    color: "red",
                    border: "1px solid red",
                  },
                });
            }
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form className={styles.container} onSubmit={handleSubmit}>
              <label>Dni</label>
              <input
                disabled={params.id ? "disabled" : false}
                type="text"
                name="dni"
                placeholder="Dni"
                onChange={handleChange}
                required
                value={values.dni || ""}
                className={styles.cajas_texto}
              />

              <label>Nombres</label>
              <input
                type="text"
                name="nombres"
                placeholder="Nombres"
                onChange={handleChange}
                required
                value={values.nombres || ""}
                className={styles.cajas_texto}
              />

              <label>Apellido Paterno</label>
              <input
                type="text"
                name="apePat"
                placeholder="Apellido Paterno"
                onChange={handleChange}
                required
                value={values.apePat || ""}
                className={styles.cajas_texto}
              />

              <label>Apellido Materno</label>
              <input
                type="text"
                name="apeMat"
                placeholder="Apellido Materno"
                onChange={handleChange}
                value={values.apeMat || ""}
                className={styles.cajas_texto}
              />

              <label>Fecha Nacimiento</label>
              <input
                type="date"
                name="fecNac"
                placeholder="Fecha de Nacimiento"
                onChange={handleChange}
                required
                value={values.fecNac || ""}
                className={styles.caja_fecha}
              />

              <label>Licencia</label>
              <input
                type="text"
                name="licencia"
                placeholder="Licencia de Conducir"
                onChange={handleChange}
                required
                value={values.licencia || ""}
                className={styles.cajas_texto}
              />

              <label>Telefono</label>
              <input
                type="text"
                name="telf"
                placeholder="Cel / Telf"
                onChange={handleChange}
                required
                value={values.telf || ""}
                className={styles.cajas_texto}
              />

              <label>Contacto de Emergencia</label>
              <input
                type="text"
                name="contactoEmer"
                placeholder="Numero de Emergencia"
                onChange={handleChange}
                required
                value={values.contactoEmer || ""}
                className={styles.cajas_texto}
              />

              <label>Direccion</label>
              <input
                type="text"
                name="direccion"
                placeholder="Direccion"
                onChange={handleChange}
                required
                value={values.direccion || ""}
                className={styles.cajas_texto}
              />

              <label>Estado Civil</label>
              <select
                className={styles.combo}
                onChange={handleChange}
                name="estado"
                value={values.estado || "No especifica"}
              >
                <option value="No especifica">Seleccione...</option>
                <option value="Soltero">Soltero</option>
                <option value="Casado">Casado</option>
              </select>
              <label> Con hijos?</label>
              <Field
                className={styles.check}
                type="checkbox"
                name="hijos"
                id="hijos"
              />

              <label>Sistema de Pension</label>
              <input
                type="text"
                name="sistemaPension"
                placeholder="Sistema de Pension"
                onChange={handleChange}
                required
                value={values.sistemaPension || ""}
                className={styles.cajas_texto}
              />

              <input
                className={styles.btnGuardar}
                type="submit"
                disabled={isSubmitting}
                value={
                  isSubmitting
                    ? "Guardando..."
                    : params.id
                    ? "Actualizar"
                    : "Guardar"
                }
              />
            </Form>
          )}
        </Formik>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default FrmEmpleados;
