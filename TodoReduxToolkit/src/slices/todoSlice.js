import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos : []
}

const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state , action)=> {
            const todo = {
                id : nanoid(),
                todoMsg : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state , action)=>{
            state.todos = state.todos.filter((todo)=> todo.id != action.payload)
        },
        updateTodo : (state , action) =>{
          state.todos = state.todos.map(
            (todo) => todo.id === action.payload.id ? {...todo , todoMsg :action.payload.todoMsg } : todo
          )
        },
        toggleTodo : (state ,action) =>{}
    }}
)

export const {addTodo , removeTodo , updateTodo } = todoSlice.actions 

export default todoSlice.reducer