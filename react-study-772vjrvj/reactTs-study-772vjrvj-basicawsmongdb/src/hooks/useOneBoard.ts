import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {oneBoard} from '../modules/board';

export default function useOneBoard(){
    const dispatch = useDispatch();
    const useOneBoard = useCallback((id: string) => dispatch(oneBoard(id)),[dispatch]);
    return useOneBoard;
}
