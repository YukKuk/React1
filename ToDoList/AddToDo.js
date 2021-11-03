import React, {useState} from "react";
import PropTypes from 'prop-types'

function AddToDo({onCreate}){
    const [value, setValue] = useState('')
    function submitHendler(event){
        event.preventDefault()

        if(value.trim()){
            onCreate(value)
            setValue('')
        }
    }
    return(
        <form style={{marginBottom: '5px'}} onSubmit={submitHendler}>
            <input value={value} onChange={event => setValue(event.target.value)} />
            <button type='submit'>Add</button>
        </form>
    )
}

AddToDo.propTypes = {
    onCreate: PropTypes.func.isRequired,
}

export default AddToDo;