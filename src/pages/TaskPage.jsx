import { useSearchParams } from "react-router-dom";

function TaskPage(){
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    
    return (
        <div className="bg-slate-500 w-screen h-screen p-6">
            <div className="max-w-[500px] w-full mx-auto space-y-4 bg-slate-400 rounded-md p-6">
                <div className="font-bold text-white text-3xl text-center">
                    Detalhes da tarefa
                </div>
                <div className="bg-slate-700 flex flex-col w-full">
                    <h1 className="text-white font-bold text-center p-2">{title}</h1>
                    <p className="text-white p-2">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default TaskPage;