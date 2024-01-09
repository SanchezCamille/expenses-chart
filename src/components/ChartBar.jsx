import { BarChart, Bar, XAxis, Tooltip } from 'recharts';
import './ChartBar.scss';
import Data from '../../data.json';

function ChartBar() {
  return (
    <>
      <BarChart width={400} height={200} data={Data}>
        <XAxis dataKey="day" hide={true}/>
        <Tooltip />
        <Bar dataKey="amount" fill="hsl(10, 79%, 65%)" ClassName="bar" />
      </BarChart>
    </>
  );
}

export default ChartBar;



