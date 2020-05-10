# Vue Mastery - Intro to Vue.js
Vue の無料動画チュートリアルをやってみる  
[Vue Mastery 公式サイト](https://www.vuemastery.com/)

## Lessons
### [The Vue Instance](https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance)
- How to begin writing a Vue application with a Vue instance, and how to load basic data onto the webpage.
- The Vue instance is the root of every Vue application
- The Vue instance plugs into an element in the DOM
- The Vue instance’s data can be displayed using the mustache-like syntax {{ }} called an expression.
- Vue is reactive

### [Attribute Binding](https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding)
- Data can be bound to HTML attributes.
- Syntax is v-bind: or : for short.
- The attribute name that comes after the : specifies the attribute we’re binding data to.
- Inside the attribute’s quotes, we reference the data we’re binding to.

### [Conditional Rendering](https://www.vuemastery.com/courses/intro-to-vue-js/conditional-rendering)
- There are Vue directives to conditionally render  elements:
  - v-if
  - v-else-if
  - v-else
  - v-show
- If whatever is inside the directive’s quotes is truthy, the element will display.
- You can use expressions inside the directive’s quotes.
- V-show only toggles visibility, it does not insert or remove the element from the DOM.

### [List Rendering](https://www.vuemastery.com/courses/intro-to-vue-js/list-rendering)
- The v-for directive allows us to iterate over an array to display data.
- We use an alias for the element in the array being iterated on, and specify the name of the array we are looping through. Ex: `v-for="item in items"`
- We can loop over an array of objects and use dot notation to display values from the objects.
- When using `v-for` it is recommended to give each rendered element its own unique key.
