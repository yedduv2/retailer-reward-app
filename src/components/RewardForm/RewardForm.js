import { Component } from "react";
import "../rewardForm/RewardForm.css";

export default class RewardForm extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render() {
        return (
             <div className="rewardForm">
                 <div className = "nameHeader">{this.props.rewardInfo.purchaseName}</div>
                 <div className = "costHeader">{this.props.rewardInfo.purchaseCost}</div>
                 <div className = "rewardsHeader">{this.props.rewardInfo.rewardPoints}</div>
             </div>
        );
    }
}