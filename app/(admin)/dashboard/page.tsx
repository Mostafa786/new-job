import Link from "next/link";

export default function DashBoard(){
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <h1>Admin dashBoard</h1>
            <Link className="bg-blue-500 text-white p-2 m-2 rounded-md hover:bg-blue-600" href={"/dashboard/jobs"}>Jobs</Link>
            <Link className="bg-blue-500 text-white p-2 m-2 rounded-md hover:bg-blue-600" href={"/dashboard/applications"}>Application</Link>
        </div>
    );
}