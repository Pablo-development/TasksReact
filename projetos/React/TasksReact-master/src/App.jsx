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

  function onTaskClick(taskId){
    const newTask = tasks.map((task) => {
      console.log(task)
      if(task.id === taskId){
        //Aqui, caso o id recebido seja o mesmo da iteração, atualizamos o boolean
        //falso para true
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
    <div className="h-screen w-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
        <AddTask/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
  );
}
export default App;