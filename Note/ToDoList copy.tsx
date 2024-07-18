

import React, { useState } from "react";

import {useForm} from "react-hook-form"
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import CreateToDo from "./CreateTodo";
import { toDoSelector, toDoState } from "./atoms";
import ToDo from "./ToDo";

function ToDoList(){

  const toDos= useRecoilValue(toDoState) // only want to get value ?
  const [toDo,doing,done] = useRecoilValue(toDoSelector)
  
  // const modFn= useSetRecoilState(toDoState)// if you want to modify ?
   //const [toDos,setToDos] =useRecoilState(toDoState) // you get value and also modify function
  // const {register,handleSubmit,setValue} = useForm<IForm>();
  // const handleValid = ({toDo}:IForm) =>{
    
  //   setToDos((oldToDos) => [
  //     { text: toDo, id: Date.now(), category: "To_DO" },
  //     ...oldToDos,
  //   ]);    
  //   setValue("toDo","");
  //   console.log(toDos)
  // }
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
     <CreateToDo></CreateToDo>
      <ul>
        {toDo.map((toDo) => <ToDo key={toDo.id} {...toDo}/>)}
      </ul>

      <hr/>

      <h3> DOING</h3>
      <ul>
        {doing.map((toDo) => <ToDo key={toDo.id} {...toDo}/>)}
      </ul>

      <hr/>

      <h3> DONE</h3>
      <ul>
        {done.map((toDo) => <ToDo key={toDo.id} {...toDo}/>)}
</ul>
    </div>
    
   

  );
}
export default ToDoList;