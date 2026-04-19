//recebe props como parametro, sendo props as tasks
function Tasks(props){
    //no console do navegador, podemos ver os objetos
    console.log(props);
    
    return (
        <ul>
            {props.tasks.map((task) => (
            <li key={task.id} className="bg-slate-700 text-white p-2">
                {task.title}
            </li>
            ))}
        </ul>
    );  
}

export default Tasks