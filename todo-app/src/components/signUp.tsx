

/* Old way without Recoil
function ToDoList(){
  const [value,setValue] =useState("")
  const onChange=(event:React.FormEvent<HTMLInputElement>)=>{
    const{
      currentTarget:{value},
    }= event;
    setValue(value)
  }

  const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    console.log(value)
  }

  return <div>
    <h1> ToDo List</h1>
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={value} placeholder="Write a todo"/>
      <button> Add </button>
    </form>
    </div>
}

*/
import React, { useState } from "react";

import {useForm} from "react-hook-form"

interface IForm{
  Email:string;
  firstName:string;
  lastName:string;
  userName:string;
  password:string;
  password2:string;
  extraError?:string;

}


function ToDoList(){
  const {register, watch, handleSubmit,formState:{errors}, setError} =useForm<IForm>({

    defaultValues:{
      Email:"@naver.com"
    }
  })
  const onValid=(data : IForm)=>{
    if(data.password !== data.password2){
      
      setError("password", {message: "Password not match"} , {shouldFocus:true})
    }
    //setError("extraError", {message:"Server is down"})
  }
  console.log(errors)
  //console.log(watch())
  return <div>
    <h1> ToDo List</h1>
    <form style={{ display:"flex", flexDirection:"column"}}onSubmit={handleSubmit(onValid)}>
      <input {...register("Email",
        {required:"Missing input",
          pattern:{
            value:/^[A-Za-z0-9._%+-]+@naver.com$/,
            message:"Only Naver Emails Are Accepted"
          }
        })} placeholder="Email"/>
        <span> {errors?.Email?.message}</span>
      <input {...register("firstName",
        {required:"Missing input",
          validate:{

            noSkyler:(value)=> value.includes("skyler") ? " No Skyler allowed" : true,

          }
          
        })} placeholder="First name"/>
        <span> {errors?.firstName?.message  }</span>

      <input {...register("lastName",
        {required:"Missing input"})} placeholder="Last name"/>
        <span> {errors?.lastName?.message}</span>
      <input {...register("userName",
        {required:"Missing input" ,minLength:10} )} placeholder="User name"/>
         <span> {errors?.userName?.message}</span>

      <input {...register("password",
        {required:"Missing input"})} placeholder="Password"/>
       <span> {errors?.password?.message}</span>

      <input {...register("password2",
        {required:"your password is required"})} placeholder="Password1"/>
          <span> {errors?.password2?.message}</span>
      <button> Add </button>
    </form>
    </div>
}


export default ToDoList;