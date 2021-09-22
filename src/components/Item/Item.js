import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


const Item = ({ product }) => {
  return (
    <div className="g-col-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col-auto d-none d-lg-block">
        <img width="240" height="250" preserveAspectRatio="xMidYMid slice" focusable="false" src={product.img} alt={product.name} className="ItemImg"/> 
      </div>
      <div className="col p-4 d-flex flex-column position-static">
      
      <h5 className='card-title' Style='color: black; display:block; '>
        <strong>
            {product.name}
        </strong>
      </h5>    
      <h6 className="card-text" Style='color: black; display:block; '>
      <strong>
        {`Categoria: ${product.category} `}
      </strong>
      </h6>
      <h6 className="card-text" Style='color: black; display:block; '>
      <strong>
        {`Precio: ${product.price} `}
      </strong>
      </h6>
      { product.quantity &&       
        <h6 className="card-text" Style='color: black; display:block; '>
          <strong>
            {`Cantidad a comprar: ${product.quantity} `}
          </strong>
        </h6>
      }
      { !product.quantity && <Link to={`/reactJs-coderhouse/item/${product.id}`} className='btn btn-primary'><strong>Quiero !</strong></Link> }
      </div>
    </div>
    </div>    
    )
}
export default Item
