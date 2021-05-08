


export function SliderRange(){
    return(
        <div className="card">
            <div className="card-head">
                <div className="head-left">
                    <h4>100K PAGEVIEWS</h4>
                </div>
                <div className="head-right">
                    <h1>$16.00</h1><span>/ month</span>
                </div>
            </div>
            <div className="card-slider">
                <input type="range" />
            </div>
            <div className="card-choice">
                <div className="choice-left">
                    <h4>Monthly Billing</h4>
                </div>
                <div className="choice-center">
                    <div className="box">
                        <div class="circle"></div>
                    </div>
                </div>
                <div className="choice-right">
                    <h4>Monthly Billing</h4>
                    <span>25% discount</span>
                </div>
            </div>
            <div className="card-footer">
                <div className="footer-left">
                    <div className="information">
                        <div className="item">
                            <div className="icon"></div>
                            <div className="text"><h4>Unlimited websites</h4></div>
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <button>Start my trial!</button>
                </div>
            </div>
        </div>
    )
}