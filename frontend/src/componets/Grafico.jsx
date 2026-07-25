import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { dia: 1, valor: 30 },
  { dia: 2, valor: 45 },
  { dia: 3, valor: 28 },
  { dia: 4, valor: 50 },
  { dia: 5, valor: 35 },
  { dia: 6, valor: 42 },
  { dia: 7, valor: 38 },
  { dia: 8, valor: 55 },
  { dia: 9, valor: 40 },
  { dia: 10, valor: 48 },
  { dia: 11, valor: 32 },
  { dia: 12, valor: 52 },
  { dia: 13, valor: 44 },
  { dia: 14, valor: 36 },
  { dia: 15, valor: 58 },
  { dia: 16, valor: 41 },
  { dia: 17, valor: 47 },
  { dia: 18, valor: 33 },
  { dia: 19, valor: 54 },
  { dia: 20, valor: 39 },
  { dia: 21, valor: 46 },
  { dia: 22, valor: 37 },
  { dia: 23, valor: 50 },
  { dia: 24, valor: 43 },
  { dia: 25, valor: 49 },
  { dia: 26, valor: 34 },
  { dia: 27, valor: 56 },
  { dia: 28, valor: 40 },
  { dia: 29, valor: 45 },
  { dia: 30, valor: 53 },
];

const GraficoLinea = () => {
  return (
    <div className="w-64 h-48">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="valor"
            stroke="#14b8a6"
            strokeWidth={2}
            dot={false}
          />
          <XAxis
            dataKey="dia"
            tick={{ fontSize: 10, fill: '#6b7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
            tickLine={false}
            interval={4}
          />
          <YAxis
            tick={{ fontSize: 10, fill: '#6b7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
            tickLine={false}
            domain={['auto', 'auto']}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoLinea;
