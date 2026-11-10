import Link from "next/link";

type BlogCategoryType = {
    params:Promise<{
        category:string
    }>;
};

export default async function CategoryPage({params}:BlogCategoryType){
    const {category} = await params;
    return(
    <div>
        <h1>Category Page Blog</h1>
        <p>{category}</p>
        {/* <Link href={`/blog/${category}/mens`}>mens</Link> */}
        <Link 
        href={
            {pathname:`/education/blog/${category}/mens`,
            query:{display:'list',status:'published'}
            }}
            // replace
            >
            mens
            </Link>
    </div>
    );
}