// import {Counter} from "@/compontents/layout";


import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/glass-card";
import Link from "next/link";

export default function Home() {
  return (
  <div className="flex flex-col items-center justify-center min-h-dvh">
    <h1 className="text-4xl font-bold">Job Board</h1>
    <p className="text-lg">Welcome to production app</p>
    {/* <Link className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" href={"/jobs"}>Browse Jobs</Link> */}

    <GlassCard className="p-6">
      <h2 className="text-xl font-bold text-white">
        Senior AI Engineer
      </h2>

      <p className="text-white/70 mt-2">
        Google · Remote
      </p>
    </GlassCard>
    <Button variant={"destructive"}><Link href={"/jobs"}>Browse Jobs</Link></Button>
    <Button variant={"default"}>Browse Jobs</Button>
    <Button variant={"ghost"}>Browse Jobs</Button>
    <Button variant={"link"}>Browse Jobs</Button>
    <Button variant={"outline"}>Browse Jobs</Button>
    <Button variant={"secondary"}>Browse Jobs</Button>

    {/* <Counter/> */}
  </div>
  );
}