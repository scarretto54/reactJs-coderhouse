import React from 'react'
import Item from "../Item/Item"
import 'bootstrap/dist/css/bootstrap.css';

const ItemList = ({products}) => {

  if(products.length === 0) {
    return <h2><strong>No hay productos disponibles</strong></h2>
  } 

  return (
    <div className="container row mb-2" >
      {products.map(product =><Item key={product.id} product={product}/>)}
    </div>
  )
}
export default React.memo(ItemList)