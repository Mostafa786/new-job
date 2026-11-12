import GlassCard from "@/components/ui/glass-card";
// import image from "@/images/undraw_morning-work_v5jo.svg"
import Link from "next/link";
import { Users, Briefcase}
from "lucide-react";
export default function DashBoard(){
    // const cardDetails = [
    //     {
    //         icon:
    //     },
    // ];
    return(
        <div>
            <GlassCard className="m-5">
            <div className="flex p-5">
                <div className="flex-1">
                    <h1 className="page-title my-5">Your leadership it's starts from here ... Job hunting start from you</h1>
                    <p>Build the skills employers notice, explore opportunities that match your goals, and take the lead in your career today, because your next opportunity begins with your decision.</p>
                </div>
                <div className={"bg-[url(/images/undraw_morning-work_v5jo.svg)] bg-contain bg-no-repeat h-70 w-70 bg-right"}>
            </div>
            </div>
            </GlassCard>
            {/* <div className="flex">
                {}
            </div> */}
            {/* <Link className="bg-blue-500 text-white p-2 m-2 rounded-md hover:bg-blue-600" href={"/dashboard/jobs"}>Jobs</Link> */}
            {/* <Link className="bg-blue-500 text-white p-2 m-2 rounded-md hover:bg-blue-600" href={"/dashboard/applications"}>Application</Link> */}
        </div>
    );
}