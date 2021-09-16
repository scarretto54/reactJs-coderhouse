import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Class from './Item';
import vino from './img/DVCatenaLaPrimadie.png';

const vinos = [
                {id: '1' , title: 'DV Catena La Pirámide Vineyard' , description: '',  price: '$4200' , pictureUrl: './img/DVCatenaLaPrimadie.png'},
                {id: '2' , title: 'Angélica Zapata Cabernet Franc' , description: '', price: '$2656' , pictureUrl: '.img/AngelicaCabFranc.png'},
                {id: '3' , title: 'Angelica Zapata Alta Malbec' , description: '',price: '$2850' , pictureUrl: './img/AngelicaZapataMalbec.jpg'}
              ];

 function getList(props) {
  return new Promise((resolve, reject) => {
    const onSuccessful = true
    
    if(onSuccessful) {
      setTimeout(() => resolve(vinos), 2000)
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
    <div  Style="display: flex;">
     {listWines.map (e => <Class  key={e.id} imagen={e.pictureUrl} valor={e.price} title={e.title} />)}
    </div>
  );
  
};

  export default ItemList;