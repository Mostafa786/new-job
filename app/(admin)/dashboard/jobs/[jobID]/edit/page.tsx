type jobDetailsType = {
    params:Promise<{jobID:string}>;
}


export default async function JobDetailsEdit({params}:jobDetailsType){
    const {jobID} = await params;
    return(
        <div>
            <h1>Job Details Edit :{jobID}</h1>
        </div>
    );
}