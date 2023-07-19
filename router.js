
import { Router } from "express";
import m_PostController from './postController.js';
const m_Router = new Router(); // этот код работает также без команды "new": const m_Router = Router();

import { body as m_bodyValidator } from 'express-validator';
import m_authMiddleWare from './m_MiddleWares/m_authMiddleWare.js';

//========================

m_Router.post('/get_full_data_from_server', m_PostController.m_get_full_data_from_server); // получение всей базы данных
m_Router.post('/getAll_DB', m_PostController.m_getAllDB); // получение всей базы данных
m_Router.post('/getTopData_ByClient', m_PostController.m_getTopData_ByClient); // получение всей базы данных
m_Router.post('/getFullData_CurrentProject', m_PostController.m_getFullData_CurrentProject);
// Не используем, вместо этого используем порционную загрузку сообщений "get_lastMessages_currentChat"
m_Router.post('/get_chatList_CurrentProject', m_PostController.m_get_chatList_CurrentProject);

m_Router.post('/get_lastMessages_currentChat', m_PostController.m_get_lastMessages_currentChat);
m_Router.post('/get_PreviousItems_chatList_CurrentProject', m_PostController.m_get_PreviousItems_chatList_CurrentProject);


m_Router.post('/add_new_project', m_PostController.m_addNewProject); // добавление нового проекта
m_Router.post('/newMessageChatProject', m_PostController.m_newMessageChatProject); // добавление нового проекта
m_Router.post('/add_new_sub_Project', m_PostController.m_add_new_sub_Project); // добавление нового суб-проекта
m_Router.post('/newMessageChat_sub_Project', m_PostController.m_newMessageChat_sub_Project);
m_Router.post('/dell_One_Project', m_PostController.m_dell_One_Project); // удаление одной записи
m_Router.post('/dell_one_sub_Project', m_PostController.m_dell_One_sub_Project); // удаление одной записи
m_Router.post('/updateTeamForProject', m_PostController.m_updateTeamForProject); // обновление списка участников проекта
m_Router.post('/update_ofResponsibleList_subProject', m_PostController.m_update_ofResponsibleList_subProject); // обновление списка участников проекта

m_Router.post('/dellAllProjects', m_PostController.m_dellAllProjects); // для удаления всех записей
m_Router.post('/set_subProject_settings', m_PostController.m_set_subProject_settings);
m_Router.post('/set_project_settings', m_PostController.m_set_project_settings);
m_Router.post('/addUser_toContactList', m_PostController.m_addUser_toContactList);
m_Router.post('/deleteUsers_fromContactList', m_PostController.m_deleteUsers_fromContactList);
m_Router.post('/set_newContactList', m_PostController.m_set_newContactList);
m_Router.post('/confirmOnlineStatus', m_PostController.m_confirmOnlineStatus);
m_Router.post('/getUsersOnlineStatusFromServer_forCurrentProject', m_PostController.m_getUsersOnlineStatusFromServer_forCurrentProject);
// Не используется
m_Router.post('/getUsersOnlineStatusFromServer_forContactListCurrentAdmin', m_PostController.m_getUsersOnlineStatusFromServer_forContactListCurrentAdmin);

//========================
// Настройки пользователя
m_Router.post('/setUserSettings', m_PostController.m_setUserSettings);

m_Router.post('/uploadAvatarUser', m_PostController.m_uploadAvatarUser);

m_Router.post('/deleteAvatarFromServer', m_PostController.m_deleteAvatarFromServer);

m_Router.post('/orderTarifPlan', m_PostController.m_orderTarifPlan);

//========================
// Корп Аккаунты
m_Router.post('/addNewCorpAccount', m_PostController.m_addNewCorpAccount);
m_Router.post('/renameCorpAccount', m_PostController.m_renameCorpAccount);
m_Router.post('/deleteCorpAccount', m_PostController.m_deleteCorpAccount);
m_Router.post('/ignorOwnerCorpAccount', m_PostController.m_ignorOwnerCorpAccount);
m_Router.post('/restoreOwnerCorpAccount', m_PostController.m_restoreOwnerCorpAccount);

//========================
// Обработчики для foolTimeSubscriber
m_Router.post('/subscribeFullTime', m_PostController.m_subscribeFullTime);

//========================
// Уведомления:
m_Router.post('/timeUpdate_wasReadChat',
    m_PostController.m_timeUpdate_wasReadChat);
m_Router.post('/timeUpdate_wasReadProjectSettings', m_PostController.m_timeUpdate_wasReadProjectSettings);
m_Router.post('/timeUpdate_wasRead_subChat', m_PostController.m_timeUpdate_wasRead_subChat);
m_Router.post('/timeUpdate_wasRead_subProject_settings', m_PostController.m_timeUpdate_wasRead_subProject_settings);

//========================
// Авторизация:
m_Router.post('/registration_User', m_bodyValidator('eMail').isEmail(), m_bodyValidator('password').isLength({ min: 5, max: 32 }), m_PostController.m_registration_User);

// в след строке обрабатываем GET-запрос. В строке ендпоинта используем подстроку "/activate/:link'", поскольку в параметрах в строке гет-запроса будет передаваться доп информация, потому что в гет-запроса отсутствует body
m_Router.get('/activate/:link', m_PostController.m_confirmRegistrationUser);

m_Router.post('/changePassword', m_bodyValidator('eMail').isEmail(), m_bodyValidator('password').isLength({ min: 5, max: 32 }), m_PostController.m_changePassword);

m_Router.get('/confirmChangePassword/:link', m_PostController.m_confirmChangePassword);

m_Router.post('/logIn', m_PostController.m_logIn);
// след функцию не используем, вместо нее "m_logOutOneGadget"
m_Router.post('/logOut', m_PostController.m_logOut);
m_Router.post('/logOutOneGadget', m_PostController.m_logOutOneGadget);
m_Router.post('/logOutAllGadgets', m_PostController.m_logOutAllGadgets);


m_Router.post('/refreshToken', m_PostController.m_refreshToken);
// в обработке след запроса - перед выполнением запроса,  используем мидлВеер m_authMiddleWare для проверки авторизации пользоавтеля, а уже затем (в случае отсутствия ошибок во время проверки) - вызываем обработчик запроса в m_PostController  
m_Router.post('/test_01', m_authMiddleWare, m_PostController.m_test_01);

m_Router.post('/GoogleAuth_01', m_PostController.m_GoogleAuth_01);
//========================
// Загрузка/скачивание файлов:
m_Router.post('/uploadFilesToServer', m_PostController.m_uploadFilesToServer); // НЕ ИСПОЛЬЗУЕМ, вместо этого дагружаем по одному файлу
m_Router.post('/uploadOneFileToServer', m_PostController.m_uploadOneFileToServer);
m_Router.post('/downloadOneFileFromServer', m_PostController.m_downloadOneFileFromServer);
m_Router.post('/deleteFilesFromServer', m_PostController.m_deleteFilesFromServer);
m_Router.post('/getFilesListFromServer', m_PostController.m_getFilesListFromServer);


//========================
export default m_Router;







