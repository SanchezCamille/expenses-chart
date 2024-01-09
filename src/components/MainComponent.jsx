import './MainComponent.scss'
import ChartBar from "./ChartBar";


function MainComponent(){
    return(
        <div className="main-component">
        <h1>Spending - Last 7 days</h1>
        <div className="main-component__graph">
            <ChartBar />
        </div>
        <div>
            <span>Total this month</span>
            <span>$478.33</span>
        </div>
        <div>
            <span>+2.4%</span>
            <span>from last month</span>
        </div>
        </div>
    );
}

export default MainComponent;