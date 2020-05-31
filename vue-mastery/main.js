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

            <div>
                <h2>Reviews</h2>
                <p v-if="!reviews.length">There are no reviews yet.</p>
                <ul>
                    <li v-for="review in reviews">
                    <p>{{ review.name }}</p>
                    <p>Rating: {{ review.rating }}</p>
                    <p>{{ review.review }}</p>
                    </li>
                </ul>
            </div>

            <product-review @review-submitted="addReview"></product-review>
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
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        reduceCart() {
            this.$emit('reduce-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct(index) {
            this.selectedVariant = index
        },
        addReview(productReview) {
            this.reviews.push(productReview)
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

Vue.component('product-review', {
    template: `
        <form class="review-form" @submit.prevent="onSubmit">
            <p>
                <label for="name">Name:</label>
                <input id="name" v-model="name" placeholder="name">
            </p>
            <p>
                <label for="review">Review:</label>
                <textarea id="review" v-model="review"></textarea>
            </p>
            <p>
                <label for="rating">Rating:</label>
                <select id="rating" v-model.number="rating">
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
            </p>

            <p>
                <label for="recommend">Would you recommend this product:</label>
                <ul :style="{ listStyle: 'none' }">
                <li>
                    <input type="radio" id="yes" v-model="recommend" class="recommend" value="yes">Yes</br>
                    <input type="radio" id="no" v-model="recommend" class="recommend" value="no">No
                </li>
                </ul>
            </p>

            <p>
                <input type="submit" value="Submit">
            </p>
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p>
        </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            recommend: null,
            errors: []
        }
    },
    methods: {
        onSubmit() {
            if (this.name && this.review && this.rating) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating
                }
                this.$emit('review-submitted', productReview)
        
                // for reset
                this.name = null
                this.review = null
                this.rating = null
            } else {
                if (!this.name) this.errors.push("Name required.")
                if (!this.review) this.errors.push("Review required.")
                if (!this.rating) this.errors.push("Rating required.")
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