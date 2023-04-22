import cl from './AddNewTasks.module.css';

import ButtonAddTask from '../UI/ButtonAddTask/ButtonAddTask';
import InputTask from '../UI/InputTask/InputTask';
import { useContext, useState } from 'react';
import { Todos, InputTaskContext } from '../../context';

const AddNewTasks = () => {

    const [todoList, setTodoList] = useContext(Todos);
    const [taskInput, setTaskInput] = useState('');
   
    const addTask = () => {
        if (taskInput) {
            setTodoList([
                ...todoList,
                {
                    key: Date.now(),
                    title: taskInput,
                    checked: false
                }
            ]);
        }
        setTaskInput('');
    }

    return (
        <InputTaskContext.Provider value={[taskInput, setTaskInput]}>
            <div className={cl.add_todo}>
                <InputTask/>
                <ButtonAddTask action={addTask}>Add</ButtonAddTask>
            </div>
        </InputTaskContext.Provider>
        
    );
}
 
export default AddNewTasks;