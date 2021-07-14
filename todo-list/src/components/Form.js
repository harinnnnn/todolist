import React from 'react';
import './Form.css';

/*value는 인풋의 내용, onCreate는 버튼 클릭시 실행함수, 
onChange는 인풋 내용 변경 시 실행함수, onKeyPress는 인풋에서 키 입력 시 실행함수(엔터 눌렸을 때도 입력되도록)*/
const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;