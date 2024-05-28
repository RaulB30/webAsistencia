import axios from "axios";

export const crearEmpleado = async (empleado) => {
  return await axios.post("http://192.168.18.15:3000/empleados", empleado);
};

export const listarEmpleados = async () => {
  return await axios.get("http://192.168.18.15:3000/empleados");
};

export const eliminarEmpleado = async (dni) => {
  return await axios.delete(`http://192.168.18.15:3000/empleados/${dni}`);
};

export const actualizarEmpleado = async (dni, empleado) => {
  return await axios.put(`http://192.168.18.15:3000/empleados/${dni}`,empleado);
};

export const empleadobyDNI = async (dni) => {
  return await axios.get(`http://192.168.18.15:3000/empleados/${dni}`)
}

export const login =  async (empleado) =>{
  return await axios.post("http://192.168.18.15:3000/loginUser",empleado)
}
