type ApplicationDetailsType = {
    params:Promise<{applicationID:string}>;
}

export default async function ApplicationReview({params}:ApplicationDetailsType){
    const {applicationID} = await params
        return(
        <div>
            <h1>Application Review : {applicationID}</h1>
        </div>
    );
}