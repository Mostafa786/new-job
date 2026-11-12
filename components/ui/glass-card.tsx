type GlassCardType = {
    children: React.ReactNode,
    className:string,
}


export default function GlassCard({children, className = ""}:GlassCardType) {
  return (
    <div className={`
      bg-white/10
      backdrop-blur-3xl
      border border-white/20
      shadow-lg
      rounded-2xl
      ${className}
    `}>
      {children}
    </div>
  );
}