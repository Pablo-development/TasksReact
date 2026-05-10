import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


function App(){
  

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

function onAddTaskClick(title, description){
  const newTask = 
    {
      id: Date.now(),
      title,
      description,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);
    console.log(tasks)
    
}

  function onTaskClick(taskId){
    const newTask = tasks.map((task) => {
      console.log(task)
      if(task.id === taskId){
        return {...task, isCompleted: !task.isCompleted}
      }
      return task;
    })
    setTasks(newTask);
  }

  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }
  

  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px] flex flex-col gap-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
        <AddTask onAddTaskClick={onAddTaskClick}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}
export default App;