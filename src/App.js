import { Component } from 'react';
import './App.css';
import PurchaseInputForm from './components/purchaseInputForm/PurchaseInputForm';

export default class App extends Component {

  render() {
    return (
      <div className="App">
      <PurchaseInputForm></PurchaseInputForm>
    </div>
    );
  }
}


