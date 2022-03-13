import React, {useState} from "react";
import styled from "styled-components";

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
  const onClick = (event:React.FormEvent<HTMLButtonElement>) => {
    // to specify event there are not typical form, it can be modified anyway.
    // if button is not inside form, then you can use mouse event instead of form event.
    event.preventDefault();
  }
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
        <button onClick={onClick}>log in</button>
      </form>
    </div>
  );
}

export default App;