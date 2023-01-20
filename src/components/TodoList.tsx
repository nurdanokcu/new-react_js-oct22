import React from 'react';
import { Todo } from '../types/Todo';
import { TodoInfo } from './TodoInfo';

type Props = {
  todos: Todo[];
  onTodoDeleted: (todo: Todo) => void;
  onTodoUpdated:(todo: Todo) => void;
};

export const TodoList: React.FC<Props> = React.memo(
  ({ todos, onTodoDeleted, onTodoUpdated }) => {
    return (
      <div className="TodoList">
        {todos.map(todo => (
          <TodoInfo
            key={todo.id}
            todo={todo}
            onDelete={onTodoDeleted}
            onUpdate={onTodoUpdated}
          />
        ))}
      </div>
    );
  },
);
