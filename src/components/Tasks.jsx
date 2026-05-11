import { ChevronsRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}){
    const navigate = useNavigate()
    
    function onSeeDetailsClick(task){
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
    }

    //teste para ver como funciona o navigate, basta passar essa função ao onclick do botão
    function testeNavigate(){
        navigate(`/task`)
    }
    //space-y-4 faz com que cada elemento dentro da UL tenha um espaçamento entre sí
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
            <li key={task.id} className="flex gap-2 ">
                <button onClick={() => onTaskClick(task.id)}
                className={`bg-slate-700 text-white p-2 w-full ${task.isCompleted && "line-through"}`}>
                    {task.title}
                </button>
                <button onClick={() => onSeeDetailsClick(task)} className="bg-slate-700 text-white p-2 ">
                    <ChevronsRightIcon />
                </button>
                <button onClick= {() => onDeleteTaskClick(task.id)} className="bg-slate-700 text-white p-2 ">
                    <TrashIcon />
                </button>
            </li>
            ))}
        </ul>
    );  
}

export default Tasks