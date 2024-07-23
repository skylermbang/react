import { useSetRecoilState } from "recoil"
import { IToDo, toDoState } from "./atoms"

function ToDo({text, category, id}:IToDo){

    const setToDos = useSetRecoilState(toDoState)
    const onClick = (newCategory: IToDo["category"])=>{
       
        setToDos(oldToDos =>{
            const targetIndex = oldToDos.findIndex(toDo=> toDo.id === id)
            //console.log(targetIndex)
            const oldTodo = oldToDos[targetIndex]
            const newTodo = {text,id,category:newCategory}
            const updatedTodo = [...oldToDos.slice(0, targetIndex) , newTodo, ...oldToDos.slice(targetIndex+1)]
            
            return updatedTodo
        })
    }
    return (
        <li>
        <span>{text}</span>
         {category !== "To_DO" && <button onClick={()=>onClick("To_DO")}>ToDo</button>}
         {category !== "DOING" &&  <button onClick={()=>onClick("DOING")}>Doing</button>}
         {category !== "DONE" && <button onClick={()=>onClick("DONE")}>Done</button>}
        </li>
      
    )
}

export default ToDo