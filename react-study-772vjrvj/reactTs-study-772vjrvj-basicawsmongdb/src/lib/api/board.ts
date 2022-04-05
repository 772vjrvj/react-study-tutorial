import client from './client';
import {insertBoard} from "../../modules/boardInsert";

export const oneBoard = (id:string) => client.get(`https://56up25mi5j.execute-api.ap-northeast-2.amazonaws.com/testapi/board/${id}`);
export const boardList = () => client.get(`https://56up25mi5j.execute-api.ap-northeast-2.amazonaws.com/testapi/board`);
export const boardDelete = (id:string) => client.delete(`https://56up25mi5j.execute-api.ap-northeast-2.amazonaws.com/2021-06-12/board/${id}`, {
    headers:
        {
            'password': '11',
            'Content-Type': 'application/json'
        },
} );
export const boardInsert = (board:insertBoard) => client.post(`https://56up25mi5j.execute-api.ap-northeast-2.amazonaws.com/testapi/board`, {...board},
    {
    headers:
        {
            'Content-Type': 'application/json'
        },
} );

export const boardUpdate = (board:insertBoard) => client.put(`https://56up25mi5j.execute-api.ap-northeast-2.amazonaws.com/testapi/board/${board.id}`, {...board},
    {
        headers:
            {
                'password': '11',
                'Content-Type': 'application/json'
            },
    } );


