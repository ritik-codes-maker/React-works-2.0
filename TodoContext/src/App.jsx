import { useEffect , useState} from "react";
import { TodoContextProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

function App() {

  const [todos , setTodos] = useState([]);

   const addTodo = (todo)=>{
      setTodos([{id: Date.now() ,...todo} , ...todos])
   }

   const removeTodo = (id)=>{
      setTodos((prev) => prev.filter((prevTodo)=> prevTodo.id !=id ))
   }

   const editTodo = (id , todo)=>{
      setTodos((prev)=> prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
   }

   const toggleTodo = (id) =>{
     setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo , isChecked : !prevTodo.isChecked} : prevTodo))
   }

   useEffect(()=>{
      const fetchTodos = JSON.parse(localStorage.getItem("todos"))
      if(fetchTodos && fetchTodos.length > 0 ){
        setTodos(fetchTodos);
      }
   },[])

   useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
   },[todos]);

  return (
    <TodoContextProvider value={{todos , addTodo , removeTodo , editTodo , toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
              <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                  <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                  <div className="mb-4">
                     <TodoForm/>
                  </div>
                  <div className="flex flex-wrap gap-y-3">
                    {(todos && todos.length > 0 ) && todos.map((todo) =>  (<TodoItem key={todo.id} todo={todo}/>))}
                  </div>
              </div>
        </div>
    </TodoContextProvider>
  )
}

export default App
