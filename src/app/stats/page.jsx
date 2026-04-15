"use client";

import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#244D3F", "#7C3AED", "#3AA76D"];

const StatsPage = () => {
  const [chartData, setChartData] = useState([
    { name: "Call", value: 0 },
    { name: "Text", value: 0 },
    { name: "Video", value: 0 },
  ]);

  useEffect(() => {
    const timeline = JSON.parse(localStorage.getItem("timelineData")) || [];

    const counts = timeline.reduce(
      (acc, item) => {
        if (item.type === "call") acc.call += 1;
        if (item.type === "text") acc.text += 1;
        if (item.type === "video") acc.video += 1;
        return acc;
      },
      { call: 0, text: 0, video: 0 }
    );

    setChartData([
      { name: "Call", value: counts.call },
      { name: "Text", value: counts.text },
      { name: "Video", value: counts.video },
    ]);
  }, []);

  const totalInteractions = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="p-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-[#244D3F]">Friendship Analytics</h2>


        <div className="mt-8 rounded-2xl border border-gray-200 p-4 shadow-sm">
          <h3 className="mb-4 text-xl font-semibold text-[#244D3F]">
            By Interaction Type
          </h3>

          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={6}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;