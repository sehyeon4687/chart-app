import DrawChart from "./DrawChart";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

interface IData {
  id: string;
  value_area: number;
  value_bar: number;
}

function App() {
  const [data, setData] = useState<any>([]);
  const [filter, setFilter] = useState<any>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/chart_data.json");
        setData(response.data.response);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const dataArray = Object.keys(data).map((key) => {
    return {
      time: key,
      id: data[key].id,
      value_area: data[key].value_area,
      value_bar: data[key].value_bar,
    };
  });

  const ID = Object.values<IData>(data).map((el) => el.id);

  const newID = [...new Set(ID)];

  return (
    <AppStyle className="App">
      <h1>Flexsys Chart</h1>
      <BtnContainer>
        {newID.map((el, idx) => {
          return (
            <button
              key={idx}
              onClick={(e) => {
                const button = e.target as HTMLButtonElement;
                setFilter(button.textContent);
              }}
            >
              {el}
            </button>
          );
        })}
        <button onClick={() => setFilter("")}>필터 초기화</button>
      </BtnContainer>
      <DrawChart data={dataArray} setFilter={setFilter} filter={filter} />
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const BtnContainer = styled.div`
  button {
    margin: 20px 30px;
    scale: 1.5;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 4px;
    color: #333333;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    padding: 8px 16px;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;
