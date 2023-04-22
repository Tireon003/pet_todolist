import { useContext, useEffect, useState } from 'react';
import cl from './TodoElement.module.css';
import { Todos } from '../../context';

const TodoElement = ({todo}) => {

    const [isChecked, setIsChecked] = useState(todo.checked);
    const [todoList, setTodoList] = useContext(Todos);

    useEffect(() => {
        setIsChecked(todo.checked)
    }, [todoList, todo.checked])

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
        todo.checked = !isChecked;
    }

    const deleteTask = () => {
        setTodoList([...todoList].filter(task => task.key !== todo.key))
    }

    return (
        <div className={cl.todo_box}>
            
            <div className={cl.wrapper}>
                {todo.checked === false
            ? <h3>{todo.title}</h3>
            : <h3 className={cl.h3_linethrough}>{todo.title}</h3>
            }
            </div>
            
            <div className={cl.todo_tools}>
                <input
                    className={cl.checkbox}
                    type='checkbox'
                    onClick={toggleCheckbox}
                    checked={todo.checked}
                    />
                <div
                    className={cl.delete_icon}
                    onClick={deleteTask}
                ></div>
            </div>

            
        </div>
    );
}
 
export default TodoElement;