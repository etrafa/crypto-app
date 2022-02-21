import { Line } from "react-chartjs-2";

const Chart = () => {
  return (
    <Line
      height={400}
      width={600}
      data={{
        labels: ["red", "blue"],
      }}
    />
  );
};

export default Chart;
