import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from '../Counter/ItemCount.jsx'

class App extends Component {
  render() {
 
    return (
      <div className='card' Style="width: 18rem; height: 33.5rem;   border-color: grey;">
          <img src={
          this.props.img
          } className="card-img-top"  alt="icon"/>
        <div className="card-body">
        <h5 className='card-title' Style='color: black; display:block; '><strong>{
          this.props.title
        }</strong></h5>
        <p className="card-text" Style='color: black; display:block; '>
          {
            this.props.valor
          }
        </p>
        <Counter/> 
        </div>
      </div>
    )
  }
}

export default App;
