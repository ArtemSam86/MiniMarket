const http = require('http')

const PORT = 3008;

const products = [
    {
        id: 'bananas',
        group: 'fruit',
        title: 'Бананы',
        price: 102.50,
        image: '/products/bananas.jpg',
    },
    {
        id: 'beef',
        group: 'meat',
        title: 'Говядина',
        price: 400.00,
        image: '/products/beef.jpg'
    },
    {
        id: 'beets',
        group: 'vegetable',
        title: 'Свекла',
        price: 25.00,
        image: '/products/beets.jpg'
    },
    {
        id: 'black_bread',
        group: 'bakery',
        title: 'Черный хлеб',
        price: 60.40,
        image: '/products/black_bread.jpg'
    },
    {
        id: 'cabbage',
        group: 'vegetable',
        title: 'Капуста',
        price: 27.20,
        image: '/products/cabbage.jpg'
    },
    {
        id: 'carrot',
        group: 'vegetable',
        title: 'Морковь',
        price: 40.58,
        image: '/products/carrot.jpg'
    },
    {
        id: 'chicken_breast',
        group: 'meat',
        title: 'Куриная грудка',
        price: 365.25,
        image: '/products/chicken_breast.jpg'
    },
    {
        id: 'chicken_thigh',
        group: 'meat',
        title: 'Куриное бедрышко',
        price: 300.00,
        image: '/products/chicken_thigh.jpg'
    },
    {
        id: 'cucumber',
        group: 'vegetable',
        title: 'Огурцы',
        price: 50.48,
        image: '/products/cucumber.jpg'
    },
    {
        id: 'green_apples',
        group: 'fruit',
        title: 'Зеленые яблоки',
        price: 70.50,
        image: '/products/green_apples.jpg'
    },
    {
        id: 'hen',
        group: 'meat',
        title: 'Курица',
        price: 250.39,
        image: '/products/hen.jpg'
    },
    {
        id: 'iceberg_lettuce',
        group: 'vegetable',
        title: 'Салат айсберг',
        price: 65.55,
        image: '/products/iceberg_lettuce.jpg'
    },
    {
        id: 'long_loaf',
        group: 'bakery',
        title: 'Батон',
        price: 36.40,
        image: '/products/long_loaf.jpg'
    },
    {
        id: 'onion',
        group: 'vegetable',
        title: 'Лук',
        price: 23.20,
        image: '/products/onion.jpg'
    },
    {
        id: 'orange',
        group: 'fruit',
        title: 'Апельсины',
        price: 80.58,
        image: '/products/orange.jpg'
    },
    {
        id: 'pork',
        group: 'meat',
        title: 'Свинина',
        price: 423.34,
        image: '/products/pork.jpg'
    },
    {
        id: 'potato',
        group: 'vegetable',
        title: 'Картошка',
        price: 40.40,
        image: '/products/potato.jpg'
    },
    {
        id: 'red_apples',
        group: 'fruit',
        title: 'Красные яблоки',
        price: 90.10,
        image: '/products/red_apples.jpg'
    },
    {
        id: 'tomato',
        group: 'vegetable',
        title: 'Помидоры',
        price: 120.57,
        image: '/products/tomato.jpg'
    },
]

const server = http.createServer((req, res) => {
    console.log('Server request');
    console.log(req.url, req.method);

    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'Content-type')
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.setHeader('Content-Type', 'application/json')

    const data = JSON.stringify(products);
    res.end(data);
});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
})
