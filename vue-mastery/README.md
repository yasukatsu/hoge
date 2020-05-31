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

### [Computed Properties](https://www.vuemastery.com/courses/intro-to-vue-js/vue-computed-properties)
In this lesson, we’ll be covering Computed Properties. These are properties on the Vue instance that calculate a value rather than store a value.
#### Point
- Computed properties calculate a value rather than store a value.
- Computed properties can use data from your app to calculate its values.

### [Components](https://www.vuemastery.com/courses/intro-to-vue-js/components/)
In this lesson we’ll be learning about the wonderful world of components. Components are reusable blocks of code that can have both structure and functionality. They help create a more modular and maintainable codebase.
- Components are blocks of code, grouped together within a custom element
- Components make applications more manageable by breaking up the whole into reusuable parts that have their own structure and behavior
- Data on a component must be a function
- Props are used to pass data from parent to child
- We can specify requirements for the props a component is receiving
- Props are fed into a component through a custom attribute
- Props can be dynamically bound to the parent’s data
- Vue dev tools provide helpful insight about your components

### [Communicating Events](https://www.vuemastery.com/courses/intro-to-vue-js/communicating-events)
In this lesson we’ll learn how to communicate from a child component up to its parent.
- A component can let its parent know that an event has happened with `$emit`
- A component can use an event handler with the `v-on` directive ( `@` for short) to listen for an event emission, which can trigger a method on the parent
- A component can `$emit` data along with the announcement that an event has occurred
- A parent can use data emitted from its child

### [Forms](https://www.vuemastery.com/courses/intro-to-vue-js/forms)
In this lesson we’ll be learning how to work with forms in Vue in order to collect user input, and also learn how to do some custom form validation.
- We can use the `v-model` directive to create two-way binding on form elements
- We can use the `.number` modifier to tell Vue to cast that value as a number, but there is a bug with it
- We can use the `.prevent` event modifier to stop the page from reloading when the form is submitted
- We can use Vue to do fairly simple custom form validation
