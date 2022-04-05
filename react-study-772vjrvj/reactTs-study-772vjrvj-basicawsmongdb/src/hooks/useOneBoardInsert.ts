import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {changeField, changeValue, insertBoardAction, updateBoardAction} from '../modules/boardInsert';
import {Board} from "../modules/board";

export default function useOneBoardInsert(){
    const dispatch = useDispatch();
    const changeBoard = useCallback((keyValue : changeValue) => dispatch(changeField(keyValue)),[dispatch]);
    const boardInsert = useCallback((board : Board) => dispatch(insertBoardAction(board)),[dispatch]);
    const boardUpdate = useCallback((board : Board) => dispatch(updateBoardAction(board)),[dispatch]);

    return { changeBoard ,boardInsert, boardUpdate};
}
