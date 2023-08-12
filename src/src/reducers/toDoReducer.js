import { nanoid } from 'nanoid';
import CONSTANTS from '../actions/constants';

const lsName = 'mywave-todo-list';
const ls = typeof window !== 'undefined' ? localStorage : {};
const initialState = {
  items: [],
};

const set = (items) => {
  ls.setItem(lsName, JSON.stringify(items));
};

const get = () => JSON.parse(ls.getItem(lsName) || '[]');

const toDoReducer = (state = initialState, { payload, type }) => {
  let items;

  switch (type) {
    case CONSTANTS.REMOVE_TODO:
      items = [...state.items].filter(({ id }) => id !== payload.id);

      set(items);

      return { ...state, items };
    case CONSTANTS.UPDATE_TODO:
      items = [...state.items].map(({ id, ...rest }) => {
        if (id === payload.id) {
          return {
            id,
            ...rest,
            ...payload,
          };
        }

        return {
          id,
          ...rest,
        };
      });

      set(items);

      return { ...state, items };
    case CONSTANTS.ADD_TODO:
      items = [...state.items];
      items.unshift({ ...payload, id: nanoid() });
      set(items);

      return { ...state, items };
    case CONSTANTS.GET_TODOS:
      items = [];

      get().forEach(({ completed, ...rest }) => {
        if (completed) {
          items.push({ completed, ...rest });
        } else {
          items.unshift({ completed, ...rest });
        }
      });

      return {
        items,
      };
    default:
      return state;
  }
};

export default toDoReducer;
