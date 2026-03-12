import { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ScatterChart, Scatter, ZAxis } from "recharts";
import { generateLiveData } from "@/data/stations";
import { PageHeader, Stat, ChartCard, StationList } from "./CoralReefs";

export default function MarineSpecies() {
  const stations = useMemo(() => generateLiveData(4), []);

  const speciesData = [
    { species: "Blue Whale", population: 15000, trend: -2.3 },
    { species: "Sea Turtle", population: 68000, trend: -5.1 },
    { species: "Dolphin", population: 120000, trend: 1.2 },
    { species: "Shark", population: 45000, trend: -8.4 },
    { species: "Coral Fish", population: 890000, trend: -3.7 },
    { species: "Seal", population: 32000, trend: 0.5 },
  ];

  const habitatRadar = [
    { subject: "Coral Reefs", A: 42, fullMark: 100 },
    { subject: "Deep Sea", A: 78, fullMark: 100 },
    { subject: "Coastal", A: 55, fullMark: 100 },
    { subject: "Open Ocean", A: 85, fullMark: 100 },
    { subject: "Mangroves", A: 38, fullMark: 100 },
    { subject: "Kelp Forest", A: 61, fullMark: 100 },
  ];

  const distribution = stations.slice(0, 10).map((s) => ({
    x: s.lon,
    y: s.lat,
    z: Math.round(s.score * 100),
    name: s.name,
  }));

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-6">
      <PageHeader icon="🐋" title="Marine Species Intelligence" subtitle="Population indicators · Habitat risk · Species distribution" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <Stat label="Tracked Species" value={speciesData.length} />
        <Stat label="At Risk" value={speciesData.filter((s) => s.trend < -3).length} color="text-destructive" />
        <Stat label="Stable" value={speciesData.filter((s) => s.trend >= -1).length} color="text-healthy" />
        <Stat label="Habitat Risk" value="62%" color="text-warning" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <ChartCard title="Species Population Estimates">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={speciesData}>
              <XAxis dataKey="species" tick={{ fill: "#9CA3AF", fontSize: 10 }} />
              <YAxis tick={{ fill: "#9CA3AF", fontSize: 10 }} />
              <Tooltip />
              <Bar dataKey="population" fill="#22D3EE" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Habitat Health Radar">
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart data={habitatRadar}>
              <PolarGrid stroke="#1E2A3A" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: "#9CA3AF", fontSize: 10 }} />
              <PolarRadiusAxis tick={{ fill: "#9CA3AF", fontSize: 9 }} />
              <Radar dataKey="A" stroke="#4DA3FF" fill="#4DA3FF" fillOpacity={0.2} />
            </RadarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <ChartCard title="Species Distribution Map">
        <ResponsiveContainer width="100%" height={250}>
          <ScatterChart>
            <XAxis dataKey="x" name="Longitude" tick={{ fill: "#9CA3AF", fontSize: 10 }} />
            <YAxis dataKey="y" name="Latitude" tick={{ fill: "#9CA3AF", fontSize: 10 }} />
            <ZAxis dataKey="z" range={[50, 400]} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter data={distribution} fill="#7C8CFF" />
          </ScatterChart>
        </ResponsiveContainer>
      </ChartCard>

      <StationList stations={stations.slice(0, 6)} />
    </div>
  );
}
