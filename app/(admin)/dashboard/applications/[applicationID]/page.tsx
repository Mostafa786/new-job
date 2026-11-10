import Link from "next/link";

type ApplicationDetailsType = {
    params:Promise<{applicationID:string}>;
}

export default async function ApplicationDetails({params}:ApplicationDetailsType){
    const {applicationID} = await params
        return(
        <div>
            <h1>Application Details : {applicationID}</h1>
                        <hr />
            <Link className="bg-blue-500 text-white p-2 m-2 rounded-md hover:bg-blue-600" href={`/dashboard/applications/${applicationID}/review`}>Application Review</Link>
        </div>
    );
}