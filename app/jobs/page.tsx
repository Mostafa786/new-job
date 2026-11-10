import {Back} from "@/compontents/layout";
import Link from "next/link";

export default function JobsPage(){
    const jobsList = [
    {
    title:"Junior AI Engineer",
    description:"we demand junior AI engineer have a good knowledge of machine learning and deep learning"
    },
    {
    title:"Junior Backend Engineer",
    description:"we demand junior backend engineer have a good knowledge of goLang and node.js"
    },
    {
    title:"Junior Mobile Engineer",
    description:"we demand junior mobile engineer have a good knowledge of flutter and bloc/cubit"
    },
]
    return(
        <div className="min-h-screen flex flex-col">
        <Back/>
        <div className="flex-1 flex flex-col justify-center mb-15">
            <h1 className="text-4xl font-bold m-2">Jobs</h1>
            <div>{jobsList.map((job,index)=>{
                return(
            <div className="flex flex-col items-start justify-center border-2 m-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                <Link
                href={`/jobs/${index+1}`}>
                    <div>
                        <h3 className="text-2xl font-bold">{job.title}</h3>
                        <p className="text-gray-300">{job.description}</p>
                    </div>
                </Link>
            </div>
                );
            })}
            </div>
        </div>
    </div>
    );
}