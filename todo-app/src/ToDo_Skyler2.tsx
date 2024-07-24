
import { stringify } from "querystring";
import {useForm} from "react-hook-form"
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

interface ToDoSkyler{
    category: string;
    todo: string;
    id:string;
}

const ToDoSkyler = atom<ToDoSkyler[]>({
    key: 'TodoList',
    default: [],
  });

  

function ToDo_Skyler2(){

    const {register,handleSubmit,setValue} = useForm<ToDoSkyler>();
    const ToDoList = useRecoilValue(ToDoSkyler)
    const setToDos = useSetRecoilState(ToDoSkyler)

     
        const handleValid = ({ todo, category }: ToDoSkyler) => {
            const newToDo: ToDoSkyler = { todo, id: String(Date.now()), category }; // Explicitly cast to ToDoSkyler
            setToDos((oldToDos) => [newToDo, ...oldToDos]);
            setValue("todo", "");
            setValue("category", "");
          };

        //
        const deleteItem=(id:ToDoSkyler["id"])=>{

         
            setToDos((oldToDos) => {
                const targetTodo = oldToDos.find(toDo => toDo.id === id);
                console.log(targetTodo)
                if(targetTodo){
                    const newToDos = oldToDos.filter(toDo => toDo.id !== id);
            return newToDos;
                }
                return oldToDos;
            })
        }

    return  (
    <div>
        <form onSubmit={handleSubmit(handleValid)}>
        <input {...register("todo")} placeholder="Enter ToDo" />
        <input {...register("category")} placeholder="Enter Category" />
            <button>Add</button>
        </form>
        <hr></hr>
            {ToDoList.map((toDo)=>(
                <div>   
                    <li >key {toDo.id} </li>
                    <li >Category {toDo.category} </li>
                    <li >toDo {toDo.todo} </li>
                    <button onClick={() => deleteItem(toDo.id)}>Delete</button>
                </div>
              
            ))}
    </div>

)}


export default ToDo_Skyler2