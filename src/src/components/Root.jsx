import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import rootReducer from '../reducers';

const Root = ({ element, initialState }) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState || {},
  });

  return <Provider store={store}>{element}</Provider>;
};

Root.defaultProps = {
  element: <></>,
  initialState: {},
};

Root.propTypes = {
  element: PropTypes.element,
  initialState: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Root;
