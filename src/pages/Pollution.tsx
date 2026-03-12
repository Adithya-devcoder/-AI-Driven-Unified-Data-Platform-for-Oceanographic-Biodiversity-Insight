import { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { generateLiveData } from "@/data/stations";
import { PageHeader, Stat, ChartCard, StationList } from "./CoralReefs";

export default function Pollution() {
  const stations = useMemo(() => generateLiveData(4), []);
  const pollStations = stations.filter((s) =>
    ["Pollution", "Chemical Pollution", "Hypoxic Zone", "Thermal Pollution"].includes(s.risk)
  );

  const pollutionTypes = [
    { name: "Plastic", value: 35, fill: "#EF4444" },
    { name: "Chemical", value: 25, fill: "#F59E0B" },
    { name: "Oil Spill", value: 15, fill: "#7C8CFF" },
    { name: "Nutrient", value: 25, fill: "#22D3EE" },
  ];

  const hotspots = pollStations.map((s) => ({
    name: s.name.slice(0, 15),
    level: Math.round(s.riskPct),
  }));

  const trend = Array.from({ length: 12 }, (_, i) => ({
    month: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][i],
    plastic: Math.round(40 + Math.random() * 30),
    chemical: Math.round(20 + Math.random() * 25),
  }));

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-6">
      <PageHeader icon="🏭" title="Pollution Monitor" subtitle="Ocean pollution hotspots · Chemical indicators · Risk mapping" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <Stat label="Pollution Zones" value={pollStations.length} />
        <Stat label="Avg Pollution %" value={`${Math.round(pollStations.reduce((a, s) => a + s.riskPct, 0) / (pollStations.length || 1))}%`} color="text-destructive" />
        <Stat label="Microplastic Index" value="72.4" color="text-warning" />
        <Stat label="Clean Zones" value={stations.filter((s) => s.category === "HEALTHY").length} color="text-healthy" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <ChartCard title="Pollution Type Distribution">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pollutionTypes} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" label>
                {pollutionTypes.map((e, i) => <Cell key={i} fill={e.fill} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Pollution Hotspots">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={hotspots.length > 0 ? hotspots : [{ name: "No data", level: 0 }]}>
              <XAxis dataKey="name" tick={{ fill: "#9CA3AF", fontSize: 10 }} />
              <YAxis tick={{ fill: "#9CA3AF", fontSize: 10 }} />
              <Tooltip />
              <Bar dataKey="level" fill="#EF4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <ChartCard title="Pollution Trends (12 Months)">
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={trend}>
            <XAxis dataKey="month" tick={{ fill: "#9CA3AF", fontSize: 10 }} />
            <YAxis tick={{ fill: "#9CA3AF", fontSize: 10 }} />
            <Tooltip />
            <Line type="monotone" dataKey="plastic" stroke="#EF4444" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="chemical" stroke="#F59E0B" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <StationList stations={pollStations.length > 0 ? pollStations : stations.slice(0, 4)} />
    </div>
  );
}
