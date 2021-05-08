import { SliderRange } from "../component/slider-range/SliderRange";


export function Pricing(){
    return(
        <div className="pricing-page">
            <div className="bg-main bg-main-1"></div>
            <section className="main">
                <div className="content">
                    <div className="content-head">
                        <h1>Simple, traffic-based pricing</h1>
                        <h5>Sign-up for our 30-day. No craedit card required.</h5>
                    </div>
                    <div className="content-body">
                        <SliderRange />
                    </div>
                </div>
            </section>
            <div className="bg-main bg-main-2"></div>
        </div>
    )
}