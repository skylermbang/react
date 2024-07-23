

import React, { useState } from "react";

import {useForm} from "react-hook-form"
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import CreateToDo from "./CreateTodo";
import { categoriesState, categoryState, customCategoriesState, toDoSelector, toDoState } from "./atoms";
import ToDo from "./ToDo";
import CreateCategory from "./CreateCategory";

function ToDoList(){

  //const toDos= useRecoilValue(toDoState) // only want to get value ?
  const toDos = useRecoilValue(toDoSelector)
  const [category, setCategory] = useRecoilState(categoryState);
  const categories = useRecoilValue(categoriesState);

  const [customCategories, setCustomCategories] = useRecoilState(
    customCategoriesState,
  );
  const onInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value); // Updating the selected category
  };
 

  console.log("Categories:", categories);
  console.log("Custom Categories:", customCategories);
   

  return (
<div>
      <h1>To Do</h1>
      <hr />
      <CreateCategory />
      <select value={category} onChange={onInput}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
        {customCategories.map((customCategory, idx) => (
          <option value={customCategory} key={idx}>
            {customCategory}
          </option>
        ))}
      </select>
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>

  )


}
export default ToDoList;