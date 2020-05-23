Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        },
        cart: {
            type: Array,
            required: []
        }
    },
    template: `
        <div class="product">

            <div class="product-image">
                <a :href="url" target="_blank" rel="noopener noreferrer">
                    <img :src="image" :alt="altText" :href="url">
                </a>
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>
                <p>Shipping : {{ shipping }}</p>
                <span v-show="onSale">onSale</span>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <p>Size</p>
                <ul>
                    <li v-for="size in sizes">{{ size }}</li>
                </ul>

                <div class="color-box"
                    v-for="(variant, index) in variants" 
                    :key="variant.variantId"
                    :style="{ backgroundColor: variant.variantColor }"
                    @mouseover="updateProduct(index)"
                    >
                </div>

                <button @click="addToCart"
                        :disabled="!inStock"
                        :class="{ disabledButton: !inStock }"
                        >Add to Cart
                </button>
                <br>
                <button @click="reduceCart"
                        :disabled="!inCart"
                        :class="{ disabledButton: !inCart }"
                        >Reduce Cart
                </button>

            </div>

        </div>        
    `,
    data() {
        return {
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
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        reduceCart() {
            // this.cart -= 1
            this.$emit('reduce-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct(index) {
            this.selectedVariant = index
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
            const id = this.variants[this.selectedVariant].variantId
            const exit = this.cart.findIndex((v) => v === id)
            if (exit === -1) {
                return false
            }
            return true
        },
        shipping() {
            if (this.premium) {
                return "Free"
            } else {
                return 2.99
            }
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        addToCart(id) {
            this.cart.push(id)
        },
        reduceCart(id) {
            const index = this.cart.findIndex((v) => v === id)
            this.cart.splice(index, 1)
        }
    }
})