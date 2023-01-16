import { pool } from "../db.js";
import * as dotenv from "dotenv";
dotenv.config()
import jwt from "jsonwebtoken";


export const loginEmpleado = async (req, res) => {
    console.log(req.body);
    try {
        const {
            dni,
            password
        } = req.body;
        console.log(dni, password)
        const [rows] = await pool.query(`Select * from empleados where Dni =${dni} and password= ${password}`);
        const user = rows[0];

        if (rows.length === 0) {
            return res.status(401).json({ message: "Usuario o password invalido" });
        }

        const userFortoken = {
            id: user.ID,
            nombres: user.NOMBRES,
            dni: user.DNI
        }


        const token = jwt.sign(userFortoken, process.env.SECRET)


        res.send({
            token
        });

    } catch (error) {

        return res.status(500).json({ message: "Usuario o password invalido" })
    }
}