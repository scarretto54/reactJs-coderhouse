import 'bootstrap/dist/css/bootstrap.css';
import CartWidgetIcon from './CartWidget.png';

const CartWidget = (props) => {
  return(
      <div row >
        <span x="30%" y="30%" fill="#eceeef" dy=".3em">{props.quantity}</span>
        <img src={CartWidgetIcon} Style="display: flex;" className="CartWidgetIcon" width="30" height="27" alt="icon" />
          
      </div>
  )
};

export default CartWidget;