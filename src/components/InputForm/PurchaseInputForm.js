import { Component } from "react";

export default class PurchaseInputForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            purchaseName: "",
            purchaseCost: 0
        }
        this.setPurchaseInfo = this.setPurchaseInfo.bind(this);
        this.displayRewardComp = this.displayRewardComp.bind(this);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.displayRewardComp}>
                    <fieldset>
                        <label>
                            <p>Purchase Name</p>
                            <input name="purchaseName" value={this.state.purchaseName} onChange={this.setPurchaseInfo}></input>
                        </label>
                        <label>
                            <p>Purchase Cost</p>
                            <input name="purchaseCost" value={this.state.purchaseCost} onChange={this.setPurchaseInfo}></input>
                        </label>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                        
                    </fieldset>
                </form>
            </div>
        )
    }

    setPurchaseInfo(event) {
        if(event.target.name === "purchaseName"){
            this.setState({
                purchaseName: event.target.value
            })
        } else {
            this.setState({
                purchaseCost: event.target.value
            })
        }
        
    }

    displayRewardComp(event) {
        event.preventDefault();
        console.log(this.state.purchaseCost + this.state.purchaseName);
        let rewardPoints = 0;
        let cost = this.state.purchaseCost;
        if(cost <= 50){
            rewardPoints = 0;
        } else if(cost > 50 && cost <=100){
            rewardPoints = 50;
        } else if(cost > 100){
            let afterHundPurc = cost - 100;
            rewardPoints = afterHundPurc*2 + 50;
        }

        console.log("these are the rewardPoints", rewardPoints);
    }
}