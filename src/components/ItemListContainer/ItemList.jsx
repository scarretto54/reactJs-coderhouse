import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Class from './Item';


const vinos = [
                {id: '1' , title: 'DV Cat. La Pirámide Vin.' , description: '',  price: '$4200' , pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/214/080/products/dv-catena-la-primadie-web1-bcc043208a0b4d54f815938761677749-240-0.png'},
                {id: '2' , title: 'Angélica Zap Cab-Franc' , description: '', price: '$2656' , pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/214/080/products/angelica-cab-franc-web1-81a7592c1ae0d036de15938759841616-240-0.png'},
                {id: '3' , title: 'Nicola Catena Bonarda' , description: '',price: '$5445' , pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/214/080/products/nicola-catena-bonarda-web1-9a292435ffbfc49eca15938761972009-240-0.png'}
              ];

 function getList(props) {
  return new Promise((resolve, reject) => {
    const onSuccessful = true
    
    if(onSuccessful) {
      setTimeout(() => resolve(vinos), 10)
    } else {
      setTimeout(() => reject('no hay listado'), 2000)
      }
  })
};

const ItemList = () => {
  const [listWines, setListWines] = useState([])
  
useEffect(() => {
  const list = getList()

  list.then(list => {
    setListWines(list)
  })
},[])

  return(
    <div Style="display: flex;">
      {listWines.map (e => <Class key={e.id} img={e.pictureUrl} valor={e.price} title={e.title}/>)}
    </div>
  );
  
};

  export default ItemList;