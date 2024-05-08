import React from "react";
import "./expenses.css"
class Tip extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        
        return(
            <div id="content">
                {/* Left side div */}
                <div className="userUI">
                    <div id="bill">
                        <div className="title">Bill</div>
                        <input />
                    </div>
                    <div id="tipPercent">
                        <div className="title">Select Tip %</div>
                        <div id="tips">
                            {/* Add buttons here */}
                        </div>
                    </div>
                    <div id="people">
                        <div className="title">Number of People</div>
                        <input type="number" />
                    </div>
                </div>
                {/* Right side div */}
                <div className="totalDiv">
                    <div className="spread">
                        <div>
                            <p>Tip Amount</p>
                            <br />
                            <p>/ person</p>
                        </div>
                        <div>
                            $
                        </div>
                    </div>
                    <div className="spread">
                        <div>
                            <p>Total</p>
                            <br />
                            <p>/ person</p>
                        </div>
                        <div>
                            $
                        </div>
                    </div>
                    <button>Reset</button>
                </div>
            </div>
        )
    }
}

function randomBill(){
    let bill = (Math.random()*170 + 30).toFixed(2);
    return bill;
}

export default Tip;