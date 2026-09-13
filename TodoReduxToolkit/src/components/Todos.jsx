import {useSelector , useDispatch} from 'react-redux';
import { useState } from 'react';
import {removeTodo , updateTodo} from '../slices/todoSlice'

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos)
  const [editedText ,setEditedText] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleEditTodo = (todo)=>{
    if(editingId === todo.id){
        if(editedText.trim()){
            dispatch(updateTodo({id : todo.id , todoMsg : editedText.trim()}))
        }
        setEditingId(null);
        setEditedText('');
    }else{
        setEditingId(todo.id)
        setEditedText(todo.todoMsg)
    }
  }

  const cancelEdit = ()=>{
    setEditingId(null);
    setEditedText('');
  }

  if(todos.length === 0){
    return (
      <p className="mt-8 rounded-xl border border-dashed border-white/10 py-10 text-center text-sm text-black">
        Nothing here yet. Add your first todo above.
      </p>
    )
  }

  return (
    <>
      <div className="mt-6 mb-3 flex items-center justify-between px-1">
        <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
          Your list
        </span>
        <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-zinc-400">
          {todos.length} {todos.length === 1 ? 'item' : 'items'}
        </span>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            className="group flex items-center gap-3 rounded-xl border border-white/5 bg-zinc-800/60 px-3 py-2.5 transition-colors hover:border-white/10 hover:bg-zinc-800"
            key={todo.id}
          >
            {editingId === todo.id ? (
              <input
                type="text"
                autoFocus
                className="flex-1 rounded-lg border border-indigo-500/60 bg-zinc-950/70 px-3 py-1.5 text-zinc-100 outline-none focus:ring-2 focus:ring-indigo-500/30"
                value={editedText}
                placeholder="Edit this todo..."
                onChange={(e)=> setEditedText(e.target.value)}
                onKeyDown={(e)=> {
                  if(e.key === 'Enter') handleEditTodo(todo)
                  if(e.key === 'Escape') cancelEdit()
                }}
              />
            ) : (
              <span className="flex-1 truncate text-zinc-100">{todo.todoMsg}</span>
            )}

            <button
              onClick={() => handleEditTodo(todo)}
              title={editingId === todo.id ? 'Save' : 'Edit'}
              className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-indigo-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              {editingId === todo.id ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              title="Delete"
              className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-red-500/10 hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
