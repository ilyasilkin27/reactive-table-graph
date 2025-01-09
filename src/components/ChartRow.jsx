import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ChartRow = ({ row }) => (
  <tr className="chart-row">
    <td colSpan={4}>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          title: { text: row.category },
          xAxis: { categories: ["Пн", "Вт", "Ср", "Чт", "Пт"] },
          yAxis: { title: { text: "Значения" } },
          series: [
            {
              name: row.category,
              data: row.chartData,
            },
          ],
        }}
      />
    </td>
  </tr>
);

export default ChartRow;
