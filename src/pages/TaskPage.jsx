import { ChevronsLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage(){
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    const navigate = useNavigate();

    return (
        <div className="bg-slate-500 w-screen h-screen p-6">
            <div className="max-w-[500px] w-full mx-auto space-y-4 bg-slate-400 rounded-md p-6">
                <div className="relative flex items-center justify-center font-bold text-white text-3xl">
                    <button onClick={()  => navigate(-1)} className="absolute left-0">
                        <ChevronsLeftIcon />
                    </button>
                    <span>Detalhes da tarefa</span>
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