// add band
export function addBand(bandId, bandName, description, city, state) {
  return {
    type: 'ADD_BAND',
    bandId,
    bandName,
    description,
    city,
    state
  }
}


export function getBands(bandId, bandName, description, city, state) {
  return {
    type: 'GET_BANDS',
    bandId,
    bandName,
    description,
    city,
    state
  }
}
