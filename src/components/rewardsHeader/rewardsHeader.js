import { Component } from "react";
import "../rewardsHeader/rewardsHeader.css"
export default class RewardsHeader extends Component{
    render(){
        return(
            <div className = "rewardsHeader">
                <h1>Rewards</h1>
                <p>Enter purchase Information</p>
            </div>
        )
    }
}