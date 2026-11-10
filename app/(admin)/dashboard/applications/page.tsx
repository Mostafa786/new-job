import Link from "next/link";

export default function ApplicationPage(){
    return(
        <div>
            <h1>Application Page</h1>
                        <hr />
            <Link className="bg-blue-500 text-white p-2 m-2 rounded-md hover:bg-blue-600" href={"/dashboard/applications/1"}>Application Details</Link>
        </div>
    );
}