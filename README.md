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
//  the fact that the index.js file is the first file to be executed
This index.html file. This is the single HTML file, which is in the end loaded by the browser here. This is basically the only HTML file
`<div id="root"></div>`
 that's the div where we want to attach or inject our React-driven user interface.

**Note: !**
why we always should wrap the returned function with only one element
{/_ because in createElement world, you always create one element which then may have more child elements. So that's why we have this one wrapper root JSX element which we always need. _/}
{/_ And just as HTML elements can have attributes, it turns out that with React, our own custom components can also have attributes. called props
Props is a super important concept, because it allows you to make your components reusable, and it allows you to pass data from another component to this component._/}
EX: `<NewExpense onAddExpense={addExpensesHandler} />`

### Section 4

<!--
Handling Events
Updating the UI & working with "State",
A closer look at Components & State
-->
