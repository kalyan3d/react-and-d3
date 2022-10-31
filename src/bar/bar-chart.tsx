import * as React from "react";
import { select } from "d3-selection";
import { scaleBand, scaleLinear } from "d3-scale";
import { axisBottom, axisLeft } from "d3-axis";
import { max } from "d3-array";
import { BarChartType } from "./types";

const BarChart = (props: BarChartType.BarChartProps) => {
  const { id, data } = props;
  React.useEffect(() => {
    draw();
  });

  const draw = () => {
    const width = props.width - props.left - props.right;
    const height = props.height - props.top - props.bottom;

    const x = scaleBand().range([0, width]).padding(0.1);

    // const x = d3.scaleLinear().range([width, 0]).padding(0.1);
    const y = scaleLinear().range([height, 0]);

    const svg = select(`#${id}`)
      .append("svg")
      .attr("width", width + props.left + props.right)
      .attr("height", height + props.top + props.bottom)
      .append("g")
      .attr("transform", `translate(${props.left},${props.top})`);

    x.domain(data.map((d) => d.x));

    y.domain([
      0,
      max(data, (d) =>
        Math.max(...data.map((dt) => (dt as BarChartType.Data).y), 0)
      )
    ] as number[]);

    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("fill", props.fill)
      .attr("class", "bar")
      .attr("x", (d) => x(d.x) || 0)
      .attr("width", x.bandwidth())
      .attr("y", (d) => y(d.y))
      .attr("height", (d) => height - y(d.y));

    // add the x Axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(axisBottom(x));

    // add the y Axis
    svg.append("g").call(axisLeft(y));
  };

  return <div id={id} className="bar-chart" />;
};

export default BarChart;
