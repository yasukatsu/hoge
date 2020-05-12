# Vue Mastery - Intro to Vue.js
Vue の無料動画チュートリアルをやってみる  
[Vue Mastery 公式サイト](https://www.vuemastery.com/)

## Lessons
### [The Vue Instance](https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance)
In this lesson, we’ll show you how to use Vue to display data onto a webpage.
#### Point
- How to begin writing a Vue application with a Vue instance, and how to load basic data onto the webpage.
- The Vue instance is the root of every Vue application
- The Vue instance plugs into an element in the DOM
- The Vue instance’s data can be displayed using the mustache-like syntax {{ }} called an expression.
- Vue is reactive

### [Attribute Binding](https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding)
In this lesson, we’ll explore ways you can connect data to the attributes of your HTML elements.
#### Point
- Data can be bound to HTML attributes.
- Syntax is v-bind: or : for short.
- The attribute name that comes after the : specifies the attribute we’re binding data to.
- Inside the attribute’s quotes, we reference the data we’re binding to.

### [Conditional Rendering](https://www.vuemastery.com/courses/intro-to-vue-js/conditional-rendering)
In this lesson we’ll be uncovering how to conditionally display elements with Vue.
#### Point
- There are Vue directives to conditionally render  elements:
  - v-if
  - v-else-if
  - v-else
  - v-show
- If whatever is inside the directive’s quotes is truthy, the element will display.
- You can use expressions inside the directive’s quotes.
- V-show only toggles visibility, it does not insert or remove the element from the DOM.

### [List Rendering](https://www.vuemastery.com/courses/intro-to-vue-js/list-rendering)
In this lesson, we’ll learn how to display lists onto our webpages with Vue.
#### Point
- The v-for directive allows us to iterate over an array to display data.
- We use an alias for the element in the array being iterated on, and specify the name of the array we are looping through. Ex: `v-for="item in items"`
- We can loop over an array of objects and use dot notation to display values from the objects.
- When using `v-for` it is recommended to give each rendered element its own unique key.

### [Event Handling](https://www.vuemastery.com/courses/intro-to-vue-js/event-handling)
In this lesson we’ll be learning how to listen for DOM events that we can use to trigger methods.
#### Point
- The `v-on` directive is used to allow elements to listen for events
- The shorthand for `v-on` is `@`
- You can specify the type of event to listen for:
  - click
  - mouseover
  - any other DOM event
- The `v-on` directive can trigger a method
- Triggered methods can take in arguments
- `this` refers to the current Vue instance’s data as well as other methods declared inside the instance

### [Class & Style Binding](https://www.vuemastery.com/courses/intro-to-vue-js/class-&-style-binding)
In this lesson we’ll be learning how to dynamically style our HTML by binding data to an element’s style attribute, as well as its class.
#### Point
- Data can be bound to an element’s style attribute
- Data can be bound to an element’s class
- We can use expressions inside an element’s class binding to evaluate whether a class should appear or not
