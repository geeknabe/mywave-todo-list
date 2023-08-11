import { useSelector, useDispatch } from 'react-redux';

import Seo from '../components/Seo';
import { defaultAction } from '../actions';

const IndexPage = () => {
  const obj = useSelector(({ defaultReducer }) => defaultReducer);
  const dispatch = useDispatch();
  const defaultDispatch = (payload) => dispatch(defaultAction(payload));

  return (
    <>
      <Seo title="To Do List" />
      Hello from main page
      <h1>{obj.value}</h1>
      <button
        type="button"
        onClick={() => {
          defaultDispatch({ value: 'Goodbye World' });
        }}
      >
        Trigger Action
      </button>
    </>
  );
};

export default IndexPage;
