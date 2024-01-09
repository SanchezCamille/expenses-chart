/* eslint-disable react/prop-types */

import { BarChart, Bar, Cell } from 'recharts';
import Data from '../../data.json';

function RoundedBar(props) {
  const { x, y, width, height, fill } = props;

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} rx={4} />
    </g>
  );
}

function ChartBar() {

  const maxValue = Data.reduce((max, item) => {
    return item.amount > max ? item.amount : max;
  }, Number.MIN_SAFE_INTEGER);

  return (
    
    <BarChart width={400} height={300} data={Data} >
        <Bar dataKey="amount" shape={RoundedBar}>
          {Data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              cursor="pointer"
              fill={entry.amount === maxValue ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)'}
            />
          ))}
        </Bar>
    </BarChart>
    
  );
}

export default ChartBar;

