import React from "react";
// import "./expenses.css"
class Tip extends React.Component{
    constructor(props){
        super(props);
        const newBill = randomBill();
        const totalWithoutTipPerPerson = newBill / 1;
        const totalTip = (newBill * 10) / 100; // Calculate tip amount from the total bill
        const totalTipPerPerson = totalTip / 1;
        const totalWithTipPerPerson = totalWithoutTipPerPerson + totalTipPerPerson;

        this.state = {
            bill: newBill,
            tip: 10,
            people: 1,
            tipAmount:totalTipPerPerson,
            total:totalWithTipPerPerson
        }

    }



    componentDidUpdate(prevProps, prevState) {
        if(this.state.people !== prevState.people || this.state.tip !== prevState.tip){
            this.updateValues();
        }
    }

    updateValues = () =>{
        let newBill = this.state.bill;
        const totalWithoutTipPerPerson = newBill / this.state.people;
        const totalTip = (newBill * this.state.tip) / 100; // Calculate tip amount from the total bill
        const totalTipPerPerson = totalTip / this.state.people;
        const totalWithTipPerPerson = totalWithoutTipPerPerson + totalTipPerPerson;
        
        this.setState({
            bill: newBill,
            tipAmount:totalTipPerPerson,
            total:totalWithTipPerPerson
        })
    }

    changeBill = (event) =>{
        const newBill = parseFloat(event.target.value);
        if (newBill !== this.state.bill) { // Check if bill value has changed
            this.setState({
                bill: newBill
            }, () => {
                console.log(this.state);
                this.updateValues(); // Update other values when bill changes
            });
        }
    }

    changePeople = (event) =>{
        const newPeople = parseInt(event.target.value);
        if(newPeople !== this.state.people){
            this.setState({
                people: newPeople
            },()=>{
               this.updateValues(); 
            })
        }
    }

    tipChange = (event)=>{
        const tip = parseInt(event.target.innerText.replaceAll("%",""));
        if(tip !== this.state.tip){
            this.setState({
                tip: tip
            },()=>{
                this.updateValues()
            })
        }
    }

    render(){
        const tipButtons = [5,10,15,25,50,"Custom"].map((element, i)=>{
            return this.state.tip == element ? <button key={i} className="selected">{element}%</button> : <button onClick={this.tipChange} key={i}>{element}%</button>
        })
        
        return(
            <div id="content">
                <div className="userUI">
                    <div id="bill">
                        <div className="title">Bill</div>
                        <input onChange={this.changeBill} value={this.state.bill} />
                    </div>
                    <div id="tipPercent">
                        <div className="title">Select Tip %</div>
                        <div id="tips">
                            {tipButtons}
                        </div>
                    </div>
                    <div id="people">
                        <div className="title">Number of People</div>
                        <input onChange={this.changePeople} value={this.state.people} type="number" />
                    </div>
                </div>
                <div className="totalDiv">
                    <div className="spread">
                        <div>
                            <p>Tip Amount</p>
                            <br />
                            <p>/ person</p>
                        </div>
                        <div>
                            ${this.state.tipAmount}
                        </div>
                    </div>
                    <div className="spread">
                        <div>
                            <p>Total</p>
                            <br />
                            <p>/ person</p>
                        </div>
                        <div>
                            ${this.state.total}
                        </div>
                    </div>
                    <button onClick={(event)=>{
                        this.setState({
                            bill:randomBill(),
                            people:1,
                            tip:10,
                            total:0,
                            tipAmount:0
                        },()=>{
                            this.updateValues()
                        })
                    }}>Reset</button>
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