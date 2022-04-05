import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../modules';
import BoardItem from './BoardItem';
import useBoardList from '../hooks/useBoardList';


function BoardOne(){

    const boardList = useSelector((state: RootState) => state.boardList);
    const boardListFn = useBoardList();
    const getList = () => {
        boardListFn();
    }

    return (
        <>
            <button onClick={getList}>boardList가져오기</button>
            <ul>
                {boardList.map((board, idx) =>
                    <BoardItem key={idx} board={board} />
                )}
            </ul>
        </>
    )
}

export default BoardOne;
