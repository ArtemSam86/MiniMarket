const products = [
    {
        id: 'potato',
        title: 'Картошка',
        price: 49.99,
        image: '/products/potato.jpg',
    },
    {
        id: 'carrot',
        title: 'Морковка',
        price: 55.00,
        image: '/products/carrot.jpg',
    },
    {
        id: 'cabbage',
        title: 'Капуста',
        price: 28.50,
        image: '/products/cabbage.jpg',
    }
]

function getQuantityAndAmountOfTheBasket(products) {
    const count = products.length
    const sum = products.map((item) => {
        return item.price
    }).reduce((sum, current) => {
        return sum + current
    }, 0)
    return { count, sum }
}


console.log(49.99 + 55.00 + 28.50)
console.log(getQuantityAndAmountOfTheBasket(products))
