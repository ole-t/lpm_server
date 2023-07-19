
import mongoose from "mongoose";

// const mShemePost = new mongoose.Schema({
const mShemePost = mongoose.Schema({
    mMongo_timeOfReq: { type: String, required: true },
    mMongo_maxValue: { type: Number, required: true },
    mMongo_arrayOfNumbers: { type: Array, required: true },
    mMongo_arrayOfMedians: { type: Array, required: true }
})

// ниже экспортируем переменную 'm_Model', созданную на основании сзхемы 'mShemePost'
export default mongoose.model('m_Model', mShemePost);
