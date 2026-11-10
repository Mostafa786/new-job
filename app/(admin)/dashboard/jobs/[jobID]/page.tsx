import Link from "next/link";

type jobDetailsType = {
    params:Promise<{jobID:string}>;
}

export default async function JobsDetails({params}:jobDetailsType){
    const {jobID} = await params
        return(
        <div>
            <h1>Job Details : {jobID}</h1>
            <hr/>
            <Link className="bg-blue-500 text-white p-2 m-2 rounded-md hover:bg-blue-600" href={`/dashboard/jobs/${jobID}/edit`}>Edit Job</Link>
        </div>
    );
}