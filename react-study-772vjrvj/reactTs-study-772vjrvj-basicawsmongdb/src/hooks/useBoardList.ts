import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {boardList} from '../modules/boardList';

export default function useBoardList(){
    const dispatch = useDispatch();
    const useOneBoard = useCallback(() => dispatch(boardList()),[dispatch]);
    return useOneBoard;
}
