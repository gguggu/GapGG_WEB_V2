import React, { KeyboardEvent } from 'react';
import './InputForm.scss';

interface Props {
  clickFunc: () => void;
  changeFunc: () => void;
  placeHolder: string;
}

const InputForm = ({ clickFunc, changeFunc, placeHolder }: Props) : JSX.Element => {
  return (
    <label className="InputForm">
      <input placeholder={placeHolder} onKeyUp={(e : KeyboardEvent<HTMLInputElement>) => {
        if(e.keyCode === 13)
          clickFunc();
      }} onChange={changeFunc}/>
      <button onClick={clickFunc}>검색</button>
    </label>
  );
};

export default InputForm;
