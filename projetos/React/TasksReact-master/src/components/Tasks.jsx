import { ChevronsRightIcon, TrashIcon } from "lucide-react";

//recebe props como parametro, sendo props as tasks
function Tasks(props){
    //space-y-4 faz com que cada elemento dentro da UL tenha um espaçamento entre sí
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {props.tasks.map((task) => (
            <li key={task.id} className="flex gap-2 ">
                <button onClick={() => props.onTaskClick(task.id)}
                className={`bg-slate-700 text-white p-2 w-full ${task.isCompleted && "line-through"}`}>
                    {task.title}
                </button>
                <button className="bg-slate-700 text-white p-2 ">
                    <ChevronsRightIcon />
                </button>
                <button onClick= {() => props.onDeleteTaskClick(task.id)} className="bg-slate-700 text-white p-2 ">
                    <TrashIcon />
                </button>
            </li>
            ))}
        </ul>
    );  
}

export default Tasks