import * as React from "react";

import BarChart from "./bar/bar-chart";
import "./styles.scss";
import LineChartGroup from "./line/line-chart-group";
export default function App() {
  return (
    <div className="App">
      <h2>Line Chart</h2>
      <LineChartGroup />
      <h2>Bar Chart</h2>
      <BarChart
        id="welcomeBarChart"
        top={10}
        right={50}
        bottom={50}
        left={50}
        width={900}
        height={400}
        fill="tomato"
        data={[
          {
            x: "0",
            y: 100
          },
          {
            x: "1",
            y: 200
          },
          {
            x: "2",
            y: 250
          },
          {
            x: "3",
            y: 100
          },
          {
            x: "4",
            y: 400
          }
        ]}
      />
    </div>
  );
}
