import { useState } from "react";

function AddTask({onAddTaskClick}){
 
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col ">
            <input className="px-4 py-2 text-center rounded-md" 
            type="text" placeholder="Digite o nome da sua Task" 
            value={title}
            onChange={(event) => setTitle(event.target.value)}/>
            
            <input className="px-4 py-2 text-center rounded-md" 
            type="text" placeholder="Digite a descrição da sua Task"
            value={description}
            onChange={(event) => setDescription(event.target.value)}/>


            <button onClick= {() => 
            {if(!title.trim() || !description.trim()){
                return alert("Insira os valores dos campos acima! ")
            }
            onAddTaskClick(title, description)
                setTitle("");
                setDescription("");
            }
            }
            className="bg-slate-700 text-white rounded-md text-center">
            Adicionar Task</button>
        </div>
    )
}

export default AddTask