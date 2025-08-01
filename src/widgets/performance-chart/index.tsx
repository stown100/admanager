import React from "react";
import { Card } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  {
    name: "Mon",
    impressions: 4000,
    clicks: 2400,
    spend: 2400,
    conversions: 120,
  },
  {
    name: "Tue",
    impressions: 3000,
    clicks: 1398,
    spend: 2210,
    conversions: 98,
  },
  {
    name: "Wed",
    impressions: 2000,
    clicks: 9800,
    spend: 2290,
    conversions: 156,
  },
  {
    name: "Thu",
    impressions: 2780,
    clicks: 3908,
    spend: 2000,
    conversions: 134,
  },
  {
    name: "Fri",
    impressions: 1890,
    clicks: 4800,
    spend: 2181,
    conversions: 142,
  },
  {
    name: "Sat",
    impressions: 2390,
    clicks: 3800,
    spend: 2500,
    conversions: 168,
  },
  {
    name: "Sun",
    impressions: 3490,
    clicks: 4300,
    spend: 2100,
    conversions: 189,
  },
];

export const PerformanceChart: React.FC = () => {
  return (
    <Card title="Performance Overview">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="impressions"
            stroke="#8884d8"
            strokeWidth={2}
            name="Impressions"
          />
          <Line
            type="monotone"
            dataKey="clicks"
            stroke="#82ca9d"
            strokeWidth={2}
            name="Clicks"
          />
          <Line
            type="monotone"
            dataKey="spend"
            stroke="#ffc658"
            strokeWidth={2}
            name="Spend"
          />
          <Line
            type="monotone"
            dataKey="conversions"
            stroke="#ff7300"
            strokeWidth={2}
            name="Conversions"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
