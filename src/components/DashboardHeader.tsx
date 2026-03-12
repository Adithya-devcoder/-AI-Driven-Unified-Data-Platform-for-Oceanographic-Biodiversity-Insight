import { motion } from "framer-motion";

interface Props {
  liveMode: boolean;
}

export default function DashboardHeader({ liveMode }: Props) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 flex-wrap">
        <h1 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          Ocean Risk Intelligence Platform
        </h1>
        {liveMode ? (
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-healthy/30 bg-healthy/10 px-3 py-1 font-mono text-[10px] tracking-widest text-healthy"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-healthy animate-pulse-glow" />
            LIVE
          </motion.span>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-warning/30 bg-warning/10 px-3 py-1 font-mono text-[10px] tracking-widest text-warning">
            ⏸ PAUSED
          </span>
        )}
      </div>
      <p className="mt-1 font-mono text-[10px] tracking-[2.5px] text-muted-foreground uppercase">
        AI-Driven · Real-Time · Biodiversity & Oceanographic Insights
      </p>
    </div>
  );
}
