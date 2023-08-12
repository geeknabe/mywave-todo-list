import styled from 'styled-components';
import PropTypes from 'prop-types';

import $ from '../../styles/global';
import { removeToDoAction, updateToDoAction } from '../../actions';
import useActions from '../../utils/useActions';
import RemoveIcon from '../../assets/icons/rubbish-bin.svg';
import CompletedIcon from '../../assets/icons/double-tick.svg';
import FlagIcon from '../../assets/icons/flag.svg';

const PriorityCorner = styled.div`
  width: 40px;
  height: calc(100% - 10px);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  align-self: stretch;
  padding: 5px 0;

  & > svg {
    width: 24px;
    height: 24px;
    fill: ${$.color.gray};
    transform: translateY(0);
    transition: all 0.3s ease;
    &:hover {
      cursor: pointer;
      transform: translateY(-0.1em);
    }
  }

  &.lightblue {
    & > svg {
      fill: ${$.color.lightblue};
    }
  }

  &.yellow {
    & > svg {
      fill: ${$.color.yellow};
    }
  }

  &.orange {
    & > svg {
      fill: ${$.color.orange};
    }
  }
`;

const IconCorner = styled.div`
  width: 40px;
  padding: 5px 0;
  height: calc(100% - 10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: stretch;

  & > svg {
    transition: all 0.3s ${$.easingFn.standard};
    fill: ${$.color.gray};
    &.remove-icon {
      fill: ${$.color.red};
      opacity: 0;
      height: 0;
      width: 24px;
      pointer-events: none;
    }
    &.complete-icon {
      fill: ${$.color.gray};
      width: 24px;
      height: 24px;
      pointer-events: initial;
    }
    &:hover {
      cursor: pointer;
      &.complete-icon {
        fill: ${$.color.green};
      }
    }
  }

  &.show-remove-icon {
    & > svg {
      &.remove-icon {
        opacity: 1;
        height: 24px;
        pointer-events: initial;
      }
      &.complete-icon {
        opacity: 0;
        height: 0;
        pointer-events: none;
      }

      &:hover {
        &.remove-icon {
          opacity: 0.5;
        }
      }
    }
  }
`;

const Container = styled.div`
  padding: 15px;
  border-bottom: 1px solid ${$.color.gray};
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Roboto Regular;
  user-select: none;

  &.completed {
    & input {
      pointer-events: none;
      color: ${$.color.gray};
    }

    ${IconCorner} {
      & .complete-icon {
        fill: ${$.color.green};
      }
    }

    ${PriorityCorner} {
      pointer-events: none;
    }
  }
`;

const Title = styled.input`
  font-size: 18px;
  margin-bottom: 5px;
  border: none;
  width: 100%;
  border-radius: 10px;
  width: calc(100% - 20px - 2px);
  outline: none;
  padding: 5px 10px;
  font-family: Roboto Bold;

  &:focus,
  &:hover {
    border: 1px solid ${$.color.gray};
  }
`;

const Description = styled(Title)`
  font-size: 16px;
  font-family: Roboto Regular;
`;

const Content = styled.div`
  width: calc(100% - 40px);

  & > div {
    position: relative;
  }
`;

const Underline = styled.div`
  position: absolute;
  width: 0;
  height: 1px;
  background-color: ${$.color.gray};
  top: 15px;
  transition: all 0.3s ease;

  &.underline {
    width: 100%;
  }
`;

const Row = ({ id, title, description, completed, toggle, priority }) => {
  const [updateToDo, removeToDo] = useActions([
    updateToDoAction,
    removeToDoAction,
  ]);

  return (
    <Container className={completed ? 'completed' : ''}>
      <IconCorner className={toggle ? 'show-remove-icon' : ''}>
        <CompletedIcon
          className="complete-icon"
          onClick={() => {
            updateToDo({ id, completed: !completed });
          }}
        />
        <RemoveIcon
          className="remove-icon"
          onClick={() => {
            removeToDo({ id });
          }}
        />
      </IconCorner>
      <Content>
        <div>
          <Underline className={completed ? 'underline' : ''} />
          <Title
            isCompleted={completed}
            defaultValue={title}
            readOnly={completed}
            onChange={(e) => {
              updateToDo({ title: e.target.value, id });
            }}
            placeholder="Title"
          />
        </div>
        {description && (
          <div>
            <Underline className={completed ? 'underline' : ''} />
            <Description
              isCompleted={completed}
              defaultValue={description}
              readOnly={completed}
              onChange={(e) => {
                updateToDo({ description: e.target.value, id });
              }}
              placeholder="Description"
            />
          </div>
        )}
      </Content>
      <PriorityCorner
        title="Click to set priority"
        className={priority}
        onClick={() => {
          let newPriority;

          switch (priority) {
            case '':
              newPriority = 'lightblue';
              break;
            case 'lightblue':
              newPriority = 'yellow';
              break;
            case 'yellow':
              newPriority = 'orange';
              break;
            default:
              newPriority = '';
              break;
          }

          updateToDo({ id, priority: newPriority });
        }}
      >
        <FlagIcon />
      </PriorityCorner>
    </Container>
  );
};

Row.defaultProps = {
  id: '',
  title: '',
  description: '',
  toggle: false,
  completed: false,
  priority: '',
};

Row.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  toggle: PropTypes.bool,
  completed: PropTypes.bool,
  priority: PropTypes.string,
};

export default Row;
