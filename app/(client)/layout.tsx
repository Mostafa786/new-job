import GlassBackground from "@/components/ui/glass-background";
import Navbar from "@/components/ui/nav-bar";

export default function PublicLayout({ children }:{children:React.ReactNode}) {
  return (
    //   <GlassBackground>
    <>
      {/* <Navbar /> */}
      <div>{children}</div>
      </>
    //   </GlassBackground>
  );
}