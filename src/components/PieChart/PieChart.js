import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell, Legend,
} from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
 cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PeiChart = ({ data }) => {
  console.log(data);
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={150}
        cy={200}
        labelLine={false}
        legentType={'circle'}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="sumValue"
      >
        {
          data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
      <Legend
        layout="vertical"
        verticalAlign="middle"
        align="right"
      />
    </PieChart>
  );
}

export default PeiChart;
