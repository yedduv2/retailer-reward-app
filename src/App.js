import { Component } from 'react';
import './App.css';
import PurchaseInputForm from './components/InputForm/PurchaseInputForm';

export default class App extends Component {

  render() {
    return (
      <div className="App">
      <header className="App-header">
        Please Enter the below Information
      </header>
      <div>
        <PurchaseInputForm></PurchaseInputForm>
      </div>
    </div>
    );
  }
}


