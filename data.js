const basePath = import.meta.env.BASE_URL; // Dynamically gets the correct base path

const data = [
    {
        id: 1,
        image: {
            thumbnail: `${basePath}images/image-waffle-thumbnail.jpg`,
            mobile: `${basePath}images/image-waffle-mobile.jpg`,
            tablet: `${basePath}images/image-waffle-tablet.jpg`,
            desktop: `${basePath}images/image-waffle-desktop.jpg`
       },
       name: "Waffle with Berries",
       category: "Waffle",
       price: 6.50
    },
    {
        id: 2,
        image: {
            thumbnail: `${basePath}images/image-creme-brulee-thumbnail.jpg`,
            mobile: `${basePath}images/image-creme-brulee-mobile.jpg`,
            tablet: `${basePath}images/image-creme-brulee-tablet.jpg`,
            desktop: `${basePath}images/image-creme-brulee-desktop.jpg`
        },
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.00
     },
     {
        id: 3,
        image: {
            thumbnail: `${basePath}images/image-macaron-thumbnail.jpg`,
            mobile: `${basePath}images/image-macaron-mobile.jpg`,
            tablet: `${basePath}images/image-macaron-tablet.jpg`,
            desktop: `${basePath}images/image-macaron-desktop.jpg`
        },
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.00
     },
     {
        id: 4,
        image: {
            thumbnail: `${basePath}images/image-tiramisu-thumbnail.jpg`,
            mobile: `${basePath}images/image-tiramisu-mobile.jpg`,
            tablet: `${basePath}images/image-tiramisu-tablet.jpg`,
            desktop: `${basePath}images/image-tiramisu-desktop.jpg`
        },
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.50
     },
     {
        id: 5,
        image: {
            thumbnail: `${basePath}images/image-baklava-thumbnail.jpg`,
            mobile: `${basePath}images/image-baklava-mobile.jpg`,
            tablet: `${basePath}images/image-baklava-tablet.jpg`,
            desktop: `${basePath}images/image-baklava-desktop.jpg`
        },
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.00
     },
     {
        id: 6,
        image: {
            thumbnail: `${basePath}images/image-meringue-thumbnail.jpg`,
            mobile: `${basePath}images/image-meringue-mobile.jpg`,
            tablet: `${basePath}images/image-meringue-tablet.jpg`,
            desktop: `${basePath}images/image-meringue-desktop.jpg`
        },
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.00
     },
     {
        id: 7,
        image: {
            thumbnail: `${basePath}images/image-cake-thumbnail.jpg`,
            mobile: `${basePath}images/image-cake-mobile.jpg`,
            tablet: `${basePath}images/image-cake-tablet.jpg`,
            desktop: `${basePath}images/image-cake-desktop.jpg`
        },
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.50
     },
     {
        id: 8,
        image: {
            thumbnail: `${basePath}images/image-brownie-thumbnail.jpg`,
            mobile: `${basePath}images/image-brownie-mobile.jpg`,
            tablet: `${basePath}images/image-brownie-tablet.jpg`,
            desktop: `${basePath}images/image-brownie-desktop.jpg`
        },
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.50
     },
     {
        id: 9,
        image: {
            thumbnail: `${basePath}images/image-panna-cotta-thumbnail.jpg`,
            mobile: `${basePath}images/image-panna-cotta-mobile.jpg`,
            tablet: `${basePath}images/image-panna-cotta-tablet.jpg`,
            desktop: `${basePath}images/image-panna-cotta-desktop.jpg`
        },
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.50
     }
]

export default data;