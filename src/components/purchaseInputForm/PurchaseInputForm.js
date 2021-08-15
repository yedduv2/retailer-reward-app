import { Component } from "react";
import RewardForm from "../rewardForm/RewardForm";
import '../purchaseInputForm/PurchaseInputForm.css';

export default class PurchaseInputForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            purchaseName: "",
            purchaseCost: 0,
            rewardPoints: 0, 
            showResult: false,
            uniqueId: 0,
            rewardOutputs: []
        }
        this.setPurchaseInfo = this.setPurchaseInfo.bind(this);
        this.displayRewardComp = this.displayRewardComp.bind(this);
    }

    render() {
        return(
            <div className="purchaseInput">
                        <label>Name:</label>
                        <input type="text" name="purchaseName" value={this.state.purchaseName} onChange={this.setPurchaseInfo}></input>
                        
                        <label>Cost:</label>
                        <input type="number" name="purchaseCost" value={this.state.purchaseCost} onChange={this.setPurchaseInfo}></input>

                        <button type="submit" onClick={this.displayRewardComp}>Submit</button> 
                {/* {this.state.showResult && 
                    <div>
                         <p>Name</p>
                         <p>Cost</p>
                         <p>Rewards</p>
                    </div>} */}
                {this.state.showResult && this.state.rewardOutputs.map(comp=>comp)}
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
        let points = 0;
        let cost = this.state.purchaseCost;
        if(cost <= 50){
            points = 0;
        } else if(cost > 50 && cost <=100){
            points = 50;
        } else if(cost > 100){
            let afterHundPurc = cost - 100;
            points = afterHundPurc*2 + 50;
        }
        let locUniq = 0;
        this.setState({
            rewardPoints: points, 
            showResult: true
        }, ()=>{
            if(this.state.showResult === true){
                locUniq ++;
                console.log("*****reward before push", this.state.rewardOutputs);
                this.state.rewardOutputs.push(<RewardForm key = {locUniq+this.state.purchaseName} rewardInfo={this.state}/>)
                console.log("*****reward after push",this.state.rewardOutputs);
                this.setState({
                    rewardOutputs: this.state.rewardOutputs
                })
                console.log("*****reward after setState",this.state.rewardOutputs);
            }
        })
        console.log("these are the rewardPoints", points);
    }
}