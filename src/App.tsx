import { useState } from "react"
import Add from "./components/Add"
import List from "./components/List"
import Todo from "./models/todoModel"

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  return (
    <div className="app">
      <Add setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div> 
  )
}

export default App
