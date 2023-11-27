import React, { useReducer, ChangeEvent } from 'react';

interface Todos {
  id: number;
  text: string;
}

interface State {
  draft: string;
  todos: Todos[];
}

interface Action {
  type: 'changed_draft' | 'added_todo';
  nextDraft?: string;
}

interface TodoListProps {
  username: string;
}

function createInitialState(username: string): State {
  const initialTodos: Todos[] = [];
  for (let i = 0; i < 10; i++) {
    initialTodos.push({
      id: i,
      text: `${username}'s task #${i + 1}`,
    });
  }
  return {
    draft: '',
    todos: initialTodos,
  };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'changed_draft':
      return {
        draft: action.nextDraft || '',
        todos: state.todos,
      };
    case 'added_todo':
      return {
        draft: '',
        todos: [
          {
            id: state.todos.length,
            text: state.draft,
          },
          ...state.todos,
        ],
      };
    default:
      throw new Error('Unknown action: ' + action.type);
  }
}

const TodoList: React.FC<TodoListProps> = ({ username }) => {
  const [state, dispatch] = useReducer(
    reducer,
    username,
    createInitialState
  );

  const handleDraftChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'changed_draft',
      nextDraft: e.target.value,
    });
  };

  const handleAddTodo = () => {
    dispatch({ type: 'added_todo' });
  };

  return (
    <>
      <input
        value={state.draft}
        onChange={handleDraftChange}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {state.todos.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
