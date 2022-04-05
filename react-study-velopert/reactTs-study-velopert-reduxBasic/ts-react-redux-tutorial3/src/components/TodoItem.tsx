import React from 'react';
import {Todo} from "../modules/todos";
import './TodoItem.css'
import useActionTodos from "../hooks/useActionTodos";

type TodoItemProps = {
    todo: Todo
}

function TodoItem({ todo }: TodoItemProps){

    const {useToggleTodos, useRemoveTodos} = useActionTodos(todo.id);
    return (
        <li className={`TodoItem ${todo.done? 'done': ''}`}>
            <span className='text' onClick={useToggleTodos}>{todo.text}</span>
            <span onClick={useRemoveTodos} className='remove'>(X)</span>
        </li>
    )
}

export default TodoItem;
