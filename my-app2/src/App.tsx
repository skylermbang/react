import { useState } from "react";
import Circle from "./Circle";
import styled from "styled-components";

function App() {
  const [name, setName] = useState("");

  const ThemeContainer = styled.div`
    background-color: ${(props) => props.theme.bgColor}
    `

  const H1= styled.h1`
  color: ${(props) => props.theme.textColor}
  `

  const onChange= (event:React.FormEvent<HTMLInputElement>)=>{  
    const {
      currentTarget:{value},
     } = event;
     setName(value)
  }

  const onSubmit= (event:React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    console.log("Hello", name)
  }

  return (
    <div>
      {/* <Circle bgColor="teal" borderColor="black" />
      <Circle bgColor="tomato" text="non default" /> */}
      <form onSubmit={onSubmit}>
        <input value={name} onChange={onChange}type="text" placeholder="username"></input>
        <button>Log in</button>
      </form>

      <ThemeContainer>
      <H1> Skyler 
      </H1>
      </ThemeContainer>
    </div>
  );
}

export default App;