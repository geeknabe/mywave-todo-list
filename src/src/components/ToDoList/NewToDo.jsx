import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import $ from '../../styles/global';
import { addToDoAction } from '../../actions';
import useActions from '../../utils/useActions';

const Container = styled.div`
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.35s ${$.easingFn.standard}, max-height 0.25s ease-out;

  &.show {
    opacity: 1;
    max-height: 250px;
  }

  & > input {
    border: 1px solid ${$.color.gray};
    border-radius: 10px;
    width: calc(100% - 20px - 2px);
    outline: none;
    padding: 10px;

    &:first-child {
      margin-bottom: 10px;
      font-family: Roboto Bold;
      font-size: 17px;
    }

    &:focus {
      border: 1px solid ${$.color.black};
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;

  & > *:not(:last-child) {
    margin-right: 5px;
  }
`;

const AddToDoButton = styled.div`
  display: inline-block;
  background-color: ${$.color.lightblue};
  color: #fff;
  padding: 6px 15px;
  border-radius: 10px;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: Roboto Bold;
  line-height: 18px;
  border: 2px solid transparent;
  transition: all 0.35s ${$.easingFn.standard};

  &:hover {
    background-color: #fff;
    color: ${$.color.lightblue};
    border: 2px solid ${$.color.lightblue};
    cursor: pointer;
  }
`;

const CancelToDoButton = styled(AddToDoButton)`
  background-color: ${$.color.gray};
  color: ${$.color.black};

  &:hover {
    color: ${$.color.gray};
    border: 2px solid ${$.color.gray};
  }
`;

const NewToDo = ({ showNewToDo, setShowNewToDo }) => {
  const [newToDo, setNewToDo] = useState({ title: '', description: '' });
  const [addToDo] = useActions([addToDoAction]);

  return (
    <Container className={showNewToDo ? 'show' : ''}>
      <input
        type="text"
        placeholder="Title"
        value={newToDo.title || ''}
        onChange={(e) => {
          setNewToDo((prev) => ({
            ...prev,
            title: e.target.value,
          }));
        }}
      />
      <input
        type="text"
        placeholder="Description"
        value={newToDo.description || ''}
        onChange={(e) => {
          setNewToDo((prev) => ({
            ...prev,
            description: e.target.value,
          }));
        }}
      />
      <ButtonsContainer>
        <CancelToDoButton
          title="Cancel"
          onClick={() => {
            setNewToDo({ title: '', description: '' });
            setShowNewToDo(false);
          }}
        >
          Cancel
        </CancelToDoButton>
        <AddToDoButton
          title="Submit new to do"
          onClick={() => {
            if (newToDo.title) {
              addToDo(newToDo);
              setNewToDo({ title: '', description: '' });
              setShowNewToDo(false);
            }
          }}
        >
          Submit
        </AddToDoButton>
      </ButtonsContainer>
    </Container>
  );
};

NewToDo.propTypes = {
  showNewToDo: PropTypes.bool,
  setShowNewToDo: PropTypes.func,
};

NewToDo.defaultProps = {
  showNewToDo: false,
  setShowNewToDo: () => {},
};

export default NewToDo;
