import { useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import $ from '../../styles/global';

const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;

  & > input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background-color: ${$.color.black};
    }

    &:checked + span:before {
      transform: translateX(18.5px);
    }
  }

  & > span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${$.color.black};
    transition: 0.3s;
    border-radius: 30px;

    &:before {
      position: absolute;
      content: '';
      height: 14px;
      width: 14px;
      left: 4px;
      top: 3px;
      background-color: #fff;
      border-radius: 999px;
      transition: 0.3s;
    }
  }
`;

const ToggleButton = ({ toggled, onClick }) => {
  const [isToggled, setIsToggled] = useState(toggled);

  return (
    <Container title="Click to toggle">
      <input
        type="checkbox"
        defaultChecked={isToggled}
        onClick={() => {
          setIsToggled((prev) => !prev);
          onClick(!isToggled);
        }}
      />
      <span />
    </Container>
  );
};

ToggleButton.defaultProps = {
  toggled: false,
  onClick: () => {},
};

ToggleButton.propTypes = {
  toggled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ToggleButton;
