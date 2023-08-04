import path from 'path';

/* 
let pathNameID = "/dataBase/dataBase.json";
console.log("dirname= " + path.dirname(pathNameID));
console.log("basename= " + path.basename(pathNameID));
console.log("extname= " + path.extname(pathNameID));
*/

function mGet_globalPathToCurrentFolder() {
    // След команда выводит полный путь от корневой папки сервера до папки с текущим файлом !!!
    let globalPathToCurrentFolder = path.resolve();
    console.log(" ");
    console.log("globalPathToCurrentFolder= " + globalPathToCurrentFolder);
    return globalPathToCurrentFolder;
}

function mGet_localPathFromCurrentFolder(absPathToFile) {
    // След команда выводит откорректированный путь от текущей папки до указанного файла/папки
    let localPathFromCurrentFolder = path.join(absPathToFile);
    console.log(" ");
    console.log("localPathFromCurrentFolder= " + localPathFromCurrentFolder);
    return localPathFromCurrentFolder;
}


const mConfigData = {

    // serverAdress: 5075,
    serverAdress: "http://localhost:5075/",

    clientAdress: 'http://localhost:3000',
    // clientAdress: "litepm.com/",
    // clientAdress: "https://litepm.com/",

    // dataBase_fileAdress: "./dataBase/dataBase.json",
    // косая черта без точки - указывает на абсолютный путь к файлу
    dataBase_fileAdress: mGet_globalPathToCurrentFolder() + mGet_localPathFromCurrentFolder("/dataBase/m_DB.json"),

    // userReestr_fileAdress: "./dataBase/userReestr.json",
    // косая черта без точки - указывает на абсолютный путь к файлу
    userReestr_fileAdress: mGet_globalPathToCurrentFolder() + mGet_localPathFromCurrentFolder("/dataBase/userReestr.json"),

    avatars_Folder: "./static/avatars/",
    uploadFiles__Folder: "",






}

//------------------
export default mConfigData;