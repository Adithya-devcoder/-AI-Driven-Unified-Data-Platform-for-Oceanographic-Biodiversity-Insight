import { PageHeader } from "./CoralReefs";

export default function About() {
  return (
    <div className="mx-auto max-w-[1600px] px-4 py-6">
      <PageHeader icon="ℹ️" title="About the Platform" subtitle="AI-Driven Unified Data Platform for Oceanographic & Biodiversity Insights" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-lg font-bold text-foreground mb-3">Mission</h2>
          <p className="font-mono text-xs leading-relaxed text-muted-foreground">
            Our platform aggregates oceanographic and biodiversity datasets to identify and predict
            environmental risks across the world's oceans. We analyze coral bleaching events,
            biodiversity loss patterns, ocean pollution hotspots, marine ecosystem degradation,
            temperature anomalies, and species habitat risks — delivering actionable intelligence
            to research agencies, policymakers, and conservation organizations.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-lg font-bold text-foreground mb-3">Technology</h2>
          <div className="space-y-2">
            {[
              ["Real-Time Monitoring", "Live data feeds from 20+ ocean monitoring stations worldwide"],
              ["AI Risk Prediction", "Machine learning models predict environmental risks with confidence scoring"],
              ["Interactive Mapping", "deck.gl powered 3D visualization with scatter, column, and heatmap layers"],
              ["Modular Architecture", "Scalable codebase designed for production-grade environmental intelligence"],
            ].map(([t, d]) => (
              <div key={t} className="rounded-lg border border-border/50 bg-muted/30 p-3">
                <p className="font-mono text-xs font-bold text-primary">{t}</p>
                <p className="font-mono text-[10px] text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-lg font-bold text-foreground mb-3">Environmental Risks Monitored</h2>
          <div className="grid grid-cols-2 gap-2">
            {["Coral Bleaching", "Biodiversity Loss", "Ocean Pollution", "Marine Ecosystem Degradation", "Ocean Temperature Change", "Species Habitat Risk"].map((r) => (
              <div key={r} className="flex items-center gap-2 rounded-lg border border-border/50 bg-muted/30 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="font-mono text-[11px] text-foreground">{r}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-lg font-bold text-foreground mb-3">Data Sources</h2>
          <p className="font-mono text-xs leading-relaxed text-muted-foreground mb-3">
            The platform currently uses simulated monitoring station data that closely mirrors real-world
            oceanographic patterns. In production, this integrates with:
          </p>
          <ul className="space-y-1">
            {["NOAA Ocean Data", "Copernicus Marine Service", "Global Biodiversity Information Facility", "World Ocean Atlas", "Coral Reef Watch"].map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span className="text-accent">→</span>
                <span className="font-mono text-[11px] text-muted-foreground">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-8 text-center font-mono text-[10px] text-muted-foreground">
        Ocean Risk Monitor · AI-Driven Environmental Intelligence · Hackathon Project 2026
      </p>
    </div>
  );
}
