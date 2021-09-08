import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CartWidgetIcon from './cart-59-256.png';

class CartWidget extends Component {
    render() {
        return (
    <img src={CartWidgetIcon} Style="display: flex;" className="CartWidgetIcon" width="32" height="32" alt="icon"/> 
        )
      }
}

export default CartWidget;   
 