import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {


  const notify = () => toast("Wow so easy!");
  const notify2 = () => {
    alert('hi!');
  };
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

    </div >
  );
}

export default App;