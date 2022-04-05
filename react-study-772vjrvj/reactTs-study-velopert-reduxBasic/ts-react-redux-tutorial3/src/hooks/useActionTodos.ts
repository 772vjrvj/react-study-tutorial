import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {removeTodo, toggleTodo} from "../modules/todos";

export default function useActionTodos(id: number){

    const dispatch = useDispatch();
    const useToggleTodos = useCallback(() => dispatch(toggleTodo(id)),[dispatch, id]);
    const useRemoveTodos = useCallback(() => dispatch(removeTodo(id)),[dispatch, id]);
    return {useToggleTodos, useRemoveTodos}
}
