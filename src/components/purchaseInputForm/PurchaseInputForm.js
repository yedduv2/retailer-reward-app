import { Component } from "react";
import RewardForm from "../RewardForm/RewardForm";
import "../purchaseInputForm/PurchaseInputForm.css";

export default class PurchaseInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchaseName: "",
      purchaseCost: 0,
      rewardPoints: 0,
      showResult: false,
      uniquId: 0,
      rewardOutputs: [],
    };
    this.setPurchaseInfo = this.setPurchaseInfo.bind(this);
    this.displayRewardComp = this.displayRewardComp.bind(this);
  }

  render() {
    return (
      <div className="purchaseInput">
        <h1>Rewards</h1>
        <p>Enter purchase Information</p>
        <label>Name:</label>
        <input
          type="text"
          name="purchaseName"
          value={this.state.purchaseName}
          onChange={this.setPurchaseInfo}
        ></input>

        <label>Cost:</label>
        <input
          type="number"
          name="purchaseCost"
          value={this.state.purchaseCost}
          onChange={this.setPurchaseInfo}
        ></input>

        <button type="submit" onClick={this.displayRewardComp}>
          Submit
        </button>
        <div className="resultComp">
          {this.state.showResult && (
            <div className="dResultHeader">
              <div className="nameHeader">Name</div>
              <div className="costHeader">Cost</div>
              <div className="rewardsHeader">Rewards</div>
            </div>
          )}
          {this.state.showResult &&
            this.state.rewardOutputs.map((comp) => comp)}
        </div>
      </div>
    );
  }

  setPurchaseInfo(event) {
    if (event.target.name === "purchaseName") {
      this.setState({
        purchaseName: event.target.value,
      });
    } else {
      this.setState({
        purchaseCost: event.target.value,
      });
    }
  }

  displayRewardComp(event) {
    event.preventDefault();
    let points = 0;
    let cost = this.state.purchaseCost;
    if (cost <= 50) {
      points = 0;
    } else if (cost > 50 && cost <= 100) {
      points = 50;
    } else if (cost > 100) {
      let afterHundPurc = cost - 100;
      points = afterHundPurc * 2 + 50;
    }
    let locUniq = this.state.uniquId;
    this.setState(
      {
        rewardPoints: points,
        showResult: true,
      },
      () => {
        if (this.state.showResult === true) {
          let locOutput = this.state.rewardOutputs;
          locUniq++;
          locOutput.push(
            <RewardForm
              key={locUniq + this.state.purchaseName}
              rewardInfo={this.state}
            />
          );
          this.setState({
            rewardOutputs: locOutput,
            uniquId: locUniq,
          });
        }
      }
    );
  }
}
