import express from "express"; // для работы этоq команды в файле "package.json" добавлена строка:     "type": "module",
import fileUpload from 'express-fileupload';
import cors from "cors";
// import mongoose from "mongoose";
import m_Router from './router.js';
import cookieParser from "cookie-parser";
import m_errorsMiddleWare from './m_MiddleWares/m_errorsMiddleWare.js';
import mMiddleWare_assessTokenControl from './m_MiddleWares/mMiddleWare_assessTokenControl.js';
//=======================
const mServer = express();

// === Тут даныые для работы HTTPS протокола
import https from 'https';
import fs from 'fs';

mServer.use(cookieParser());
mServer.use(fileUpload({}));
mServer.use(cors({

    origin: [
        // тут перечисляем список адресов, с которых сервер принимавет запросы. ВАЖНО: в конце адреса не ставим флеш "/"
        "http://localhost:3000",
        "https://litepm.com",
        "http://litepm.com",
    ],

    // след необязательно - указывает тип допустимых запросов
    // methods: ['GET', 'POST'],
    // след для разрешения отправки Куки
    credentials: true,
}
));

mServer.use(express.json());
// ВАЖНО- cвои МидлВары размещаем перед роутером 
mServer.use(mMiddleWare_assessTokenControl);
mServer.use(m_Router);
mServer.use(express.static('static'));

// MiddleWare для обработки ошибок -  длжен располагаться последним в цепочке всех MiddleWare
// mServer.use(m_errorsMiddleWare);

// предварительно создаем SSL-сервер для HTTPS запросов
/* 
const m_HTTPS_server = null;
try {
    // помещаем в try-catch, поскольку бывают проблемы с сертификатами
    m_HTTPS_server = https.createServer(
        {
            // key: fs.readFileSync('./m_SLL_sertificate/privkey.pem', 'utf8'),
            // cert: fs.readFileSync('./m_SLL_sertificate/fullchain.pem', 'utf8')

            // key: fs.readFileSync(path.join(__dirname, 'm_SLL_sertificate', 'key.pem')),
            // cert: fs.readFileSync(path.join(__dirname, 'm_SLL_sertificate', 'cert.pem'))
        },
        mServer
    )
} catch (error) {
    console.log(error);
}
*/


const PORT = 5075;
async function mStartApp() {

    /* 
        try {
            // console.clear(); 
            // console.log(fs.readFileSync('./m_SLL_sertificate/privkey.pem', 'utf8'));
            // console.log(fs.readFileSync('./m_SLL_sertificate/fullchain.pem', 'utf8'));
            m_HTTPS_server.listen(PORT, () => { console.log("Server  is start +SSL  " + PORT) });
        }
        catch (error) {
            console.log("m_ Ошибка сервера:");
            console.log(error);
        }
     */


    try {
        mServer.listen(PORT, () => {
            // console.clear();
            // console.log(fs.readFileSync('./m_SLL_sertificate/key.pem', 'utf8'));
            // console.log(fs.readFileSync('./m_SLL_sertificate/cert.pem', 'utf8'));
            console.log("Server is start  " + PORT)
        });
    }
    catch (error) {
        console.log("m_ Ошибка сервера:");
        console.log(error);
    }


}
mStartApp(); // запускаем сервер