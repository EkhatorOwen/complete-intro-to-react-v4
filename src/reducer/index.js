import {combineReducers} from 'redux';
import animal from './animal';
import breed from './breed';
import breeds from './breeds';
import location from './index'

export default combineReducers({
  location,
  animal,
  breed,
  breeds
})