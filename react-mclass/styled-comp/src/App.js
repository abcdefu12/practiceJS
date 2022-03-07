import styled from "styled-components";

//def
const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
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
const Input = styled.input.attrs({required: true, minLength: 5})`
  background-color: blueviolet;
`;

//imp
function App() {
  return(
    <Father as="header">
      <Box bgColor="teal">
        <Text>HELLO</Text>
      </Box>
      <Circle bgColor="whitesmoke" />
      <Box bgColor="tomato" />
      <Btn>Log in</Btn>
      <Btn as="a" href="/">Log in</Btn>
      <Input />
    </Father>
  );
}

export default App;
