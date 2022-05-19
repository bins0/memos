import { useState } from "react";

const MemoList = () =>{
    const [memos, setMemos] = useState([
        {id:1,memo:'내용'},
        {id:2,memo:'메모를만들었습니다'},
    ]);
    const [inputText,setInputText] = useState('');
    const [inputId,setInputId] = useState(3);

    //메모삭제
    const deleteMemo = (id) =>{
        const nextMemo = memos.filter(m => m.id !== id);
        setMemos(nextMemo);
    };

    //메모추가
    const changeMemo = (e) =>{setInputText(e.target.value)}

    const getMemo = () =>{
        const nextMemo = memos.concat({
            id: inputId,
            memo: inputText
        })
        setMemos(nextMemo)
        setInputId(inputId + 1)
    }
    return(
        <div>
            <h1>메모</h1>
            <input
            type='text'
            name='inputText'
            onChange={changeMemo}
            ></input>
            <button onClick={getMemo}>추가</button>
            <ul>
                {
                    memos.map((m) =>(
                        <li
                        key={m.id}
                       >{m.memo}<button onClick={()=>{deleteMemo(m.id)}}>X</button></li>
                    ) 
                       
                    )
                }
            </ul>
        </div>
    )
}

export default MemoList