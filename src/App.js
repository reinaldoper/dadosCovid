import { useEffect, useState } from "react";
import React from 'react';
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import ApiConversão  from "./Data";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [userReset, setReset] = useState(false)
  const [userData, setUserData] = useState({});
  useEffect(async () => {
    const result = await ApiConversão();
    setUserData({
      labels: result.map((data) => data.state),
      datasets: [
        {
          label: "Mortes de Covid esse ano por estado",
          data: result.map((data) => Number(data.deaths)),
          backgroundColor: ['red', 'blue'],
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    });
    setReset(true);
  }, [])

  return (
    <div className="App">
      { userReset ? <div><div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div></div> : <h1>Carregando</h1> }
    </div>
  );
}

export default App;