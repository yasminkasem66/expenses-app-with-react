# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Section 3

<!--
JSX syntax
work with component,
work with data in React apps,
-->

what exactly is a component?
reusable building blocks in your user interface. Components are in the end just a combination of HTML code,CSS code for styling and possibly JavaScript code for some logic.
help in 1- reusability (DRY) 2-separation of concerns (Function) we just built our own custom HTML Elements
3-Declarative approach =>you just define these end states, and under which conditions which state should be used ,and then React will do all of the rest under the hood.

JSX=>Indeed, JSX stands for JavaScript XML
because HTML in the end is XML, you could say

**Note: in Index.html !**
// the fact that the index.js file is the first file to be executed
This index.html file. This is the single HTML file, which is in the end loaded by the browser here. This is basically the only HTML file
`<div id="root"></div>`
that's the div where we want to attach or inject our React-driven user interface.

**Note: !**
why we always should wrap the returned function with only one element
{/_ because in createElement world, you always create one element which then may have more child elements. So that's why we have this one wrapper root JSX element which we always need. _/}
{/_ And just as HTML elements can have attributes, it turns out that with React, our own custom components can also have attributes. called props
Props is a super important concept, because it allows you to make your components reusable, and it allows you to pass data from another component to this component._/}
EX: `<NewExpense onAddExpense={addExpensesHandler} />`

### Section 5 && 6

<!--
Handling Events
Updating the UI & working with "State",
A closer look at Components & State
-->

`<ExpensesFilter selected={filteredYear} onChangeFilter={FilterHandler}/> `
Because if you would add parentheses here, JavaScript would execute this when this line of code is being parsed. And this line of code is being parsed when the JSX code is returned. So it's then not executing clickHandler when the click occurs but when this JSX code is evaluated, and that would be too early. That's why instead we just point at the clickHandler. We just point at the function. We pass a pointer at this function as a value to onClick, and then React basically memorizes this and executes the function for us whenever the click occurs so that it's not executed when this is evaluated but when the click occurs, which is exactly what we want.
//that you name your functions like this. If they are triggered upon an event, that you end with handler. that you end with handler.
//So we need a way of telling react that something changed and that a certain component should be re-evaluated and that's where react introduce a special concept called state.
with useState we basically create a special kind of variable, a variable where changes will lead this component function to be called again.
`      const [filteredYear, setFilteredYear]=useState('2020')    
    const FilterHandler =(year)=>{
      setFilteredYear(year)
    }`
Because by calling this function setState, you're telling React that you wanna assign a new value to this state. to this state. And tells React that the component in which this setState was registered with useState should be re-evaluated. And therefore React will go ahead and execute this component function again, and therefore also evaluate this JSX code again. And then it will draw any changes which it's detects compared to the last time it evaluated this onto the screen. this state updating function actually doesn't change the value right away, but instead schedules this state update. So in the very next line thereafter, this new value isn't available yet. That's why we see the old value being logged even though we updated it before logging.that State really is separated on a per component instance basis Without State, our user interface would never change.Without State, But with State and with listening to events, we can make sure that we can react to user input and that such input can result in a visible change on our screen.

`const [enteredTitle, setEnteredTitle] = useState('');
const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(enteredTitle)
  }`
because by default, whenever you listen to the change event for an input, if you read the value of that input element, it'll always be a string That's why I also initialize all States with a string.

---

`setUserInput({
   ...userInput,
   enteredTitle: event.target.value,
 });
`
whenever you update your state and you depend on the previous state, you should not do it like this but you should use an alternative form ,of this state updating function Instead of calling it like this, if you depend on the previous state u should use this approach
`setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
`
Now why should we do it like this instead of like this?
In many cases, both will work fine, but keep in mind that Reacts schedules state updates, it doesn't perform them instantly. it doesn't perform them instantly. And therefore, theoretically, if you schedule a lot of state updates at the same time, you could be depending on an outdated or incorrect state snapshot if you use this approach. React will guarantee that the state snapshot it gives you here in this inner function, will always be the latest state snapshot, keeping all scheduled state updates in mind. So this is the safer way to ensure that you always operate on the latest state snapshot.

why key ?
{/_ without the key what happens when add new item (expense) is that React, renders this new item as the last item in list of div's and updates all items and replace their content such that it again matches the order of the items in my Array. And this is not great. key => telling react where a new item it should be added. So we can store JSX content in the variables, _/}

there is a problem called "div soap" we use fragment to solve that

### state schedule and batching 5 && 6

state update theoretically could be postponed, this is the safe way of ensuring that state changes are processed in order and for every state change where you depend on the previous state, you get the latest state. Otherwise you might just get the latest state when the component function was executed last, which is not necessarily the same state as if the state changes are executed in order.

 Now, I will say you will use useMemo far less often than you use useCallback because memorizing functions is much more useful, and you need that more often than memorizing data. You essentially wanna memorize data if it would be performance-intensive to recalculate something based on it. Otherwise, it might not really be worth it because you always have to keep in mind that if you store data with useMemo, of course, it occupies some memory and, of course, this storing functionality also takes up some performance. So this is not something you wanna use on every value you're using. If you got a scenario like this one here, though, where you wanna sort something, then it might be worth a look because then using useMemo and avoiding unnecessary sorting steps in future component updates, that might be very well worth it. 