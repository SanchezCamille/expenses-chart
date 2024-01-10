import './MainComponent.scss';
import ChartBar from "./ChartBar";
import Data from '../../data.json';

function MainComponent() {
  const totalAmount = Data.reduce((acc, item) => acc + item.amount, 0).toFixed(2);

  return (
    <div className="main-component">
      <h1 className="main-component__title">Spending - Last 7 days</h1>
      <div className="main-component__graph">
        <ChartBar />
      </div>

      <div className="main-component__sub-container">
        <div className="main-component__content__total-amount">
          <p className='main-component__total-amount__this-month'>Total this month</p>
          <p className='main-component__total-amount__price'>${totalAmount}</p>
        </div>
        <div className="main-component__content__percentage">
          <p className="main-component__percentage__rate">+2.4%</p>
          <p className="main-component__percentage__last-month">from last month</p>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;

