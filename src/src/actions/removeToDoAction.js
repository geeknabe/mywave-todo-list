import CONSTANTS from './constants';

const removeToDoAction = (payload) => ({
  type: CONSTANTS.REMOVE_TODO,
  payload,
});

export default removeToDoAction;
