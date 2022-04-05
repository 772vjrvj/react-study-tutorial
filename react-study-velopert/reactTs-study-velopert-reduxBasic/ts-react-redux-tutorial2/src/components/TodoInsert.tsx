import React, {useState} from 'react';
import useAddTodo from "../hooks/useAddTodo";

function TodoInsert(){

    const [value, setValue] = useState('');
    const addValue = useAddTodo();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addValue(value);
        setValue('');
    }

    return(
        <form onSubmit={onSubmit}>
            <input
                placeholder="입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">클릭</button>
        </form>
    );
}

export default TodoInsert;
