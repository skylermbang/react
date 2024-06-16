TypeScript =  strongly typed language which is based on JavaScript
 Trend : Typescript + React + Styled 

Added feature : based on JS, it has type

you can use the type feature as like protection, it will help you to have less errors, better error message.

Develope in TS => when you deploy it will compile it to JS

From now on : 
npx create-react-app my-app2 --template typescript
npm i --save-dev@types/styled-components 

You can contribute to the definitly typed for the bring js package to ts package.
 

prop type => you can check the error AFTER run the code
if you use typscript then you will know before run the code.

use interface to explain to typscript explain the object shape 

-default props and optional props

interface CircleProps {
  bgColor: string;
  borderColor? : string;
  text?: string;  // this is optional 
}


-state :
usually in the state , the default type considered as the tpye to be 
but you can also specify
const [counter, setCounter]= useState<number|string>(1);


-form:
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

  -theme:
https://styled-components.com/docs/api#typescript

1. create styled.d.tsx
2. theme.ts 

when do we use ts and tsx?
