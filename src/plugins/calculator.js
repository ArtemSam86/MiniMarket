const testFolder = './public/products/';
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
    console.log(file);
});

const products = [
    {
        id: 'bananas',
        title: 'Бананы',
        price: 102.50,
        image: '/products/bananas.jpg',
    },
    {
        id: 'beef',
        title: 'Говядина',
        price: 400.00,
        image: '/products/beef.jpg'},
    {
        id: 'beets',
        title: 'Свекла',
        price: 25.00,
        image: '/products/beets.jpg'},
    {
        id: 'black_bread',
        title: 'Черный хлеб',
        price: 60.40,
        image: '/products/black_bread.jpg'},
    {
        id: 'cabbage',
        title: 'Капуста',
        price: 27.20,
        image: '/products/cabbage.jpg'},
    {
        id: 'carrot',
        title: 'Морковь',
        price: 40.58,
        image: '/products/carrot.jpg'},
    {
        id: 'chicken_breast',
        title: 'Куриная грудка',
        price: 365.25,
        image: '/products/chicken_breast.jpg'},
    {
        id: 'chicken_thigh',
        title: 'Куриное бедрышко',
        price: 300.00,
        image: '/products/chicken_thigh.jpg'},
    {
        id: 'cucumber',
        title: 'Огурцы',
        price: 50.48,
        image: '/products/cucumber.jpg'},
    {
        id: 'green_apples',
        title: 'Зеленые яблоки',
        price: 70.50,
        image: '/products/green_apples.jpg'},
    {
        id: 'hen',
        title: 'Курица',
        price: 250.39,
        image: '/products/hen.jpg'},
    {
        id: 'iceberg_lettuce',
        title: 'Салат айсберг',
        price: 65.55,
        image: '/products/iceberg_lettuce.jpg'},
    {
        id: 'long_loaf',
        title: 'Батон',
        price: 36.40,
        image: '/products/long_loaf.jpg'},
    {
        id: 'onion',
        title: 'Лук',
        price: 23.20,
        image: '/products/onion.jpg'},
    {
        id: 'orange',
        title: 'Апельсины',
        price: 80.58,
        image: '/products/orange.jpg'},
    {
        id: 'pork',
        title: 'Свинина',
        price: 423.34,
        image: '/products/pork.jpg'},
    {
        id: 'potato',
        title: 'Картошка',
        price: 40.40,
        image: '/products/potato.jpg'},
    {
        id: 'red_apples',
        title: 'Красные яблоки',
        price: 90.10,
        image: '/products/red_apples.jpg'},
    {
        id: 'tomato',
        title: 'Помидоры',
        price: 120.57,
        image: '/products/tomato.jpg'},
    ]
