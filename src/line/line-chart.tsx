/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from "react";
import { select } from "d3-selection";
import { scaleLinear, scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { line } from "d3-shape";
import { axisBottom, axisLeft } from "d3-axis";
import { max } from "d3-array";
import { LineChartTypes } from "./types";

const LineChart = (props: LineChartTypes.LineChartProps) => {
  const { id, data } = props;

  React.useEffect(() => {
    draw();
  }, []);

  const draw = () => {
    const width = props.width - props.left - props.right;
    const height = props.height - props.top - props.bottom;

    const svg = select(`#${id}`)
      .append("svg")
      .attr("width", width + props.left + props.right)
      .attr("height", height + props.top + props.bottom)
      .append("g")
      .attr("transform", `translate(${props.left},${props.top})`);

    const xScale = scaleLinear()
      .domain([
        0,
        max(data[0].values, (d) => ((d as unknown) as LineChartTypes.Values).x)
      ] as number[])
      .range([0, width]);

    // svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(xScale).ticks(5));

    const yScale = scaleLinear()
      .domain([
        0,
        max(data[0].values, (d) => ((d as unknown) as LineChartTypes.Values).y)
      ] as number[])
      .range([height, 0]);

    // svg.append('g').call(d3.axisLeft(yScale).ticks(5));

    const color = scaleOrdinal(schemeCategory10);

    const l = line()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));

    const lines = svg.append("g").attr("class", "lines");

    lines
      .selectAll(".line-group")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "line-group")
      .append("path")
      .attr("class", "line")
      .attr("d", (d) => l(d.values))
      .style("stroke", (d, i: any) => color(i))
      .attr("stroke-width", 1.6);

    /* Add Axis into SVG */
    const xAxis = axisBottom(xScale).ticks(5);
    const yAxis = axisLeft(yScale).ticks(5);

    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);

    svg.append("g").attr("class", "y axis").call(yAxis);
  };

  return <div id={id} className="line-chart" />;
};

export default LineChart;
