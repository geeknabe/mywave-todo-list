import CONSTANTS from './constants';

const addToDoAction = (payload) => ({
  type: CONSTANTS.ADD_TODO,
  payload,
});

export default addToDoAction;
