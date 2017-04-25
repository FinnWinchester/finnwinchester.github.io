
export default (state = {}, action) => {
  let newState = Object.assign({}, state);
  newState.unique_id = Math.random();
  switch (action.type) {
    case 'INIT':
      break;
    case 'SET_SUBHEADER':
      newState.subheader = action.data.subheader;
      break;
    default:
      break;
  }
  return newState;
}
