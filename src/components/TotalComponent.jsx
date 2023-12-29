import './TotalComponent.scss';

function TotalComponent(){
    return(
        <div className="total-component">
            <div className="total-component__balance">
            <h2 className='total-component__balance__title'>My balance</h2>
            <p>$921.49</p>
            </div>
            <div className="total-component__logo-elements">
                <div className="empty-circle"></div>
                <div className="plain-circle"></div>
            </div>
        </div>
    );
}

export default TotalComponent;