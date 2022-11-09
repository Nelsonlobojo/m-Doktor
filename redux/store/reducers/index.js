import {combineReducers} from 'redux';
import DoctorReducer from './DoctorReducer';

const reducers = combineReducers({
   doctor: DoctorReducer
})

export default reducers;