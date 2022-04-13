import mongoose from 'mongoose';
import schema from './tuits-schema.js'
const tuitsModel = mongoose.model('TuitsModel', schema);
export default tuitsModel;