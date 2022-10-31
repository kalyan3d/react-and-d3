export namespace BarChartType {
  export type Data = {
    x: string;
    y: number;
  };

  export type BarChartProps = {
    id: string;
    width: number;
    height: number;
    top: number;
    right: number;
    bottom: number;
    left: number;
    fill: string;
    data: Data[];
  };
}
