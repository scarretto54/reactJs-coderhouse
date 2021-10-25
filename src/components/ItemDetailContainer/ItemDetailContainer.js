import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { getProductById } from '../../services/firebase/firebase'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const {itemid} = useParams()
    
    useEffect(() => {
        setLoading(true)
        getProductById(itemid).then(product => {
            setProduct(product)
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        return (() => {
            setLoading(true)
            setProduct(undefined)
        })
    },[itemid])

    return (
        <div className='ItemDetailContainer' >
            {loading ? <div className="spinner-border justify-content-center" Style="width: 5rem; height: 5rem;" role="status"/> : <ItemDetail product={product} />}    
        </div>
    )
}
export default ItemDetailContainer