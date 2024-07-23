import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IForm, categoryState, toDoState } from "./atoms";
import { useForm } from "react-hook-form";


function CreateToDo(){
    const setToDos = useSetRecoilState(toDoState)
    //const [toDos,setToDos] =useRecoilState(toDoState) // you get value and also modify function
    const {register,handleSubmit,setValue} = useForm<IForm>();
    const category = useRecoilValue(categoryState); // Get the selected category

    const handleValid = ({toDo}:IForm) =>{
     
        setToDos((oldToDos) => [
          { text: toDo, id: Date.now(), category },
          ...oldToDos,
        ]);    
        setValue("toDo","");
        //console.log(toDos)
      }

        
    return (
        <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    )
}

export default CreateToDo