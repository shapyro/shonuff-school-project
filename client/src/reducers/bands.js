function postBands(state = [], action) {
  switch(action.type){
    case 'ADD_BAND':
      return [...state,{
        bandId: action.bandId,
        bandName: action.bandName,
        description: action.description,
        city: action.city,
        state: action.state
      }];
    default:
      return state;
  }
  return state;
}

function getBands(state = [], action) {
  switch(action.type){
    case 'GET_BANDS':
      return [...state,{
        bandId: action.bandId,
        bandName: action.bandName,
        description: action.description,
        city: action.city,
        state: action.state
      }];
    default:
      return state;
  }
  return state;
}


function bands(state = [], action) {
  if(typeof action.bandId !== 'undefined'){
    return {
      // take current state
      ...state,
      // overwrite post with new one
      [action.bandId]: postBands(state[action.bandId], action)
    }
  }
  return state;
}

export default bands;