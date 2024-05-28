import { pool } from "../db.js";

export const marcarIngreso = async (req, res) => {
    try {
        const {
            dni,
            fecha_ingreso,
            placa
        } = req.body;

        const rows = await pool.query(
            "INSERT INTO REGISTRO_ASISTENCIA "
        )
    } catch (error) {

    }
}

export const obtenerRegistro = async (req, res) => {
    try {

        const [rows] = await pool.query(`Select * from registro_asistencia where ID_EMPLEADO = ${req.params.id} order by id desc limit 1`) 
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}