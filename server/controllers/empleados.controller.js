import { pool } from "../db.js";

export const getEmpleados = async (req, res) => {
  try {
    const [rows] = await pool.query("Select * from empleados");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEmpleado = async (req, res) => {
  try {
    const [rows] = await pool.query("Select *,DATE_FORMAT(FECHA_NAC, '%Y-%m-%d') as date from empleados where DNI = ? ", [
      req.params.id,
    ]);
    console.log(rows);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ menubar: error.message });
  }
};

export const crearEmpleado = async (req, res) => {
  try {
    const {
      dni,
      nombres,
      apePat,
      apeMat,
      fecNac,
      licencia,
      telf,
      contactoEmer,
      direccion,
      estado,
      hijos,
      sistemaPension,
      password,
    } = req.body;

    const rows = await pool.query(
      "INSERT INTO empleados(DNI,NOMBRES,APEPAT,APEMAT,FECHA_NAC,LICENCIA,TELEFONO,CONTACTO_EMER,DIRECCION,ESTADO_CIV,HIJOS,SISTEMA_PENSION,password) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        dni,
        nombres,
        apePat,
        apeMat,
        fecNac,
        licencia,
        telf,
        contactoEmer,
        direccion,
        estado,
        hijos,
        sistemaPension,
        password,
      ]
    );
    res.send("Empleado Creado");
    console.log(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
export const actEmpleados = async (req, res) => {
  console.log(req.body);
  try {
    const {
      nombres,
      apePat,
      apeMat,
      fecNac,
      licencia,
      telf,
      contactoEmer,
      direccion,
      estado,
      hijos,
      sistemaPension,
      password,
    } = req.body;

    const [rows] = await pool.query("update empleados set ? where DNI ="+req.params.id, [
      req.body,      
    ]);

    res.send("Empleado Actualizado");
    console.log(rows);
  } catch (error) {
    
   return res.status(500).json({ message: error.message });
  }
};

export const eliEmpleados = async (req, res) => {
  try {
    const [rows] = await pool.query("delete from empleados where DNI = ?", [
      req.params.id,
    ]);

    if (rows.affectedRows === 0) {
      return res.status(404).json({ message: "Empleado no existe" });
    }

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
