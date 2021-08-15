import { Component } from 'react';
import './App.css';
import PurchaseInputForm from './components/purchaseInputForm/PurchaseInputForm';
import RewardsHeader from './components/rewardsHeader/rewardsHeader';

export default class App extends Component {

  render() {
    return (
      <div className="App">
      <RewardsHeader></RewardsHeader>
      <PurchaseInputForm></PurchaseInputForm>
    </div>
    );
  }
}


