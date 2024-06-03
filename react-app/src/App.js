import styled, { keyframes } from "styled-components"

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const anim = keyframes`
  from {
    color: yellow;
  } 
  to {
    color: black;
  }
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border-radius: 50px;
  border: 0;
`;

const Title = styled.h1`
  color: tomato;
  color: ${(props)=> props.theme.textColor}
  &:hover {
    color: teal; 
  }
`;

const Title3 = styled.h1`
  
  color: ${(props)=> props.theme.textColor}
 
`;

const Title2 = styled.h1`
  animation: ${anim} 0.5s infinite; // corrected animation syntax here
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  ${Title}:hover {
    font-size: 99px;
  }
  background-color:${props=>props.theme.backgroundColor } ;
`;

function App() {
  return (
    <Father>
      <Box bgColor="tomato">
        <Emoji>👋</Emoji> {/* Added a visible emoji */}
      </Box>
      <Circle bgColor="purple"></Circle>
      <Wrapper>  
        <Title> Hello </Title>
        <Title2>Animating Color</Title2> {/* Added text to see animation */}
        <Title3>Theme</Title3> 
      </Wrapper>
    </Father>
  );
}

export default App; 
