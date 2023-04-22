import { useContext } from 'react';
import cl from './InputTask.module.css';

import { InputTaskContext } from '../../../context';

const InputTask = () => {
    
    const [taskInput, setTaskInput] = useContext(InputTaskContext);
    
    return (
        <input
            type='text'
            className={cl.input_task}
            placeholder='Enter your task here'
            onChange={(e) => {
                setTaskInput(e.target.value)
            }}
            value={taskInput}
        />
    );
}
 
export default InputTask;