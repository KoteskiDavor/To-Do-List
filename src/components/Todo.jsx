import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { ChromePicker } from 'react-color';
import "./Todo.css"

const Todo = ({ text, todo, todos, setTodos }) => {
    const [color, setColor] = useState("");
    const [showColorPicker, setShowColorPicker] = useState(false);
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id ));
    }
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed, 
                }
            }
            return item; 
        }))
    }
 
    return (
        <div className="todo-tasks" s>
            <div className="single-task" style={{background: color}}>
                <li className={`todo-item ${todo.completed ? "completed-btn" : ""}`} style={{background: color }}>{text}</li>
                    {showColorPicker && (
                        <ChromePicker color={color} onChange={(c) => setColor(c.hex)} /> 
                    )}
                    <ColorLensIcon  onClick={() => setShowColorPicker(!showColorPicker)} /> 
                    <button className="completed" onClick={completeHandler}  >
                        <CheckIcon className="check"/>   
                    </button> 
                    <button  onClick={deleteHandler} className="incompleted">
                        <DeleteIcon className="trash" /> 
                    </button>
            </div> 
        </div>
    )
}

export default Todo;
