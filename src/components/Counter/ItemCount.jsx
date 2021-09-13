import { useState , useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Button from '../Button/Button.jsx'


const Counter = () => {
    const [count, setCount] = useState(0)
    
    const Initial = (25)
    
    const Stock = (Initial - count)
    
    console.log(Stock)
    
    const miFuncionRestar = () => {if (count <= 0) {console.log('no count')} else {setCount(count - 1)}};
    const miFuncionSumar = () => {if (Stock <= 0) {console.log('no stock')} else {setCount(count + 1)}};

     
  return (
        
        <div>
                <h4 style={{ color: 'Black'}}><strong>{count}</strong></h4>                
            <div class="btn-group" role="group">   
                <button id="resta"class="btn btn-outline-secondary" type="button" onClick={miFuncionRestar}><strong> - </strong></button>
                <button id="suma" class="btn btn-outline-secondary" type="button" onClick={miFuncionSumar}><strong> + </strong></button>
            </div>
            <br/>
            <Button myFunction={( count) => ( setCount(count = 0 ))} />    
                  
        </div>       
    )       
    
};

export default Counter