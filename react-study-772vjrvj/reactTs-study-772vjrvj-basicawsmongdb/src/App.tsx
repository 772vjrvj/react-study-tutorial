import React from 'react';
import BoardOne from './components/BoardOne';
import BoardList from "./components/BoardList";
import BoardDelete from "./components/BoardDelete";
import BoardInsert from "./components/BoardInsert";

function App() {


    return (
        <>
            <BoardOne/>
            <BoardList/>
            <BoardDelete/>
            <BoardInsert/>
        </>
    );
}

export default App;
