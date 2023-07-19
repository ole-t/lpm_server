
import m_Model from './m_Model_Schema.js';

class m_PostService {

    async m_getAllDB_PS() {
        try {
            // получаем содержимое всей БД Mongo
            const mongoAllItems = await m_Model.find();
            return (mongoAllItems);
        } catch (error) {
            return ("Ошибка из m_PostService: " + error);
        }
    }

    async m_addNewItem_PS(m_reqBody) {

        let calculateResult = calcPrimeArrayAndMedian(m_reqBody.dataFromClient );
        try {
            // создаем переменную m_postToDB на основе ранее созданной модели данных. Функция "create" отправляет заброс в БД mongoDB.
            // можно было бы и не создавать переменную "m_postToDB", а просто прописать строку:
            // await m_Model.create ...... и далее Но при этом создание переменной "m_postToDB" позволяет удобно манипулировать  содержанием нашего запроса, например - выводить его в консоль
            const m_created_postToDB = await m_Model.create({
                mMongo_timeOfReq: calculateResult.timeRequest,
                mMongo_maxValue: calculateResult.maxValue,
                mMongo_arrayOfNumbers: calculateResult.arrayOfNumbers,
                mMongo_arrayOfMedians: calculateResult.arrayMedian
            })
            // получаем содержимое всей БД Mongo
            const mongoAllItems = await m_Model.find();
            return (mongoAllItems);
        } catch (error) {
            return ("Ошибка из m_PostService: " + error);
        }
    }

    async m_delOneItem_PS(m_reqBody) {
        try {
            // удаляем одну запись
            const m_created_postToDB = await m_Model.findByIdAndDelete(m_reqBody.dell_ItemID);
            const mongoAllItems = await m_Model.find();
            return (mongoAllItems);
        } catch (error) {
            return ("Ошибка из m_PostService: " + error);
        }
    }

    async m_delAllItems_PS() {
        try {
            const m_postToDB = await m_Model.deleteMany();
            const mongoAllItems = await m_Model.find();
            return (mongoAllItems);
        } catch (error) {
            return ("Ошибка из m_PostService: " + error);
        }
    }
}

//===============================

function calcPrimeArrayAndMedian(data) {
    let arrayNumbers = [];
    let arrayMedian = [];
    if (data > 9) {
        // добавляем по умолчанию 2 и 3
        arrayNumbers.push(2);
        arrayNumbers.push(3);
        for (let i = 4; i < data; i++) {
            if ((i % 2) === 0) continue;
            if ((i % 3) === 0) continue;
            if (i === 5) { arrayNumbers.push(i); continue }
            if ((i % 5) === 0) continue;
            if (i === 7) { arrayNumbers.push(i); continue }
            if ((i % 7) === 0) continue;
            arrayNumbers.push(i);  // добавляем числа, прошедшие предыдущую отфильтровку
        }
        // arrayNumbers.sort((a, b) => { return a - b })
        // определяем медиану
        let lengthArray = arrayNumbers.length;
        if ((lengthArray % 2) === 0) {
            let half_length = lengthArray / 2;
            arrayMedian.push(arrayNumbers[half_length - 1]); // т.к. индекс масс. нач с ноля
            arrayMedian.push(arrayNumbers[half_length]);
        }
        else {
            let half_length = Math.ceil(lengthArray / 2);
            arrayMedian.push(arrayNumbers[half_length - 1]); // т.к. индекс масс. нач с ноля
        }
    }

    let calcResult = {
        timeRequest: new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString(),
        maxValue: data,        
        arrayOfNumbers: arrayNumbers,
        arrayMedian: arrayMedian,
    }
    // console.log("calcResult:");
    // console.log(calcResult);
    return calcResult;

}

//===============================









//===============================
export default new m_PostService();