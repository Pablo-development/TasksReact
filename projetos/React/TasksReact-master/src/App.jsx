import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


function App(){
  
  //state de tasks
  const [tasks, setTasks] = useState([
    {
      //objetos
      id: 1,
      title: "teste",
      description: "teste",
      isCompleted: false,
    },
    {
      id: 2,
      title: "teste2",
      description: "teste",
      isCompleted: false,
    },
  ]);

  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
        <AddTask/>
        <Tasks tasks={tasks}/>
      </div>
    </div>
  );
}
export default App;