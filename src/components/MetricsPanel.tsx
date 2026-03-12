import { motion } from "framer-motion";

interface MetricProps {
  label: string;
  value: number | string;
  icon: string;
  variant?: "default" | "critical" | "moderate" | "healthy";
}

function MetricCard({ label, value, icon, variant = "default" }: MetricProps) {
  const borderClass = {
    default: "border-border",
    critical: "border-destructive/30",
    moderate: "border-warning/30",
    healthy: "border-healthy/30",
  }[variant];

  const valueClass = {
    default: "text-accent",
    critical: "text-destructive",
    moderate: "text-warning",
    healthy: "text-healthy",
  }[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl border ${borderClass} bg-card p-4`}
    >
      <p className="font-mono text-[10px] tracking-[1px] text-primary uppercase mb-1">
        {icon} {label}
      </p>
      <p className={`font-display text-2xl font-extrabold ${valueClass}`}>{value}</p>
    </motion.div>
  );
}

interface Props {
  metrics: {
    total: number;
    critical: number;
    moderate: number;
    healthy: number;
    avgScore: number;
  };
}

export default function MetricsPanel({ metrics }: Props) {
  return (
    <div className="mb-4">
      <p className="font-mono text-[10px] tracking-[2px] text-primary uppercase mb-3">📊 Overview</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <MetricCard label="Stations" value={metrics.total} icon="🌐" />
        <MetricCard label="Critical" value={metrics.critical} icon="🔴" variant="critical" />
        <MetricCard label="Moderate" value={metrics.moderate} icon="🟠" variant="moderate" />
        <MetricCard label="Healthy" value={metrics.healthy} icon="🟢" variant="healthy" />
        <MetricCard label="Avg Score" value={metrics.avgScore} icon="📊" />
      </div>
    </div>
  );
}
