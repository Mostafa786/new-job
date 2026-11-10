type ShopType = {
    params: Promise<{
        categories:string[];
    }>;
};
export default async function ShopPage({params}:ShopType){
    const {categories} = await params;
    return(
        <div>
            <h1>{categories?.join(", ") || "All Categories"}</h1>
        </div>
    );
}