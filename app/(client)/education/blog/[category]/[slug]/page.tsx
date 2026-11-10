import Link from "next/link";
import {Back} from "@/compontents/layout";

type BlogPostPageProps = {
    params:Promise<{
        slug:string;
    }>;
    searchParams:Promise<{
        [key:string]: string | string[] | undefined
    }>
};

// export default function BlogPostPage({params}:{params:{slug:string}}){
//     // const {slug} = await params;
//     return(
//         <div>
//             <h1>Blog Post</h1>
//             <p>{params.slug}</p>
//         </div>
//     );
// }
    export default async function BlogPostPage({params , searchParams}:BlogPostPageProps){
        const {slug} = await params;
        // const {filters} = await searchParams;
        // const {filters,name} = await searchParams;
        const queryParameters = await searchParams;
    //     await new Promise(resolve => {
    //     setTimeout(resolve, 2000);
    // });
        return(
            <div>
                <h1>Blog Post</h1>
                <Link 
                href={"/blog/clothes"}
                
                >{slug}</Link>
                <Back/>
                <p>{queryParameters.filters}</p>
                <p>{queryParameters.name}</p>
            </div>
        );
    }