import GlassBackground from "@/components/ui/glass-background";
import Sidebar from "@/components/ui/sidebar";

export default function AdminLayout({ children } : {children:React.ReactNode}) {
  return (
    <GlassBackground>
    <div className="min-h-dvh flex 
    bg-white/10
      backdrop-blur-xl
      border border-white/20
      shadow-lg"
      >
      <Sidebar />

      <div className="">
        {/* <AdminHeader /> */}
        <main className="pr-4 pt-4 pb-4 flex min-h-full">
           <div className="bg-background rounded-2xl w-[80vw]"> 
          {children}
          </div>
        </main>
      </div>
    </div>
      </GlassBackground>
  );
}