export interface Product {
    availableSizes: string[];
    currencyFormat: string;
    currencyId: string;
    description: string;
    id: number;
    image: string;
    installments: number;
    isFreeShipping: boolean;
    price: number;
    sku: number;
    style: string;
    title: string;
}
export const products = [
    {
        availableSizes: ['X', 'L', 'XL', 'XXL'],
        currencyFormat: '$',
        currencyId: 'USD',
        description: '14/15 s/nº',
        id: 0,
        image: 'assets/images/stay-groovy.jfif',
        installments: 9,
        isFreeShipping: true,
        price: 10.9,
        sku: 8552515751438644,
        style: 'White T-shirt',
        title: 'Cropped Stay Groovy off white'
    },
    {
        availableSizes: ['X', 'L', 'XL', 'XXL'],
        currencyFormat: '$',
        currencyId: 'USD',
        description: '14/15 s/nº',
        id: 1,
        image: 'assets/images/hall-pass.jpg',
        installments: 9,
        isFreeShipping: true,
        price: 10.9,
        sku: 18644119330491310,
        style: 'White T-shirt',
        title: 'Ringer Hall Pass'
    },
    {
        availableSizes: ['X', 'L'],
        currencyFormat: '$',
        currencyId: 'USD',
        description: '14/15 s/nº',
        id: 2,
        image: 'assets/images/grey-men.jpg',
        installments: 7,
        isFreeShipping: true,
        price: 10.9,
        sku: 11854078013954528,
        style: 'You will like this one',
        title: 'Grey T-shirt'
    },
    {
        availableSizes: ['X', 'L'],
        currencyFormat: '$',
        currencyId: 'USD',
        description: '2014 s/nº',
        id: 3,
        image: 'assets/images/white-stripes.jpg',
        installments: 7,
        isFreeShipping: true,
        price: 14.9,
        sku: 876661122392077,
        style: 'Adidas originals',
        title: 'Black T-shirt with white stripes'
    },
    {
        availableSizes: ['XL', 'Oversized'],
        currencyFormat: '$',
        currencyId: 'USD',
        description: '14/15 s/nº - Jogador',
        id: 4,
        image: 'assets/images/sweatshirt.jpg',
        installments: 12,
        isFreeShipping: false,
        price: 25.9,
        sku: 9197907543445676,
        style: 'Tony Hawk',
        title: 'Skater Black Sweatshirt'
    },

    {
        availableSizes: ['X', 'L', 'XL'],
        currencyFormat: '$',
        currencyId: 'USD',
        description: '14/15 + Camiseta 1º Mundial',
        id: 5,
        image: 'assets/images/ninja-shirt.jfif',
        installments: 9,
        isFreeShipping: false,
        price: 10.9,
        sku: 10547961582846888,
        style: 'Cowabunga!',
        title: 'Turtles Ninja T-shirt'
    },
    {
        availableSizes: ['XL', 'XXL'],
        currencyFormat: '$',
        currencyId: 'USD',
        description: 'T-shirt 13/14',
        id: 6,
        image: 'assets/images/black-shirt.jpg',
        installments: 0,
        isFreeShipping: true,
        price: 49.9,
        sku: 6090484789343891,
        style: 'When you wish well',
        title: 'Slim black T-shirt'
    }, {
        availableSizes: ['S'],
        currencyFormat: '$',
        currencyId: 'USD',
        description: '1977 Infantil',
        id: 7,
        image: 'assets/images/blue-sweatshirt.jpeg',
        installments: 4,
        isFreeShipping: true,
        price: 22.5,
        sku: 18532669286405344,
        style: 'Very comfy',
        title: 'Blue Sweatshirt'
    }, {
        availableSizes: ['XL'],
        currencyFormat: '$',
        currencyId: 'USD',
        description: '',
        id: 8,
        image: 'assets/images/gucci.jpg',
        installments: 4,
        isFreeShipping: false,
        price: 18.7,
        sku: 5619496040738316,
        style: 'Girl the future is all your',
        title: 'White T-shirt Gucci'
    }, {
        availableSizes: ['L', 'XL'],
        currencyFormat: '$',
        currencyId: 'USD',
        description: '',
        id: 9,
        image: 'assets/images/wine-red.png',
        installments: 5,
        isFreeShipping: true,
        price: 134.9,
        sku: 11600983276356164,
        style: '',
        title: 'Tropical Wine T-shirt'
    },
    {
        availableSizes: ['L', 'XL'],
        currencyFormat: '$',
        currencyId: 'USD',
        description: '',
        id: 10,
        image: 'assets/images/marine-blue.jpg',
        installments: 9,
        isFreeShipping: true,
        price: 49,
        sku: 27250082398145996,
        style: '',
        title: 'Marine Blue T-shirt'
    },


    {
        availableSizes: ['X', 'L', 'ML'],
        currencyFormat: '$',
        currencyId: 'USD',
        description: '',
        id: 11,
        image: 'assets/images/cactus-male.jfif',
        installments: 3,
        isFreeShipping: true,
        price: 13.25,
        sku: 39876704341265610,
        style: 'Wine',
        title: 'Basic Cactus White T-shirt'
    },
    {
        availableSizes: ['S', 'XS'],
        currencyFormat: '$',
        currencyId: 'USD',
        description: '4MSL',
        id: 12,
        image: 'assets/images/batman.jpg',
        installments: 9,
        isFreeShipping: true,
        price: 10.9,
        sku: 12064273040195392,
        style: 'Really Cool T-shirt',
        title: 'Black Batman T-shirt'
    }, {
        availableSizes: ['M', 'ML'],
        currencyFormat: '$',
        currencyId: 'USD',
        description: '',
        id: 13,
        image: 'assets/images/loose-fit.jpg',
        installments: 5,
        isFreeShipping: true,
        price: 29.45,
        sku: 51498472915966370,
        style: 'Tule',
        title: 'Black Tule Oversized'
    },
    {
        availableSizes: ['X', 'L', 'XL'],
        currencyFormat: '$',
        currencyId: 'USD',
        description: 'GPX Poly1',
        id: 14,
        image: 'assets/images/blue.jpg',
        installments: 3,
        isFreeShipping: true,
        price: 9,
        sku: 10686354557628304,
        style: 'Mark Zuck have 365 of this one',
        title: 'Blue T-Shirt'
    },
    {
        availableSizes: ['X', 'L', 'XL', 'XXL'],
        currencyFormat: '$',
        currencyId: 'USD',
        description: 'Treino 2014',
        id: 15,
        image: 'assets/images/black-shirt.jpg',
        installments: 5,
        isFreeShipping: true,
        price: 14,
        sku: 11033926921508488,
        style: '',
        title: 'Loose Black T-shirt'
    },


];
