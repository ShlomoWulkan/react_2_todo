import Todo from "../models/todoModel"

interface Props {
    todo: Todo;
    setTodos: (x:(todos: Todo[]) => Todo[]) => void;
}

export default function Item({todo, setTodos}: Props) {
    const handleCompleteChange = (checked: boolean) => {
        setTodos((todos) => {
            const copy = [...todos]
            const td = copy.find((t) => t.id === todo.id)
            td!.completed = checked
            return copy
        })
    }

    const handleDelete = () => {
        setTodos((todos) => {
            return todos.filter((t) => t.id !== todo.id)
        })
    }

  return (
    <div className="item">
      <input type="checkbox" 
      checked={todo.completed}
      onChange={(e) => handleCompleteChange(e.target.checked)}
      />
      <p>{todo.title}</p>
      <p>{todo.created_at.toLocaleString()}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
