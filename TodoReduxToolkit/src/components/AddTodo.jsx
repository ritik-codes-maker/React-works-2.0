import { useState } from "react";
import {useDispatch} from 'react-redux';
import {addTodo} from '../slices/todoSlice'

function AddTodo() {

    const [input ,setInput] = useState('');
    const dispatch = useDispatch();
    const addTodoHandler = (e)=>{
        e.preventDefault();
        if(!input.trim()) return;
        dispatch(addTodo(input.trim()));
        setInput('');
    }

  return (
    <form onSubmit={addTodoHandler} className="flex gap-2">
      <input
        type="text"
        className="flex-1 rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-2.5 text-zinc-100 placeholder:text-zinc-500 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
        placeholder="What needs to be done?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        disabled={!input.trim()}
        className="rounded-xl bg-indigo-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Add
      </button>
    </form>
  )
}

export default AddTodo
