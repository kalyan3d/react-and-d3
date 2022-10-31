import * as React from "react";
import LineChart from "./line-chart";
const LineChartGroup = () => {
  const zoom = () => {
    alert("zoom in");
  };

  return (
    <>
      <div className="btn-group">
        <button onClick={zoom}>+</button>
      </div>
      <LineChart
        id="summaryChart"
        top={10}
        right={50}
        bottom={50}
        left={50}
        width={900}
        height={300}
        data={[
          {
            name: "Tile [12, 3]",
            values: [
              {
                x: 0,
                y: 100
              },
              {
                x: 1,
                y: 200
              },
              {
                x: 2,
                y: 250
              },
              {
                x: 3,
                y: 100
              },
              {
                x: 4,
                y: 200
              }
            ]
          },
          {
            name: "Tile [13, 3]",
            values: [
              {
                x: 0,
                y: 250
              },
              {
                x: 1,
                y: 200
              },
              {
                x: 2,
                y: 100
              },
              {
                x: 3,
                y: 0
              },
              {
                x: 4,
                y: 250
              }
            ]
          }
        ]}
      />
      <LineChart
        id="summaryChart2"
        top={10}
        right={50}
        bottom={50}
        left={50}
        width={900}
        height={300}
        data={[
          {
            name: "Tile [12, 3]",
            values: [
              {
                x: 0,
                y: 50
              },
              {
                x: 1,
                y: 100
              },
              {
                x: 2,
                y: 150
              },
              {
                x: 3,
                y: 30
              },
              {
                x: 4,
                y: 40
              }
            ]
          },
          {
            name: "Tile [13, 3]",
            values: [
              {
                x: 0,
                y: 75
              },
              {
                x: 1,
                y: 96
              },
              {
                x: 2,
                y: 0
              },
              {
                x: 3,
                y: 53
              },
              {
                x: 4,
                y: 85
              }
            ]
          }
        ]}
      />
    </>
  );
};

export default LineChartGroup;
