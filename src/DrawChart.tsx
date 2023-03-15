import { Key } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Bar,
  ComposedChart,
  Cell,
} from "recharts";

import styled from "styled-components";
import CustomTooltip from "./CustomTooltip";

const DrawChart = ({ data, filter, setFilter }: any) => {
  return (
    <ChartStayle>
      <ComposedChart width={4200} height={500} data={data}>
        <XAxis dataKey="time" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid stroke="#f5f5f5" />
        <Legend />
        <Area
          yAxisId="right"
          type="monotone"
          dataKey="value_area"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Bar
          yAxisId="left"
          dataKey="value_bar"
          fill="#8884d8"
          barSize={15}
          onClick={(data) => setFilter(data.id)}
          order={0}
        >
          {data.map((el: { id: any }, idx: Key | null | undefined) => (
            <Cell key={idx} fill={el.id === filter ? "#E94560" : "#8884d8"} />
          ))}
        </Bar>
      </ComposedChart>
    </ChartStayle>
  );
};

export default DrawChart;

const ChartStayle = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  width: 80%;
  padding: 10px 10px;

  ::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
  }

  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #217af4; /* 스크롤바의 색상 */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
  }

  ul {
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    bottom: 10vh;
    left: 0;
    font-size: 30px;
    z-index: 3;
  }
`;
