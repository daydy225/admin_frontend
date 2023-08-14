import './chart.css'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="chart">
      <div className="chartTitle">
        <h3>{title}</h3>
        <ResponsiveContainer
          width="100%"
          aspect={3 / 1}
        >
          <LineChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#5550bd"
            />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke="#5550bd"
            />
            <Tooltip />
            {grid && (
              <CartesianGrid
                stroke="#e0dfdf"
                strokeDasharray="5 5"
              />
            )}
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
