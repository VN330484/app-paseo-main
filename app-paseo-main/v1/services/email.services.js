import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

console.log("EMAIL USER:", process.env.EMAIL_USER);
console.log("EMAIL PASSWORD:", process.env.EMAIL_PASSWORD);
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

export const enviarReservaEmail = async (
    mascota,
    categoria,
    fecha
) => {

    await transporter.sendMail({
        from: process.env.EMAIL_USER,

        to: process.env.EMAIL_USER,

        subject: "Nueva reserva creada",

        text: `
Nueva reserva creada.

Mascota: ${mascota}
Servicio: ${categoria}
Fecha: ${fecha}

`
    });

};