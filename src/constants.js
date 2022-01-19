const QnList = [
  {
    qn: 'Difference between var, let and const ?',
    ans: <><u>Let</u> is mutable.
      Variables declared can be changed.
      We can declare variable in one place and assign value later.<br />
      <br />
      <u>Var</u> declarations are globally scoped or function scoped.
      It can be function scoped when it is declared inside a function.<br />
      <br />
      <u>Const</u> keyword to declare variables that are not supposed to change.
      const variable has to be assigned a value when it is declared.
      It cannot be reassigned.</>
  },
  {
    qn: 'Difference between map and forEach ?',
    ans: <>
      <u>Map</u> executes the provided function once for each element in an array.<br />
      It creates a new array with the results of calling a function for every array element<br />
      It doesn't change the source array, we can say that it’s an immutable method.<br />
      <br />
      <b><u>Example: </u></b><br />
      const exampleArray = [1, 2, 3, 4, 5]< br />
      console.log(exampleArray.map(x = x * x * x));< br />
      Output: [1 , 8, 27, 64, 125 ]<br />
      <br />
      <u>Foreach</u> method executes a provided function once for each element in an array.
      After executing the function for every array element.<br />
      This method changes the values of the existing array elements according to the result of the provided function.
      foreach method doesn’t return anything, and thus, if you try to get the return value of the forEach method, you will get undefined.<br />
      <br />
      <b><u>Example: </u></b><br />
      const exampleArray = [1, 2, 3, 4, 5]< br />
      console.log(exampleArray.forEach(x = x * x * x));<br />
      Output: (undefined)<br />
      <br />
    </>
  },
  {
    qn: 'Remove duplicates from array',
    ans: <>
          let chars = ['A', 'B', 'A', 'C', 'B']<br />
          let uniqueChars =[...new Set(chars)]
          </>
  },
  {
    qn: 'CSS Position layouts',
    ans: <>
      <u>Relative Layout:</u> is positioned relative to its normal position.
      Setting properties will cause it to be adjusted away from its normal position.<br />
      <br />
      <u>Absolute Layout</u> is positioned relative to the nearest positioned ancestor.
      An absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
    </>
  },
  {
    qn: 'setInterval() in javascript ?',
    ans: <>
      It repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.<br />
      <br />
      <u><b>Example:</b></u><br />
      let intervalID = setInterval(() {
        //console.log('Inside')
      }, 5000);
    </>
  },
  {
    qn: 'Web APIs in javascript ?',
    ans: <>
      <b><u>LocalStorage: </u></b>data is persisted until the user manually clears the browser cache or until your web app clears the data.<br />
      <b><u>SessionStorage: </u></b> data is persisted only until the window or tab is closed.
    </>
  },
  {
    qn: 'How to sort an array of integers correctly ?',
    ans: `var numArray = [140000, 104, 99];
              numArray.sort(function (a, b) {
      'a - b'
    })`
  },
  {
    qn: 'Hoisting in javascript?',
    ans: `Mechanism that moves variables and functions that moves variables and function declarations to the top
              of their scope before executing the code.
              The arrow function syntax will not hoist your function and therefore any call to this function before it has been
              initialized will throw an error saying the function has not been defined.`
  },
  {
    qn: 'Synchronous and Asynchronous functions in javascript ?',
    ans: <>
      <b><u>Synchronous JavaScript: </u></b>Every statement of the code gets executed one by one.<br />
      A statement has to wait for the earlier statement to get executed.<br />
      <br />
      <b><u>Asynchronous JavaScript: </u></b>Program to be executed immediately where the synchronous code will
      block further execution of the remaining code until it finishes the current one.
    </>
  },
  {
    qn: 'Pesudo classes in css',
    ans: <>
      Used to define the special state of an element. It can be combined with a CSS selector to add an effect to existing elements based on their states.<br />
      <u>Example:</u> changing the style of an element when the user hovers over it or when a link is visited.
    </>
  },
  {
    qn: 'callback function in javascript',
    ans: 'Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed.'
  },
  {
    qn: 'Virtual DOM in javascript',
    ans: `The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM.
          The virtual DOM gains it’s speed and efficiency from the fact that it’s lightweight.`
  },
  {
    qn: 'ES6 Features',
    ans: <>
      <li>let and const Keywords</li>
      <li>Arrow Functions</li>
      <li>Multi-line Strings</li>
      <li>Default Parameters</li>
      <li>Template Literals</li>
      <li>Destructuring Assignment</li>
      <li>Enhanced Object Literals</li>
      <li>Promises</li>
      <li>Classes</li>
      <li>Modules</li>
    </>
  },
  {
    qn: 'What is Pure Components in react ?',
    ans: <>
      If the previous value of state or props and the new value of state or props is the same, the component will not re-render itself.<br />
      It restricts the re-rendering when there is no use of re-rendering of the component.<br />
      In these components, the Value of State and Props are Shallow Compared.
    </>
  },
  {
    qn: 'What is controlled component and uncontrolled component ?',
    ans: <>
      <u><b>Controlled Component</b></u> is a way that you can handle the form input value using the state and to change the input value there is only
      one way to change it is using setState or useState if you are using React Hooks and
      you can change this state using one of the events like onChange and when the user starts writing any character setState or useState
      will be called and update the state of this input then it will add the new value inside the input.
      <br />
      <u><b>Uncontrolled Component</b></u> is like traditional HTML form inputs that you will not be able to handle the value by yourself but
      the DOM will take care of handling the value of the input and save it then you can get this value using React Ref
    </>
  },
  {
    qn: 'What is Strict Mode in react ?',
    ans: <>
      React Developer Tool primarily used for highlighting possible problems in a web application.
      If you have any suspicious code, wrap it within the StrictMode helper component.<br />
      <br />
      The StrictMode helper component can help you locate harmful side effects and fix them.
      And to achieve this, the methods of components wrapped with StrictMode are purposefully called twice.<br />
      <br />
      <b><u>Advantages:</u></b><br />
      Protecting From Side Effects<br />
      Detect Outdated Practices
    </>
  },
  {
    qn: 'What is React Hooks ?',
    ans: `Hooks are the new feature introduced in the React 16.8 version.
          Hooks are functions that let you “hook into” React state and lifecycle features from function components.
          It allows you to use state and other React features without writing a class.
          If you write a function component, and then you want to add some state to it, we can use hooks to do that.`
  },
  {
    qn: 'What is useEffect() hook ?',
    ans: `It is useful when you wish to run some functions during the component's lifecycle.if you want to update the UI when a state changes, the useEffect hook is the way to go.`
  },
  {
    qn: 'What is React Fragments ?',
    ans: `There is also another shorthand exists for declaring fragments for the above method. It looks like empty tag in which we can use of <>, instead of the 'React.Fragment'.
          If you want to return multiple elements, the render method will require a 'div' tag and put the entire content or elements inside it.
          whenever you want to render something on the screen, you need to use a render method inside the component. This render method can return single elements or multiple elements.`
  },
  {
    qn: 'What is HigherOrder Components ?',
    ans: `A higher-order component is a function that takes a component and returns a new component.
          Advanced technique in React.js for reusing a component logic.
          They are the pattern that emerges from React’s compositional nature. The component transforms props into UI, and a higher-order component converts a component into another component.`
  }
]

export default QnList