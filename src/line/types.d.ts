export namespace LineChartTypes {
  export type Values = {
    x: number;
    y: number;
  };

  export interface Data {
    name: string;
    values: Values[];
  }

  export type LineChartProps = {
    id: string;
    width: number;
    height: number;
    top: number;
    right: number;
    bottom: number;
    left: number;
    data: Data[];
  };
}
