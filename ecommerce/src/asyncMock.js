const products = [
    {
        id: '1',
        name: 'ZonaCero',
        price: 10000,
        category: 'Camisa',
        img: 'https://equus.vtexassets.com/arquivos/ids/220531-1200-auto?v=637654276018570000&width=1200&height=auto&aspect=true',
        stock: 25,
        description: 'descripcion de camisa'
    },

    {
        id: '2', 
        name: 'ZonaCero', 
        price: 80000, 
        category:'camisa', 
        img:'https://equus.vtexassets.com/arquivos/ids/244191-1600-auto?v=637992863998400000&width=1600&height=auto&aspect=true', 
        stock: 25, 
        description:'descripcion de camisa'
    },
    
    {
        id: '3', 
        name: 'ZonaCero', 
        price: 10000, 
        category:'camisa', 
        img:'https://equus.vtexassets.com/arquivos/ids/243335-1600-auto?v=637992844720630000&width=1600&height=auto&aspect=true', 
        stock: 25, 
        description:'descripcion de camisa'
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductbyId = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductsByCategory  = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },500)
    })
}