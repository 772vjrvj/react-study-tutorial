import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {addTodo} from '../modules/todos';

export default function useAddTodo(){
    const dispatch = useDispatch();
    const addText = useCallback((text: string) => dispatch(addTodo(text)),[dispatch]);
    return addText;
}
