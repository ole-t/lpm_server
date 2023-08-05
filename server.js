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
// import path from 'path'; 
// === Завершение даныых для работы HTTPS протокола

//const mDBmongoose_url = 'mongodb+srv://all_users:all_users@cluster0.bfmbg.mongodb.net/?retryWrites=true&w=majority';

// для отправки клиенту данных для Куки, мы в нашем проекте передаем туда рефреш-токен
mServer.use(cookieParser());
mServer.use(fileUpload({}));

// удалить позже - выведем заголовки входящего запроса
mServer.use((req, res, next) => {
    console.log("");
    console.log("Запрос на сервер, req.url= " + req.url);
    console.log("req.hearers=");
    console.log(req.headers);
    console.log("");
    next();
})


// необх для преобр входящей от клиента  строки в JSON
mServer.use(express.json());
// тут cors - без указания параметров - работает для всех запросов
mServer.use(cors(
    {
        // следующую инструкцию использовал, чтобы работали запросу с локального сервера во время разработки на задеплоинный сервер
        // origin: ["http://localhost:3000/", "https://localhost:3000/",]
    }
));

// ВАЖНО- cвои МидлВары размещаем перед роутером для своей проверки валидности данных
mServer.use(mMiddleWare_assessTokenControl);

// эта (своя) функция обрабатывает входящие запросы от клиента, используя наши функции обработки из файла 'router.js
mServer.use(m_Router);
// функция раздачи статических фалов. 'static'-адрес статической папки в корневом каталоге сервера
mServer.use(express.static('static'));

// =========================
// Далее идут МидлеВееры

// MiddleWare для обработки ошибок -  длжен располагаться последним в цепочке всех MiddleWare
mServer.use(m_errorsMiddleWare);

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