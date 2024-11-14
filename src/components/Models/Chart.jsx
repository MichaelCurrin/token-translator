import React from 'react';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

function formatNumber(value) {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1).replace(/\.0$/, '')}M`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(0)}K`;
  }
  return value.toString();
}

function Chart({ xAxisLabel, yAxisLabel, chartData }) {
  return (
    <div
      style={{
        padding: '2px',
        borderRadius: '8px',
      }}
    >
      <div style={{ height: '250px', width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 5, right: 5, left: 5, bottom: 20 }}
          >
            <XAxis
              dataKey="name"
              tick={{ fill: '#fff' }}
              label={{
                value: xAxisLabel,
                position: 'insideBottom',
                offset: -10,
                fill: '#fff',
              }}
            />
            <YAxis
              tick={{ fill: '#fff' }}
              tickFormatter={formatNumber}
              label={{
                value: yAxisLabel,
                angle: -90,
                position: 'insideLeft',
                fill: '#fff',
              }}
            />
            <Tooltip
              contentStyle={{ color: '#000000' }}
              formatter={(value) => [value.toLocaleString(), 'value']}
            />
            <Bar dataKey="value" fill="var(--secondary-bg-color)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
