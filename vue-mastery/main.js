var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green.jpg',
        altText: 'a pair of socks',
        url: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        inventory: 0,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        sizes: ["25cm", "25.5cm", "26cm", "26.5cm"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green.jpg",
                variantUrl: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue.jpg",
                variantUrl: "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg"
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        ReduceCart() {
            this.cart -= 1
        },
        updateProduct(variantImage, variantUrl) {
            this.image = variantImage
            this.url = variantUrl
        }
    }
})