import { atom , selector} from "recoil";

export interface IForm {
  toDo: string;
}

export interface ICustomeCategory {
  customCategory: string;
}

export const customCategoriesState = atom<string[]>({
  key: 'customCategories',
  default: []
});

  

export interface IToDo{
    text:string;
    id:number;
    category:string;
  }

  export const toDoState = atom<IToDo[]>({
    key:"toDo",
    default:[],
  });
  
  export const categoryState = atom<string>({
    key: "categoryState",
    default: "TO_DO",
  });
  
  export const categoriesState = atom<string[]>({
    key: "categoriesState",
    default: ["TO_DO", "DOING", "DONE"],
  });
  
  export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
      const toDos = get(toDoState);
      const category = get(categoryState);
      return toDos.filter((toDo) => toDo.category === category);
    },
  });