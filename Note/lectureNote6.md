1. 

global state managment 
using recoil 

before we use the global state mangment 

ex) dark mode

send props App -> Router -> Coins -> Coin -> Chart 

sending the same props  so many diffrent stages , not effcient way.

global state :  share across the whole application 
but thesedays most of company people just use requct-query to deal with global state mangment


react hook form 
will let you do all the validation , onSubmit and all the extra stuff with few 
hook.



Recoil -

1. you have to have atom
import { atom } from "recoil";
export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});


2. index should have 
    <RecoilRoot>


3.  const isDark = useRecoilValue(isDarkAtom);
to use the atom


4. useSetRecoilState(isDarkAtom)
this will get functino 




react-hook-form Functions
register:

Purpose: register is used to connect your input fields to the react-hook-form instance, enabling it to manage their state and validation.
Usage: <input {...register("todo")} placeholder="Enter ToDo" />

handleSubmit:

Purpose: handleSubmit is a wrapper function that you use to handle form submission. It takes a callback function (like handleValid in your case) that will be executed when the form is successfully validated.

<form onSubmit={handleSubmit(handleValid)}>
  // form fields
</form>

setValue:

Purpose: setValue is used to programmatically set the value of an input field. This is useful for resetting fields or updating their values based on some events.
setValue("todo", "");

The handleValid Function
The handleValid function is your form submission handler, which executes when the form is successfully validated.
const handleValid = ({ todo, category }: ToDoSkyler) => {
  // Create a new to-do item
  const newToDo: ToDoSkyler = { todo, id: String(Date.now()), category };

  // Update the to-do list state
  setToDos((oldToDos) => [newToDo, ...oldToDos]);

  // Clear the input fields
  setValue("todo", "");
  setValue("category", "");
};