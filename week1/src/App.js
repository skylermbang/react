import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {


  const notify = () => toast("Wow so easy!");
  const notify2 = () => {
    alert('hi!');
  };

  const GrandParent = () => {
    return <Parent />
  }
  const Parent = () => {
    return <Child />
  }

  const Child = () => {
    return <div> I am the son fucker </div>
  }


  return (

    <div
      style={{
        height: '100vh',
        display: ' flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p1> This is App component </p1>
      <button onClick={notify}> Click me</button>
      <button onClick={notify2}> Click me2</button>
      <ToastContainer />




      <GrandParent />

    </div >
  );
}

export default App;