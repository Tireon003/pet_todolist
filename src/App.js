import { useState } from 'react';
import './App.css';
import AddNewTasks from './components/AddNewTasks/AddNewTasks';
import { Todos } from './context';
import TaskList from './components/TaskList/TaskList';

function App() {

  const [todoList, setTodoList] = useState([])

  

  return (
    <Todos.Provider value={[todoList, setTodoList]}>

    
      <div className="App">
        <div className='todo_body'>
          <div className='label'>
            <h1>Simple To Do List</h1>
            <h5>by Tireon</h5>
          </div>
          <AddNewTasks/>
          <TaskList />
          
          
        </div>
      </div>
    </Todos.Provider>
  );
}

export default App;
// 
// Баг:
// Если пометить задачу как выполненную, затем её удалить,
// то задача, которая встала на её место принимает
// неверные параметры, поэтому получается, что чекбокса нет
// но текст с задачей зачеркнут будто бы чекбокс прожат.
// Возможное решение, занести таски в новый компонент
// такслист, затем там использовать useEffect (или useMemo)
// пока не знаю что лучше будет
// 