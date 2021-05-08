import react, { useEffect, useState } from 'react';
import {FaCheck} from 'react-icons/fa';
import $ from 'jquery';

export function SliderRange(){

    const [slider, setSlider] = useState(1);
    const [billing, setBilling] = useState(0);

    useEffect(() => {
    }, []);
    
    const handleChoice = () => {
        $('.choice-center .box').toggleClass('active');
        setSlider(1);
        if(billing == 0){
            setBilling(1);
        } else {
            setBilling(0);
        }
    }

    const handleChange = (event) => {
        setSlider(event.target.value);

    }

    return(
        <div className="card">
            <div className="card-head">
                <div className="head-left">
                    <h4>100K PAGEVIEWS</h4>
                </div>
                <div className="head-right">
                    {
                        (billing == 0) ? 
                            <h1>$ {slider * 1}.00</h1>
                        :
                            <h1>$ {slider * 1 * 12}.00</h1>
                    }
                    <span>/ month</span>
                </div>
            </div>
            <div className="card-slider">
                <input type="range" className="slider" max="12" min="1" value={slider} onChange={handleChange} />
            </div>
            <div className="card-choice">
                <div className="choice-left">
                    <h4>Monthly Billing</h4>
                </div>
                <div className="choice-center">
                    <div className="box" onClick={handleChoice}>
                        <div class="circle"></div>
                    </div>
                </div>
                <div className="choice-right">
                    <h4>Yearly Billing</h4>
                    <span id="desktop">25% discount</span>
                    <span id="mobile">-25%</span>
                </div>
            </div>
            <div className="card-footer">
                <div className="footer-left">
                    <div className="information">
                        <div className="item">
                            <div className="icon"><FaCheck /></div>
                            <div className="text"><h4>Unlimited websites</h4></div>
                        </div>
                    </div>
                    <div className="information">
                        <div className="item">
                            <div className="icon"><FaCheck /></div>
                            <div className="text"><h4>100% data ownership</h4></div>
                        </div>
                    </div>
                    <div className="information">
                        <div className="item">
                            <div className="icon"><FaCheck /></div>
                            <div className="text"><h4>Email reports</h4></div>
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