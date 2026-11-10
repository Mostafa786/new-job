type jobDetailsType = {
    params:Promise<{id:string;}>
};

export default async function JobDetailsPage({params}:jobDetailsType){
    const {id} = await params;
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-4xl font-bold">Job Details : {id}</p>
        </div>
    );
}