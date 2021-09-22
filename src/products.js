const products = [
  {id: '1' , category: 'Vinos' , stock: 25, name: 'DV Cat. La Pirámide Vin.' , description: 'Vino Malbec 750cc 2005',  price: '$4200' , img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/214/080/products/dv-catena-la-primadie-web1-bcc043208a0b4d54f815938761677749-240-0.png'},
  {id: '2' , category: 'Vinos' , stock: 15, name:  'Angélica Zap Cab-Franc' , description: 'Vino Cabernet Franc 750cc 2007', price: '$2656' , img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/214/080/products/angelica-cab-franc-web1-81a7592c1ae0d036de15938759841616-240-0.png'},
  {id: '3' , category: 'Vinos' , stock: 17, name: 'Nicola Catena Bonarda' , description: 'Vino Bonarda 750cc 2005',price: '$5445' , img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/214/080/products/nicola-catena-bonarda-web1-9a292435ffbfc49eca15938761972009-240-0.png'},
  {id: '4' , category: 'Espumantes' , stock: 8, name:  'Alamos Extra Brut 750cc' , description: 'Espumante Extra Brut 750cc', price: '$853' , img: 'https://vinotecaligier.com/media/catalog/product/cache/1/small_image/430x320/9df78eab33525d08d6e5fb8d27136e95/b/e/be03365_1.jpg'}
]

export const getCategories = () => [
  {id: 'Vinos' , description: 'Vinos'},
  {id: 'Espumantes' , description: 'Espumantes'},
  {id: 'Whiskys' , description: 'Whiskys',},
  {id: 'Destilados' , description: 'Destilados',},
  {id: 'Cervezas' , description: 'Cervezas',}  
]

export const getProducts = (category) => {    
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          category ? resolve(products.filter(prod =>prod.category === category)) : resolve(products)
      }, 2000)        
  })
}

export const getProductById = (id) => {    
  return new Promise((resolve, reject) => {
      const product = products.find(prod => Number(prod.id) === Number(id))
      setTimeout(() => resolve(product), 2000)
  })
}