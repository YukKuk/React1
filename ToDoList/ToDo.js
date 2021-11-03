import React from 'react'
import ToDoItem from './ToDoItem'
import PropTypes from 'prop-types'

function ToDo(part){
    return(
        <ul>
            {part.todos.map((todo, index) => {
            return <ToDoItem 
                todo={todo} 
                key = {todo.id} 
                index = {index} 
                onChange={part.onToggle}>
            </ToDoItem>
            })}
        </ul>
    )
}

ToDo.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
}

export default ToDo