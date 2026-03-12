import { useState } from "react";
import type { LiveStation } from "@/data/stations";

interface Props {
  stations: LiveStation[];
}

export default function DataTable({ stations }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-left transition-colors hover:bg-muted"
      >
        <span className="font-mono text-[10px] tracking-[2px] text-primary uppercase">
          📋 Full Station Data Table
        </span>
        <span className="ml-auto text-muted-foreground text-xs">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="mt-1 overflow-x-auto rounded-b-xl border border-t-0 border-border bg-card">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                {["Station", "Score", "Category", "Risk", "Risk %", "Region"].map((h) => (
                  <th key={h} className="px-4 py-2 font-mono text-[10px] tracking-[1px] text-primary uppercase">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...stations].sort((a, b) => a.score - b.score).map((s) => (
                <tr key={s.name} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-2 font-mono text-xs text-foreground">{s.name}</td>
                  <td className="px-4 py-2 font-mono text-xs text-accent">{s.score}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 font-mono text-[10px] ${
                        s.category === "CRITICAL"
                          ? "bg-destructive/10 text-destructive"
                          : s.category === "MODERATE"
                          ? "bg-warning/10 text-warning"
                          : "bg-healthy/10 text-healthy"
                      }`}
                    >
                      {s.category}
                    </span>
                  </td>
                  <td className="px-4 py-2 font-mono text-xs text-muted-foreground">{s.risk}</td>
                  <td className="px-4 py-2 font-mono text-xs text-foreground">{s.riskPct}%</td>
                  <td className="px-4 py-2 font-mono text-xs text-muted-foreground">{s.region}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
