import express from "express"; // для работы этоq команды в файле "package.json" добавлена строка:     "type": "module",
import fileUpload from 'express-fileupload';
import cors from "cors";
// import mongoose from "mongoose";
import m_Router from './router.js';
import cookieParser from "cookie-parser";
import m_errorsMiddleWare from './m_MiddleWares/m_errorsMiddleWare.js';
import mMiddleWare_assessTokenControl from './m_MiddleWares/mMiddleWare_assessTokenControl.js';
import { get_valid_adress_fileOrFolder } from './postService.js'
import mConfigData from './mConfig.js'

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
mServer.use(mMiddleWare_assessTokenControl); ``
mServer.use(m_Router);

// Поскольку файлы БД и статические файлы перенесены вор внешнюю папку относительно расположения файла сервера, то в качестве дополнительного параметра передаем адрес к папке static
// mServer.use(express.static('static')); // НЕ УДАЛЯТЬ - это старый вариант, когда папка static находилась в корневом каталоге сервара
mServer.use(express.static(
    get_valid_adress_fileOrFolder(mConfigData.static_Adress)
)); // это новый  вариант, когда папка static перенесена во внешний каталог



// MiddleWare для обработки ошибок -  длжен располагаться последним в цепочке всех MiddleWare
// mServer.use(m_errorsMiddleWare);

const PORT = 5075;
async function mStartApp() {
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