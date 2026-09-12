import { createContext , useContext } from "react";

export const todoContext = createContext({
    todos : [{
        id : 1 ,
        todoMsg : "Msg Todo",
        isChecked : false 
    }],
    addTodo: (todo)=>{},
    editTodo : (id , todo) =>{},
    removeTodo : (id) =>{},
    toggleTodo : (id) =>{}
})

export const TodoContextProvider = todoContext.Provider

export default function useTodo(){
    return useContext(todoContext)
}