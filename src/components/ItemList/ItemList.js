import React from 'react'
import Item from "../Item/Item"
import 'bootstrap/dist/css/bootstrap.css';

const ItemList = ({products}) => {

  if(products.length === 0) {
    return <h1><strong>No hay productos disponibles</strong></h1>
  } 

  return (
    <div className="grid" >
      {products.map(product =><Item key={product.id} product={product}/>)}
    </div>
  )
}
export default React.memo(ItemList)