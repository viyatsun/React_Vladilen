import React from 'react';
import TodoList from './todo/todo-list';

export default function App() {

  const [todos, setTodos] = React.useState([
    {id:1,completed: false, title: 'Придбати тачку'},
    {id:2,completed: false, title: 'Придбати хату'},
    {id:3,completed: false, title: 'Придбати комп'}
  ])


  function toggleTodo (id) {
    setTodos(
      todos.map(todo=>{
        if (todo.id ===id){
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  
  return (
    <div className='wrapper'>
      <h1>React tutorial</h1>

      <TodoList todos={todos} onToggle={toggleTodo}/>
    </div>
  )
}

