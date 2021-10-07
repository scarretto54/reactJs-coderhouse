import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firebase'

const ItemListContainer = ()=> {
    const [products, setProducts] = useState([])
    const { categoryid } = useParams()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)
        getProducts('category', '==', categoryid).then(products => {
            setProducts(products)
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setLoading(true)
            setProducts([])
        })
    }, [categoryid])


    return (
        <div className="ItemListContainer" >
             { loading ? <div className="spinner-border justify-content-center" Style="width: 5rem; height: 5rem;" Role="status"/> :<ItemList products={products} categoryid={categoryid} />}
        </div>
    )    
    
}

export default ItemListContainer