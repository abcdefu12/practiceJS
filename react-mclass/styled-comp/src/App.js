import styled, { keyframes } from "styled-components";

//def
const Father = styled.div`
  display: flex;
  background: ${(props) => props.theme.backgroundColor};
  height: 100vh;
  width: 100vw;
`;
const rotateAnim = keyframes`
  /* from{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  to{
    transform: rotate(360deg);
    border-radius: 70px;
  } */
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    border-radius: 70px;
  }
  100%{
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;
const Emoji = styled.span`
  font-size: 36px;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  animation: ${rotateAnim} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 이모지 */
  ${Emoji} {
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
`;
const Text = styled.span`
  /* color: white; */
  color: ${(props) => props.theme.textColor};
`;
const Circle = styled(Box)`
  border-radius: 50px;
`;
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border-radius: 15px;
  height: 50px;
`;
const Input = styled.input.attrs({ required: true, minLength: 5 })`
  background-color: blueviolet;
  height: 100px;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

//imp
function App() {
  return (
    <Father as="header">
      <Title>Styled Components</Title>
      <Box bgColor="teal">
        <Text>HELLO</Text>
      </Box>
      <Circle bgColor="whitesmoke" />
      <Box bgColor="tomato">
        <Emoji as="p">😍</Emoji>
      </Box>
      <Btn>Log in</Btn>
      <Btn as="a" href="/">
        Log in
      </Btn>
      <Input />
    </Father>
  );
}

export default App;
