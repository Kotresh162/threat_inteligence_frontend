import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

const SeverityBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="severity_score" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={`hsl(${index * 60}, 70%, 60%)`} // Randomized colors
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SeverityBarChart;
