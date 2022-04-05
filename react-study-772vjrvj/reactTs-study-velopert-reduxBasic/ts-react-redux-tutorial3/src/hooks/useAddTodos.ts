import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {addTodo} from "../modules/todos";

export default function useAddTodos(){
    const dispatch = useDispatch();
    const useAddTodos = useCallback((text: string) => dispatch(addTodo(text)),[dispatch]);
    return useAddTodos;
}
