import type { LiveStation } from "@/data/stations";

interface Props {
  stations: LiveStation[];
}

export default function AlertsPanel({ stations }: Props) {
  const critical = stations.filter((s) => s.category === "CRITICAL").sort((a, b) => a.score - b.score);
  const moderate = stations.filter((s) => s.category === "MODERATE").sort((a, b) => a.score - b.score);

  return (
    <div className="mb-4">
      <p className="font-mono text-[10px] tracking-[2px] text-primary uppercase mb-3">⚠ Active Risk Alerts</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="font-display text-sm font-bold text-foreground mb-2">🔴 Critical Zones</p>
          {critical.length === 0 ? (
            <p className="font-mono text-xs text-muted-foreground">No critical zones active</p>
          ) : (
            critical.map((s) => (
              <div
                key={s.name}
                className="mb-2 rounded-md border-l-[3px] border-destructive bg-destructive/5 p-3"
              >
                <p className="font-mono text-xs text-destructive">
                  <span className="font-bold">{s.name}</span>
                  <br />
                  {s.risk} · Score: {s.score} · Risk: {s.riskPct}%
                </p>
              </div>
            ))
          )}
        </div>
        <div>
          <p className="font-display text-sm font-bold text-foreground mb-2">🟠 Moderate Zones</p>
          {moderate.length === 0 ? (
            <p className="font-mono text-xs text-muted-foreground">No moderate zones active</p>
          ) : (
            moderate.map((s) => (
              <div
                key={s.name}
                className="mb-2 rounded-md border-l-[3px] border-warning bg-warning/5 p-3"
              >
                <p className="font-mono text-xs text-warning">
                  <span className="font-bold">{s.name}</span>
                  <br />
                  {s.risk} · Score: {s.score} · Risk: {s.riskPct}%
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
