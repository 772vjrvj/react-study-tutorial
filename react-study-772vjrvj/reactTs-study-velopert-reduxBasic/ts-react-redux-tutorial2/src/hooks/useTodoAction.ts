import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {removeTodo, toggleTodo} from "../modules/todos";

export default function useTodoAction(id: number){
    const dispatch = useDispatch();
    const onToggleTodo = useCallback(() => dispatch(toggleTodo(id)),[dispatch, id]);
    const onRemoveTodo = useCallback(() => dispatch(removeTodo(id)),[dispatch, id]);
    return {onToggleTodo, onRemoveTodo}
}
