import { useSearchParams } from "react-router-dom";

function TaskPage(){
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title")
    const description  = searchParams.get("description")

    return (
        <div className="bg-slate-500 w-screen h-screen justify-center flex p-6">
            <div className="w-[500px] space-y-4 space-x-2 bg-slate-200">
                <h1 className="text-black">{title}</h1>
                
                <p>{description}</p>
            </div>
        </div>
    )
}
export default TaskPage;