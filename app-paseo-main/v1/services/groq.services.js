import { Groq } from 'groq-sdk';
import 'dotenv/config';
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const generarDescripcionCategoria = async (nombre) => {

    const response = await groq.chat.completions.create({
    "messages": [
        {
        "role": "user",
        "content": `Genera una descripción breve para un servicio de mascotas llamado "${nombre}". Máximo 30 palabras.`
        },

    ],
    "model": "openai/gpt-oss-120b"
    });

return response.choices[0]?.message?.content;

};