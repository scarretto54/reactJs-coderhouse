import Class from './Class';
import Vino from './AngelicaZapataMalbec.jpg';

function ItemListCointainer () {
    return (
      <div classclassName="album py-5 bg-light">
        <div classclassName="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <Class Style="display: flex;" Vino={Vino} item='Angelica Zapata Alta Malbec'  valor='$2.850'/>
          </div>
          <div class="col">
            <Class Style="display: flex;" Vino={Vino} item='Angelica Zapata Alta Malbec'  valor='$2.850'/>
          </div>
          <div class="col">
            <Class Style="display: flex;" Vino={Vino} item='Angelica Zapata Alta Malbec'  valor='$2.850'/>
          </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ItemListCointainer;