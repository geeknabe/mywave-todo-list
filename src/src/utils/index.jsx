import { nanoid } from 'nanoid';

const addKeys = (items) =>
  items.map((item) => ({
    ...item,
    key: nanoid(),
  }));

export default {};

export { addKeys };
