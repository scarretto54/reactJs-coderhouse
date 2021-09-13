import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from '../Counter/ItemCount.jsx'

class App extends Component {
  render() {
 
    return (
      <div className='card' Style="width: 18rem; border-color: grey;">
      <div>
      <img src={this.props.Vino} className="card-img-top"  alt="icon"/>
      </div>
      <div class="card-body">
        <h5 className='card-title' Style='color: black; display:block; '><strong>{
          this.props.item
        }</strong></h5>
        <p className="card-text" Style='color: black; display:block; '><strong>
          {
            this.props.valor
          }</strong>
        </p>
        <Counter Initial="0" Stock="25"/>        
        </div>
      </div>
    )
  }
}

export default App;
