import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { 
    collection, 
    getDocs, 
    query, 
    where, 
    doc, 
    getDoc, 
    writeBatch, 
    addDoc, 
    Timestamp 
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD0mLygVvLmijDPCVAq0TQzMWtF6-cGk2k",
    authDomain: "quierovino.firebaseapp.com",
    projectId: "quierovino",
    storageBucket: "quierovino.appspot.com",
    messagingSenderId: "748077893397",
    appId: "1:748077893397:web:5c21d8cae942cdb4510b1c",
    measurementId: "G-Z4LX1CRY1M"
}

const app = firebase.initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        getDocs(collection(db, 'categories')).then((querySnapshot) => {
            const categories = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            }) 
            resolve(categories)
        }).catch((error) => {
            reject(`Error obteniendo categorias: ${error}`)
        })
    }) 
}

export const getProducts = (key, operator, value) => {
    return new Promise((resolve, reject) => {
        const collectionQuery = key && operator && value ?  query(collection(db, 'items'), where(key, operator, value)) : collection(db, 'items')
        
        getDocs(collectionQuery).then((querySnapshot) => {
            const products = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            }) 
            resolve(products)
        }).catch((error) => {
            reject(`Error obtendiendo productos ${value ? 'por categoria' : ''}: ${error}` )
        })

    })
}

export const getProductById = (itemid) => {
    return new Promise((resolve, reject) => {
        getDoc(doc(db, 'items' , itemid)).then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            resolve(product)
        }).catch((error) => {
            reject('Error obteniendo producto: ' + error)
        })
    })
}

export const createOrder = (objOrder) => {
    return new Promise((resolve, reject) => {
        objOrder = {
            ...objOrder,
            date: Timestamp.fromDate(new Date())
        }
        const batch = writeBatch(db)
        const outOfStock = []
            
        objOrder.items.forEach((prod, i) => {
            getDoc(doc(db, 'items', prod.id)).then(DocumentSnapshot => {
                if(DocumentSnapshot.data().stock >= objOrder.items[i].quantity) {
                    batch.update(doc(db, 'items', DocumentSnapshot.id), {
                        stock: DocumentSnapshot.data().stock - objOrder.items[i].quantity
                    })
                } else {
                    outOfStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
                }
                    
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), objOrder).then(() => {
                batch.commit().then(() => {
                    resolve('Tu pedido se realizo con éxito, en breve nos pondremos en contacto.')
                })
            }).catch((error) => {
                reject('Error al ejecutar la orden: ' + error)
            })
    }})
}

