import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Bar,
} from "recharts";

const DrawChart = ({ data }: any) => {
  return (
    <LineChart
      width={2200}
      height={400}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="time" />
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip
        content={({ payload, active }: any) => {
          if (active) {
            return (
              <div className="custom-tooltip">
                {payload.map((data: any, index: any) => (
                  <div key={index} className="intro">
                    <p>{`id : ${data.payload.id}`}</p>
                    <p>{`value_area : ${data.payload.value_area}`}</p>
                    <p>{`value_bar : ${data.payload.value_bar}`}</p>
                  </div>
                ))}
              </div>
            );
          }
          return null;
        }}
      />
      <Legend />
      <Line
        yAxisId="left"
        type="monotone"
        dataKey="value_area"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Area
        yAxisId="left"
        type="monotone"
        dataKey="value_area"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Bar yAxisId="right" dataKey="value_bar" barSize={20} fill="#413ea0" />
    </LineChart>
  );
};

export default DrawChart;
