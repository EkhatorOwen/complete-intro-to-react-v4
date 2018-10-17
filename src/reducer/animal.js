export default function animalReducer(state='', action){
  // const newState = Object.assign({}, state, {location: action.payload})
  // return newState; 
  if(action.type === 'SET_ANIMAL'){
    return action.payload;
  } else {
    return state
  }
}