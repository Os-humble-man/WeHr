import { ResponsiveContainer, Line, LineChart, Tooltip, Area } from "recharts";

function ChartEmploye() {
  const data = [
    { name: "Page A", uv: 4000, pv: 2000, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 4100, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 4300, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Tooltip
          contentStyle={{ background: "none", border: "none" }}
          labelStyle={{ display: "none" }}
          position={{ x: 10, y: 70 }}
        />
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="#b91c1c" stopOpacity={0.8} />
            <stop offset="90%" stopColor="#991b1b" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="pv" stroke="none" fill="url(#areaGradient)" />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#f87171"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default ChartEmploye;
