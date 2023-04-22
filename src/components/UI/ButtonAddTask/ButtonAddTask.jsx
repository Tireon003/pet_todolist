import cl from './ButtonAddTask.module.css';

const ButtonAddTask = ({children, action}) => {
    return (
        <button
            className={cl.btn_add_task}
            onClick={action}
        >
            {children}
        </button>
    );
}
 
export default ButtonAddTask;