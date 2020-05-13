var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        altText: 'a pair of socks',
        lineThrough: "line-through",
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        sizes: ["25cm", "25.5cm", "26cm", "26.5cm"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green.jpg",
                variantUrl: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue.jpg",
                variantUrl: "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
                variantQuantity: 0
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        reduceCart() {
            this.cart -= 1
        },
        updateProduct(index) {
            this.selectedVariant = index
            // console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        url() {
            return this.variants[this.selectedVariant].variantUrl
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        inCart() {
            if (this.cart <= 0) {
                return false
            }
            return true
        },
        challenge() {
            if (this.onSale) {
                return this.brand + ' ' + this.product
            }
        }
    }
})