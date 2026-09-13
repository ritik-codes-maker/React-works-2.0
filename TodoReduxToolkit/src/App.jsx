import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <main className="mx-auto w-full max-w-xl">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-black">
            Todos
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            Learning Redux Toolkit — add, edit and remove tasks.
          </p>
        </header>

        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 shadow-2xl shadow-black/40 backdrop-blur">
          <AddTodo />
          <Todos />
        </div>
      </main>
    </div>
  )
}

export default App
