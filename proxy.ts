import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function proxy(request:NextRequest){
    const host = request.headers.get ('host')?.toLowerCase() ?? "";
    const url= request.nextUrl;
    const pathName = url.pathname;
    console.log("Host :",host);
    console.log("Path Name :",pathName)
    // console.log("Next URL :",url);
    // console.log("Path Name :",pathName);
    // const isAdminHost = host.includes("admin.new-job.mostafax494.workers.dev")

    const isAdminHost = host === "admin.localhost:3001";
    if(isAdminHost && 
        !pathName.includes("/dashboard")
        // !pathName.includes("/users") &&
        // !pathName.includes("/jobs") &&
        // !pathName.includes("/companies") &&
        // !pathName.includes("/settings")
    ){
        console.log("admin : Redirect to dashboard")
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    // const isMainDomin = host.includes("new-job.mostafax494.workers.dev") 

    const isMainDomin = host === "localhost:3001"; 
    if(isMainDomin && pathName.includes("/dashboard")){
        return NextResponse.redirect(new URL('/',request.url))
    }
    return NextResponse.next()
}

export const config = {
    // matcher:'/amazing-jobs/:path*',
    // matcher:['/amazing-jobs/:path*', '/jobs/:path*' , '/dashboard/:path*']
    // matcher:"/:path*"
    matcher:['/((?!api/ |_next/static|_next/image|.*\\.png$|sw\\.js|favicon\\.ico).*)']
}