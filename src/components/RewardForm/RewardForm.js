import { Component } from "react";
import "../rewardForm/RewardForm.css";

export default class RewardForm extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render() {
        console.log("these are props in render", this.props);
        return (
             <div className="rewardForm">
                 <p>{this.props.rewardInfo.purchaseName}</p>
                 <p>{this.props.rewardInfo.purchaseCost}</p>
                 <p>{this.props.rewardInfo.rewardPoints}</p>
             </div>
        );
    }
}