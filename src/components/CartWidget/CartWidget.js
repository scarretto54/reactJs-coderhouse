import { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import CartWidgetIcon from './CartWidget.png';
import CartContext from '../../context/CartContext'

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext)

  return(
      <div row >
        <span x="30%" y="30%" fill="#eceeef" dy=".3em">{getQuantity()}</span>
        <img src={CartWidgetIcon} Style="display: flex;" className="CartWidgetIcon" width="30" height="27" alt="icon" />
      </div>
  );
}

export default CartWidget;