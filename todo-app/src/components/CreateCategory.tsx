import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { categoriesState, categoryState, customCategoriesState } from './atoms';
import { ICustomeCategory } from './atoms';


function CreateCategory(){
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm<ICustomeCategory>();
      const [customCategories, setCustomCategories] = useRecoilState(
        customCategoriesState,
      );
      const setCategory = useSetRecoilState(categoryState);
      const setCategories = useSetRecoilState(categoriesState);
    

      const handleValid = ({ customCategory }: ICustomeCategory) => {
        setValue('customCategory', '');
        setCategory(customCategory as any);
        setCustomCategories((oldCategories: any) => {
          return [...oldCategories, customCategory];
        });
        setCategories((oldCategories) => [...oldCategories, customCategory]);
      };



    return(
    <form onSubmit={handleSubmit(handleValid)}>
    <input
      {...register('customCategory', {
        required: '카테고리를 입력 후 생성을 클릭하세요.',
      })}
      placeholder="여기에 새 카테고리를 입력하세요"
      type="text"
    />
    <button>Add</button>
    <span>{errors.customCategory?.message}</span>
  </form>
);
}


export default CreateCategory