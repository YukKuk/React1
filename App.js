import React from 'react';
import ToDo from './ToDoList/ToDo';
import Context from './context';
import AddToDo from './ToDoList/AddToDo';

function App() {
  let [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Milk'},
    {id: 2, completed: false, title: 'Butter'},
    {id: 3, completed: false, title: 'Bread'}
  ])

  function toggleToDo (id) {
    setTodos(
      todos = todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo})
    )}

    function removeToDo (id) {
      setTodos(todos.filter(todo => todo.id !== id))
    }

    function addToDo(title){
      setTodos(todos.concat([{
        title,
        id: Date.now(),
        completed: false,
      }]))
    }

  return (
    <Context.Provider velue={{removeToDo}}>
      <div className="block">
        <AddToDo onCreate={addToDo}/>
        {todos.length ? <ToDo todos={todos} onToggle={toggleToDo}></ToDo> : <p>No Todos</p>}
      </div>
    </Context.Provider>
  )
}

export default App;
