import CONSTANTS from './constants';

const updateToDoAction = (payload) => ({
  type: CONSTANTS.UPDATE_TODO,
  payload,
});

export default updateToDoAction;
