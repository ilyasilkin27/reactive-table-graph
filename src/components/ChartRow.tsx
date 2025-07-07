import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { FC } from 'react';

export interface ChartRowProps {
  row: {
    category: string;
    chartData: number[];
  };
}

const ChartRow: FC<ChartRowProps> = ({ row }) => (
  <tr className="chart-row">
    <td colSpan={4}>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          title: { text: row.category },
          xAxis: { categories: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'] },
          yAxis: { title: { text: 'Значения' } },
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