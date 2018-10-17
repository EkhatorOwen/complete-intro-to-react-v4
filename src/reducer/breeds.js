export default function breedsReducer(state=[], action){
  // const newState = Object.assign({}, state, {location: action.payload})
  // return newState; 
  if(action.type === 'SET_BREEDS'){
    return action.payload;
  } else {
    return state
  }
}