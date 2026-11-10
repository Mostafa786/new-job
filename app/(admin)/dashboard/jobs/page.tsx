import Link from "next/link";

export default function JobsList(){
    return(
        <div>
            <h1>Job List</h1>
            <hr />
            <Link className="bg-blue-500 text-white p-2 m-2 rounded-md hover:bg-blue-600" href={"/dashboard/jobs/1"}>Job Details</Link>
            <hr />
            <Link className="bg-blue-500 text-white p-2 m-2 rounded-md hover:bg-blue-600" href={"/dashboard/jobs/new"}>New Job</Link>
        </div>
    );
}