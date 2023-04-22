import { useContext, useEffect } from "react";
import { Todos } from "../../context";

import TodoElement from '../TodoElement/TodoElement';


const TaskList = () => {
    
    const [todoList, setTodoList] = useContext(Todos);

    return (

        <div>
            {todoList.map(todo => <TodoElement todo={todo}/>)}
        </div>

    );
}
 
export default TaskList;