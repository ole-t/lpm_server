
import m_PostService from './postService.js';
import { validationResult } from 'express-validator';
import m_ApiErrors from './m_ApiErrors.js';

class m_PostController {

    async m_get_full_data_from_server(req, res) {
        try {
            const m_postToDB = await m_PostService.m_get_full_data_from_server_PS(req);
            res.status(200).json(m_postToDB);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_get_full_DB_and_Reestr: " + error);
        }
    }
    //---------
    async m_getAllDB(req, res) {
        try {
            const m_postToDB = await m_PostService.m_getAllDB_PS(req);
            res.status(200).json(m_postToDB);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_getAllDB: " + error);
        }
    }
    //---------
    async m_getTopData_ByClient(req, res) {
        try {
            console.log(" ");
            console.log("Запуск m_getTopData_ByClient= ");
            console.log("req.headers=");
            console.log(req.headers);
            console.log(" ");
            console.log("req.body=");
            console.log(req.body);

            const m_postToDB = await m_PostService.m_getTopData_ByClient_PS(req);
            res.status(200).json(m_postToDB);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController: " + error);
        }
    }
    //---------
    async m_getFullData_CurrentProject(req, res) {
        try {
            const m_postToDB = await m_PostService.m_getFullData_CurrentProject_PS(req);
            res.status(200).json(m_postToDB);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController: " + error);
        }
    }
    //---------
    async m_addNewProject(req, res) {
        try {
            const m_postToDB = await m_PostService.m_addNewProject_PS(req, res);
            res.status(200).json(m_postToDB);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController: " + error);
        }
    }
    //---------
    async m_newMessageChatProject(req, res) {
        try {
            const m_postToDB = await m_PostService.m_newMessageChatProject_PS(req, res);
            res.status(200).json(m_postToDB);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController: " + error);
        }
    }
    //---------
    async m_add_new_sub_Project(req, res) {
        try {
            const m_postToDB = await m_PostService.m_add_new_sub_Project_PS(req, res);
            res.status(200).json(m_postToDB);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController: " + error);
        }
    }
    //---------
    async m_newMessageChat_sub_Project(req, res) {
        try {
            const m_postToDB = await m_PostService.m_newMessageChat_sub_Project_PS(req, res);
            res.status(200).json(m_postToDB);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController: " + error);
        }
    }
    //---------
    // Не используем, вместо этого используем порционную загрузку сообщений "get_lastMessages_currentChat"
    async m_get_chatList_CurrentProject(req, res) {
        try {
            const m_postToDB = await m_PostService.m_get_chatList_CurrentProject_PS(req);
            res.status(200).json(m_postToDB);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_get_chatList_CurrentProject: " + error);
        }
    }
    //---------
    async m_get_lastMessages_currentChat(req, res) {
        try {
            const m_postToDB = await m_PostService.m_get_lastMessages_currentChat_PS(req, res);
            res.status(200).json(m_postToDB);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_get_lastMessages_currentChat: " + error);
        }
    }
    //---------
    async m_get_PreviousItems_chatList_CurrentProject(req, res) {
        try {
            const m_postToDB = await m_PostService.m_get_PreviousItems_chatList_CurrentProject_PS(req, res);
            res.status(200).json(m_postToDB);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_get_PreviousItems_chatList_CurrentProject: " + error);
        }
    }
    //---------
    async m_dell_One_Project(req, res) {
        try {
            const m_postToDB = await m_PostService.m_dell_One_Project_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController: " + error);
        }
    }
    //---------
    async m_dell_One_sub_Project(req, res) {
        try {
            const m_postToDB = await m_PostService.m_dell_One_sub_Project_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController: " + error);
        }
    }
    //---------
    async m_updateTeamForProject(req, res) {
        try {
            const m_postToDB = await m_PostService.m_updateTeamForProject_PS(req, res);
            res.status(200).json(m_postToDB);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController: " + error);
        }
    }
    //---------
    async m_update_ofResponsibleList_subProject(req, res) {
        try {
            const m_postToDB = await m_PostService.m_update_ofResponsibleList_subProject_PS(req, res);
            res.status(200).json(m_postToDB);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_update_ofResponsibleList_subProject: " + error);
        }
    }
    //---------
    async m_dellAllProjects(req, res) {
        try {
            const m_postToDB = await m_PostService.m_dellAllProjects_PS();
            res.status(200).json(m_postToDB);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController: " + error);
        }
    }
    //---------
    async m_set_subProject_settings(req, res) {
        try {
            const m_postToDB = await m_PostService.m_set_subProject_settings_PS(req);
            res.status(200).json(m_postToDB);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController: " + error);
        }
    }
    //---------
    async m_set_project_settings(req, res) {
        try {
            const m_postToDB = await m_PostService.m_set_project_settings_PS(req);
            res.status(200).json(m_postToDB);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController: " + error);
        }
    }
    //---------
    async m_addUser_toContactList(req, res) {
        try {
            const m_postToDB = await m_PostService.m_addUser_toContactList_PS(req);
            res.status(200).json(m_postToDB);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController: " + error);
        }
    }
    //---------
    async m_deleteUsers_fromContactList(req, res) {
        try {
            const m_postToDB = await m_PostService.m_deleteUsers_fromContactList_PS(req);
            res.status(200).json(m_postToDB);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_deleteUsers_fromContactList: " + error);
        }
    }
    //---------
    async m_set_newContactList(req, res) {
        try {
            await m_PostService.m_set_newContactList_PS(req, res);
            // const m_postToDB = await m_PostService.m_set_newContactList_PS(req, res);
            // res.status(200).json(m_postToDB);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_set_newContactList_PS: " + error);
        }
    }

    //========================
    // Обработчики для foolTimeSubscriber    
    async m_subscribeFullTime(req, res) {

        try {
            //const longPoollingToServer = await m_PostService.m_subscribeFullTime_PS(req, res);
            //res.status(200).json(longPoollingToServer); // res вызываем внутри longPoollingToServer
            await m_PostService.m_subscribeFullTime_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_subscribeFullTime: " + error);
        }
    }
    //---------
    async m_getUsersOnlineStatusFromServer_forCurrentProject(req, res) {
        try {
            await m_PostService.m_getUsersOnlineStatusFromServer_forCurrentProject_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_getUsersOnlineStatusFromServer_forCurrentProject: " + error);
        }
    }






    //  Настройки пользователя ========================================
    //---------
    async m_setUserSettings(req, res) {
        try {
            await m_PostService.m_setUserSettings_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_setUserSettings: " + error);
        }
    }
    //---------
    async m_uploadAvatarUser(req, res) {
        try {
            await m_PostService.m_uploadAvatarUser_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_uploadAvatarUser: " + error);
        }
    }
    //---------
    async m_deleteAvatarFromServer(req, res) {
        try {
            await m_PostService.m_deleteAvatarFromServer_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_deleteAvatarFromServer: " + error);
        }
    }
    //---------
    async m_orderTarifPlan(req, res) {
        try {
            await m_PostService.m_orderTarifPlan_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_orderTarifPlan: " + error);
        }
    }










    // Корп Аккаунты ========================================
    //---------
    async m_addNewCorpAccount(req, res) {
        try {
            await m_PostService.m_addNewCorpAccount_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_getUsersOnlineStatusFromServer_forContactListCurrentAdmin: " + error);
        }
    }
    //---------
    async m_renameCorpAccount(req, res) {
        try {
            await m_PostService.m_renameCorpAccount_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_renameCorpAccount: " + error);
        }
    }
    //---------
    async m_deleteCorpAccount(req, res) {
        try {
            await m_PostService.m_deleteCorpAccount_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_deleteCorpAccount: " + error);
        }
    }
    //---------
    async m_ignorOwnerCorpAccount(req, res) {
        try {
            await m_PostService.m_ignorOwnerCorpAccount_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_ignorOwnerCorpAccount: " + error);
        }
    }
    //---------
    async m_restoreOwnerCorpAccount(req, res) {
        try {
            await m_PostService.m_restoreOwnerCorpAccount_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_restoreOwnerCorpAccount: " + error);
        }
    }





    //---------
    // Не используется
    async m_getUsersOnlineStatusFromServer_forContactListCurrentAdmin(req, res) {
        try {
            await m_PostService.m_getUsersOnlineStatusFromServer_forContactListCurrentAdmin_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_getUsersOnlineStatusFromServer_forContactListCurrentAdmin: " + error);
        }
    }

    //========================
    // Обработчики для уведомлений
    async m_timeUpdate_wasReadChat(req, res) {

        try {
            //const longPoollingToServer = await m_PostService.m_subscribeFullTime_PS(req, res);
            //res.status(200).json(longPoollingToServer); // res вызываем внутри longPoollingToServer
            await m_PostService.m_timeUpdate_wasReadChat_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_timeUpdate_wasReadChat_PS: " + error);
        }
    }
    //---------
    async m_timeUpdate_wasReadProjectSettings(req, res) {

        try {
            //const longPoollingToServer = await m_PostService.m_subscribeFullTime_PS(req, res);
            //res.status(200).json(longPoollingToServer); // res вызываем внутри longPoollingToServer
            await m_PostService.m_timeUpdate_wasReadProjectSettings_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_timeUpdate_wasReadProjectSettings_PS: " + error);
        }
    }
    //---------
    async m_timeUpdate_wasRead_subChat(req, res) {
        try {
            //const longPoollingToServer = await m_PostService.m_subscribeFullTime_PS(req, res);
            //res.status(200).json(longPoollingToServer); // res вызываем внутри longPoollingToServer
            await m_PostService.m_timeUpdate_wasRead_subChat_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_timeUpdate_wasReadChat_PS: " + error);
        }
    }
    //---------
    async m_timeUpdate_wasRead_subProject_settings(req, res) {
        try {
            await m_PostService.m_timeUpdate_wasRead_subProject_settings_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_timeUpdate_wasRead_subProject_settings_PS: " + error);
        }
    }
    //---------
    async m_confirmOnlineStatus(req, res) {
        try {
            await m_PostService.m_confirmOnlineStatus_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_confirmOnlineStatus: " + error);
        }
    }

    //========================

    // Загрузка/скачивание файлов:
    // НЕ ИСПОЛЬЗУЕМ, вместо этого дагружаем по одному файлу
    async m_uploadFilesToServer(req, res) {
        try {
            await m_PostService.m_uploadFilesToServer_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- uploadFilesToServer: " + error);
        }
    }
    //---------
    async m_uploadOneFileToServer(req, res) {
        try {
            await m_PostService.m_uploadOneFileToServer_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_uploadOneFileToServer: " + error);
        }
    }
    //---------
    async m_downloadOneFileFromServer(req, res) {
        try {
            await m_PostService.m_downloadOneFileFromServer_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_downloadOneFileFromServer_PS: " + error);
        }
    }
    //---------
    async m_deleteFilesFromServer(req, res) {
        try {
            await m_PostService.m_deleteFilesFromServer_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- deleteFilesFromServer: " + error);
        }
    }
    //---------
    async m_getFilesListFromServer(req, res) {
        try {
            await m_PostService.m_getFilesListFromServer_PS(req, res);
        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_getFilesListFromServer_PS: " + error);
        }
    }


    //========================
    // Авторизация:
    async m_registration_User(req, res, next) {
        try {
            console.log("Запуск PostController - m_registration_User: req= ");
            // console.log(req); 

            /* 
            // просматриваем результат валидации, см. видео 54:20
            const mErrors = validationResult(req);
            // проверяем: если в массиве ошибок mErrors присутствуют какие-то данные (т.е. перечень ошибок), то соотв. реагируем
            if (!mErrors.isEmpty()) {
                console.log("mErrors.isAmpty= ");
                console.log(mErrors.isAmpty);
                return next(m_ApiErrors.m_BadRequest("Ошибка валидации при регистрации", mErrors));
            }
             */

            // если пред проверка пройдена - проходим дальше
            await m_PostService.m_registration_User_PS(req, res);

        } catch (error) {
            // res.status(500).json("Ошибка из m_PostController --- m_registration_User: " + error);
            next(error);
        }
    }
    //---------
    async m_confirmRegistrationUser(req, res, next) {
        try {
            console.log("Из PostController - m_confirmRegistrationUser");
            // console.log(req);
            // const m_postToDB = await m_PostService.m_confirmRegistrationUser_PS(req, res);
            // res.status(200).json(m_postToDB);

            await m_PostService.m_confirmRegistrationUser_PS(req, res);

        } catch (error) {
            // res.status(500).json("Ошибка из m_PostController --- m_confirmRegistrationUser: " + error);
            next(error);
        }
    }

    //---------

    async m_changePassword(req, res, next) {
        try {
            // console.log("Запуск PostController - m_registration_User: req= ");
            // если пред проверка пройдена - проходим дальше
            await m_PostService.m_changePassword_PS(req, res);

        } catch (error) {
            next(error);
        }
    }

    //---------

    async m_confirmChangePassword(req, res, next) {
        try {
            // console.log("Запуск PostController - m_confirm_changeORrecoverForgottenPassword");
            // если пред проверка пройдена - проходим дальше
            await m_PostService.m_confirmChangePassword_PS(req, res);
        } catch (error) {
            next(error);
        }
    }

    //---------
    async m_logIn(req, res, next) {
        try {
            await m_PostService.m_logIn_PS(req, res);
        } catch (error) {
            // res.status(500).json("Ошибка из m_PostController --- m_logIn: " + error);
            next(error);
        }
    }
    //---------
    // эту функцию не используем, вместо нее "m_logOutOneGadget_PS"
    async m_logOut(req, res, next) {
        // эту функцию не используем, вместо нее "m_logOutOneGadget_PS"
        try {
            //  console.log("Из PostController - m_logOut: req= ");
            // console.log(req);
            await m_PostService.m_logOut_PS(req, res);

        } catch (error) {
            // res.status(500).json("Ошибка из m_PostController --- m_logOut: " + error);
            next(error);
        }
    }

    //---------
    async m_logOutOneGadget(req, res, next) {
        try {
            await m_PostService.m_logOutOneGadget_PS(req, res);
        }
        catch (error) {
            // res.status(500).json("Ошибка из m_logOutOneGadget --- m_logIn: " + error);
            next(error);
        }
    }

    //---------

    async m_logOutAllGadgets(req, res, next) {
        try {
            //  console.log("Из PostController - m_logOut: req= ");
            // console.log(req);
            await m_PostService.m_logOutAllGadgets_PS(req, res);

        }
        catch (error) {
            // res.status(500).json("Ошибка из m_logOutAllGadgets --- m_logIn: " + error);
            next(error);
        }
    }

    //---------
    async m_refreshToken(req, res, next) {
        try {
            // console.log("Из PostController - m_uploadFilesToServer: req= ");
            // console.log(req);
            await m_PostService.m_refreshToken_PS(req, res);

        } catch (error) {
            // res.status(500).json("Ошибка из m_PostController --- m_refreshToken: " + error);
            next(error);
        }
    }
    //---------  test_01
    async m_test_01(req, res, next) {
        try {
            await m_PostService.m_test_01_PS(req, res);
        } catch (error) {
            next(error);
        }
    }

    //---------
    async m_GoogleAuth_01(req, res) {
        try {
            await m_PostService.m_GoogleAuth_01_PS(req, res);

        } catch (error) {
            res.status(500).json("Ошибка из m_PostController --- m_GoogleAuth_01: " + error);
        }
    }
}

//===============================
export default new m_PostController();






