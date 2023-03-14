import DrawChart from "./DrawChart";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/19736c70-c41c-4a4a-b45f-b866eebab626/mock_data_example-flexsys.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230314T070629Z&X-Amz-Expires=86400&X-Amz-Signature=589af8f226b2aa5aaf7b5fe2a547a51f9c25696ad219c4bfe9b7b446fdfde563&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data_example-flexsys.json%22&x-id=GetObject"
        );
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

  return (
    <div className="App">
      <DrawChart data={dataArray} />
    </div>
  );
}

export default App;
