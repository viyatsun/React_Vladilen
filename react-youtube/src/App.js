import React from 'react';
import TodoList from './todo/todo-list';
import Context from './todo/context';

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

  function removeTodo (id) {
    setTodos(
      todos.filter(todo=>todo.id !==id)
    )
  }

  
  return (
    <Context.Provider value = {{removeTodo}}>
      <div className='wrapper'>
        <h1>React tutorial</h1>
          {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo}/>) : (
          <p>No Todos!</p>) }
      </div>
    </Context.Provider>
  )
}

