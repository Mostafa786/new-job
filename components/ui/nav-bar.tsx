import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="
      flex items-center justify-between
      px-8 py-5
      bg-white/10
      backdrop-blur-xl
      border-b border-white/20
    ">
      <h1 className="text-2xl font-bold text-white">
        JobHub
      </h1>

      <div className="flex gap-6 text-white/80">
        <a href="/">Home</a>
        <a href="/jobs">Find Jobs</a>
        <a href="/companies">Companies</a>
      </div>

      <div className="flex gap-3">
        <Button variant="outline">
          Login
        </Button>

        <Button className="
          bg-purple-600 hover:bg-purple-700
        ">
          Post a Job
        </Button>
      </div>
    </nav>
  );
}