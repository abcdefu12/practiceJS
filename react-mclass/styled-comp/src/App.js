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

//imp
function App() {
  return(
    <Father>
      <Box bgColor="teal">
        <Text>HELLO</Text>
      </Box>
      <Circle bgColor="whitesmoke" />
      <Box bgColor="tomato" />
    </Father>
  );
}

export default App;
