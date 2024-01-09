/* eslint-disable react/prop-types */

import { BarChart, Bar, Cell, Tooltip, XAxis, ResponsiveContainer } from 'recharts';
import Data from '../../data.json';
import './ChartBar.scss';

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
    <>
    <ResponsiveContainer width="100%" height="100%">
    <BarChart width="100%" height="100%" data={Data} >
        <XAxis dataKey="day" hide={true}/>
        <Tooltip />
        <Bar dataKey="amount" shape={RoundedBar}>
          {Data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.amount === maxValue ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)'}
            />
          ))}
        </Bar>
    </BarChart>
    </ResponsiveContainer>
    {Data.map((item, i) => (
        <span key={i} className='days'>{item.day}</span>
      ))}
    
    </>
  );
}

export default ChartBar;

