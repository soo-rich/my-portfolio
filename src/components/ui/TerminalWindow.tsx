interface Props {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function TerminalWindow({ title = "terminal", children, className = "" }: Props) {
  return (
    <div className={`rounded-xl border border-[#242424] bg-[#171717] overflow-hidden ${className}`}>
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 h-9 bg-[#111] border-b border-[#242424]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF6060]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFCC00]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#00FF87]" />
        <span className="ml-3 font-mono text-xs text-[#6B6B6B]">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
