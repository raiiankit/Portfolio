import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const LeetcodePieChart = ({ easy, medium, hard }) => {
  const data = [
    { name: "Easy", value: easy, color: "#00C49F" },
    { name: "Medium", value: medium, color: "#FFBB28" },
    { name: "Hard", value: hard, color: "#FF8042" },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default LeetcodePieChart;
