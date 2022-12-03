import axios from "axios";

export const crearEmpleado = async (empleado) => {
  return await axios.post("http://localhost:3000/empleados", empleado);
};

export const listarEmpleados = async () => {
  return await axios.get("http://localhost:3000/empleados");
};

export const eliminarEmpleado = async (dni) => {
  return await axios.delete(`http://localhost:3000/empleados/${dni}`);
};

export const actualizarEmpleado = async (dni, empleado) => {
  return await axios.put(`http://localhost:3000/empleados/${dni}`,empleado);
};

export const empleadobyDNI = async (dni) => {
  return await axios.get(`http://localhost:3000/empleados/${dni}`)
}
