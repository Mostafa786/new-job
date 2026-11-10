"use client";

import { useRouter } from "next/navigation";

export default function Back(){
    const router = useRouter();
    return(
        <button className="flex text-black p-2 m-0 cursor-pointer sticky z-50 top-0 bg-white w-min rounded-md" onClick={()=>router.back()}>back</button>
    );
}