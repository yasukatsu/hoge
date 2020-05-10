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
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ]
    }
})