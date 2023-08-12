import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import $ from '../../styles/global';
import { getToDosAction } from '../../actions';
import useActions from '../../utils/useActions';
import AddIcon from '../../assets/icons/add.svg';
import RemoveIcon from '../../assets/icons/rubbish-bin.svg';
import CompleteIcon from '../../assets/icons/double-tick.svg';
import NewToDo from './NewToDo';
import Row from './Row';
import ToggleButton from './ToggleButton';

const Section = styled.section`
  ${$.device.desktop} {
    width: 970px;
    margin: auto;
  }

  ${$.device.tablet} {
    width: calc(100% - 40px);
    margin: 0 20px;
  }

  ${$.device.mobile} {
    width: calc(100% - 40px);
    margin: 0 20px;
  }
`;

const Container = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);

  ${$.device.desktop} {
    & > * {
      width: 500px;
      margin: 0 auto;
    }
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-family: Roboto Bold;
  text-align: center;
  margin-bottom: 20px;
`;

const ToolBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 20px 0;

  & > *:not(:last-child) {
    margin-right: 5px;
  }
`;

const List = styled.div`
  border: 1px solid ${$.color.gray};
  flex-grow: 1;
  border-radius: 10px;
  overflow: scroll;
  margin-top: 20px;

  ${$.device.tablet} {
    width: 100%;
  }

  ${$.device.mobile} {
    width: 100%;
  }
`;

const ShowAddToDoButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${$.color.lightblue};
  color: #fff;
  user-select: none;
  padding: 5px 15px;
  border-radius: 10px;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: Roboto Bold;
  line-height: 18px;
  border: 2px solid transparent;
  transition: all 0.35s ${$.easingFn.standard};

  & > svg {
    margin-right: 5px;
    width: 20px;
    height: 20px;
    fill: #fff;
    transition: all 0.35s ${$.easingFn.standard};
  }

  &:hover {
    background-color: #fff;
    color: ${$.color.lightblue};
    border: 2px solid ${$.color.lightblue};
    cursor: pointer;

    & > svg {
      fill: ${$.color.lightblue};
    }
  }
`;

const ToggleButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > * {
    &:not(:last-child) {
      margin-right: 5px;
    }
    &:first-child {
      fill: ${$.color.green};
    }
    &:last-child {
      fill: ${$.color.red};
    }
  }
`;

const ToDoList = () => {
  const [toggleRemoveButton, setToggleRemoveButton] = useState(false);
  const [showNewToDo, setShowNewToDo] = useState(false);
  const data = useSelector(({ toDo }) => toDo);
  const [getToDos] = useActions([getToDosAction]);

  useEffect(() => {
    getToDos();
  }, []);

  return (
    <Section>
      <Container>
        <Title>To Do List</Title>
        <ToolBar>
          <ShowAddToDoButton
            title="Click to add new to do"
            onClick={() => {
              setShowNewToDo((prev) => !prev);
            }}
          >
            <AddIcon />
            Add
          </ShowAddToDoButton>
          <ToggleButtonContainer>
            <CompleteIcon />
            <ToggleButton
              toggled={toggleRemoveButton}
              onClick={(state) => {
                setToggleRemoveButton(state);
              }}
            />
            <RemoveIcon />
          </ToggleButtonContainer>
        </ToolBar>
        <NewToDo showNewToDo={showNewToDo} setShowNewToDo={setShowNewToDo} />
        <List>
          <div>
            {data.items.map(
              ({ id, title, description, completed = false, priority }) => (
                <Row
                  id={id}
                  title={title}
                  description={description}
                  key={id}
                  completed={completed}
                  toggle={toggleRemoveButton}
                  priority={priority}
                />
              )
            )}
          </div>
        </List>
      </Container>
    </Section>
  );
};

export default ToDoList;
