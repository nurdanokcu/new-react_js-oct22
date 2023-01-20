/* eslint-disable no-console */
import React, { useState } from 'react';
import { Todo } from '../types/Todo';
import { TodoForm } from './TodoForm';

type Props = {
  todo: Todo;
  onDelete: (todo: Todo) => void;
  onUpdate: (todo: Todo) => void;
};

export const TodoInfo: React.FC<Props> = ({
  todo,
  onDelete,
  onUpdate,
}) => {
  const [isEditing, setEditing] = useState(false);

  console.log('TodoInfo', todo.id);

  const save = (updatedTodo: Todo) => {
    onUpdate(updatedTodo);
    setEditing(false);
  };

  if (isEditing) {
    return (
      <div>
        <TodoForm
          todo={todo}
          onSubmit={save}
        />
        <button
          type="button"
          onClick={() => setEditing(false)}
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div>
      <p className="todo">
        {todo.user?.name}
        {': '}
        {todo.title}
        {' - '}
        {todo.completed ? '✅' : '❌'}

      </p>

      <button
        type="button"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>

      <button
        type="button"
        onClick={() => setEditing(true)}
      >
        Edit
      </button>
    </div>
  );
};
