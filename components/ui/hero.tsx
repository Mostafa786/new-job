import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="text-center py-24 px-6">

      <h1 className="
        text-5xl font-bold
        text-white
        max-w-3xl mx-auto
      ">
        Find Your Next Opportunity
      </h1>

      <p className="text-white/70 mt-5">
        Discover thousands of jobs from top companies.
      </p>

      <div className="
        flex flex-wrap gap-3
        max-w-3xl mx-auto
        mt-10 p-3
        bg-white/20
        backdrop-blur-xl
        border border-white/30
        rounded-2xl
      ">
        <Input
          placeholder="Job title..."
          className="flex-1 min-w-40 bg-white/10 border-white/20 text-white"
        />

        <Input
          placeholder="Location..."
          className="flex-1 min-w-40 bg-white/10 border-white/20 text-white"
        />

        <Button className="bg-purple-600">
          Search Jobs
        </Button>
      </div>

    </section>
  );
}