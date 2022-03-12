import React, {useState} from "react";
import styled, { keyframes } from "styled-components";

//def

//imp
function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // console.log(event.currentTarget.value)
    const{
      currentTarget: {value},
    } = event;
    setValue(value);
  };
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log("hello",value);
  };
  const H1 = styled.h1`
    color: ${(props)=>props.theme.textColor};
  `;
  return (
    <div>
      <H1>Subject</H1>
      <form onSubmit={onSubmit}>
        <input 
          value={value}
          onChange={onChange}
          type="text" 
          placeholder="username"
        />
        <button>log in</button>
      </form>
    </div>
  );
}

export default App;