export default function AboutLayout({
    children,
}:{
    children:React.ReactNode;
}){
    return(
        <div>
            <h1>About page Header</h1>
            {children}
        </div>
    );
}