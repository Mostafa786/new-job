export default function GlassBackground({ children } : {children:React.ReactNode}) {
  return (
    <main className="
      min-h-dvh
      bg-gradient-to-br
      from-[#172554]
      via-[#4338CA]
      to-[#7C3AED]
      relative
      overflow-hidden
    ">
      {/* Background decoration */}
      <div className="
        absolute -top-40 -left-40
        w-96 h-96
        bg-blue-400/30
        rounded-full
        blur-7xl
      " />

      <div className="
        absolute top-1/2 -right-40
        w-96 h-96
        bg-purple-400/30
        rounded-full
        blur-3xl
      " />

      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
}