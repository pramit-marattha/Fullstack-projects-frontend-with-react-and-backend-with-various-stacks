![image](https://user-images.githubusercontent.com/37651620/95011170-8136cc80-064e-11eb-9b4b-8200b1fdf290.png)

## It's Live 🎉 Visit here ==> https://grocery-list-manager.netlify.app/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## First Create React App by :
```bash
npx create-react-app grocery-list-organizer
```
## GroceryItem.js(GroceryItem component) 
Create  an GroceryItem component that will be used for displaying the item. This will be a presentational component which takes the item as a prop and displays it.
```bash
import React from 'react';
const Item = ({ item }) => {
  return (
    <div>
      <span>{item}</span>
    </div>
  );
};
export default Item;
```



## GroceryItemList.js (GroceryItemList component)
Now create a GroceryItemList component that will contain a list of all the items. This will take the items as a prop and display them as an ordered list. It will make use of the GroceryItem component that we just created for displaying individual elements.
```bash
import React from 'react';
import Item from './Item';
const ItemList = ({ items }) => {
  return (
    <div className="items-container">
      <ul>
        {items.map((item) => (
          <li>
            <Item key={item} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
```

## App.js(App component) 
### Initial setup:
Assume we have a list of items as an array. Later it will be dynamic, in the next section.
```bash
import React from 'react';
import ItemList from './ItemList';
const App = () => {
  const items = ["item 1", "item 2"]
  return (
    <div className="App">
      <header className="App-header">
        To Do items
        <ItemList items={items} />
      </header>
    </div>
  );
}
export default App;
```
Initial Setup is completed
## React hook: useState
The first hook that we will use is  useState hook.Iit allows us to hook state into our functional component.
As opposed to state in class components, useState does not work with object values. We can use primitives directly and create multiple react hooks for multiple variables if needed.
```bash
const [state, setState] = useState(initialState);
```
React hooks always need to be declared at the top of a function. This also helps preserve state in between all rendering that is happening for the component.
Now replace the initialization of items to:
```bash
const [items, setItems] = useState(['item 1', 'item 2']);
```

### Add a Grocery item functionality
Now ,we have the items as a state variable, we can modify it in functions using the setter function. So, let us create the second section of the application which allows creating lists.
We will create a different component for this. This component will have a form with an input field which will allow the user to enter the content of the new item that is to be added. It will also have a button which will add the item to the list..
We also need a variable to store the item as the user types in the input text box. For this, we will create an item state which will be local to this component. And what better than using our new friend useState?
The GroceryForm component will then look like:

```bash
import React, { useState } from 'react';
const GroceryForm = ({ addItem }) => {
  const [item, setItem] = useState(''); //or React.useState
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
    setItem('');
  };
  return (
    <div>
      <p>Add item</p>
      <form onSubmit={handleSubmit}>
        <input value={item} onChange={(e) => setItem(e.target.value)} />
        <button>Add Item</button>
      </form>
    </div>
  );
};
export default GroceryForm;
```
Now that we have the functionality to add an item, we can modify our App component to declare the addItem function and also import the GroceryForm function that we just created.
```bash
const addItem = (item) => {
    // assuming no duplicates 
    setItems([...items, item]);
  };
  ```
Finally,We destructured the existing items array, added the newly created item at the end of the array, and passed this new array to our setItems function that we learned about earlier.We can also remove the default values from the useState initialization since we have everything in place to add new items using the application now.
## Deleting Item
It is similar to adding item functionality, we will pass a remove item function from the parent component to the item list component which will be passed down to the item component. The item component will have a “clear” button whenever the user clicks it, the function will be invoke and item gets deleted.
```bash
import React from 'react';
const Item = ({ item, removeItem }) => {
  return (
    <div>
      <span>{item}</span>
      <button onClick={() => removeItem(item)}>X</button>
    </div>);
};
```
The GroceryItemList component have a similar change of taking the remove item prop in and passing it to the GroceryItem component. 
```bash
import React from 'react';
import GroceryItem from './GroceryItem';
const ItemList = ({ items, removeItem }) => {
    return (
        <div className="grid-container ">
            <ol>
                {items.map((item) => (
                    <li>
                        <GroceryItem key={item} item={item} removeItem={removeItem} />
                    </li>
                ))}
            </ol>
        </div>
    );
};
export default ItemList;
```

Then, we will define the remove item function in the parent component as:
```bash
const removeItem = (itemToBeDeleted) => {
    setItems(items.filter((item) => itemToBeDeleted !== item));
  };
```
## The React.useEffect hook
By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API. Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.useEffect hook is somewhat similar to the life-cycle methods that we are aware of for class components. It runs after every render of the component including the initial render. Hence it can be thought of as a combination of componentDidMount, componentDidUpdate, and componentWillUnmount.If we want to control the behavior of when the effect should run (only on initial render, or only when a particular state variable changes), we can pass in dependencies to the effect to do so. This hook also provides a clean-up option to allow cleaning up of resources before the component is destroyed.
basic syntax of the effect:

useEffect(didUpdate);



Here, didUpdate is a function that performs mutations, subscriptions, timers, logging, etc. It will get triggered after the component is rendered to the screen as well as on every subsequently completed render.Now,getting back to our Grocery  application, let us put this in use to set the grocery item list data to local storage whenever we update the items in the grocery list. Add this following code in app component:
```bash
useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  });
  ```
This sets a key-value pair in local storage with the key being items and the value being a JSON representation of the Grocery  items.
Next, checking if there is any values in local storage.
So the following piece of code:
```bash
const [items, setItems] = useState([]);
transformed to:
const saveditems = JSON.parse(localStorage.getItem('items'));
const [items, setItems] = useState(saveditems || []);
```
Since loading from local storage is a synchronous process, code shoul work fine.
```bash
const [items, setItems] = useState([]);
useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
    }
  });
  ```
Above code dosent work because useEffect runs every time a component is rendered and we are calling set items inside the effect, it will trigger another render of the component, which triggers useEffect again. And the cycle goes on.


## Firing useEffect
The useEffect hook takes in a second argument which is an array of values that the effect depends on. This way, useEffect is only triggered again if one of these values changes.
Calling useEffect only when necessary or when value changes.
Using the dependency array, we can pass in the state variable to useEffect to make it fire useEffect only when the variable’s value changes.
```bash
useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
    }
  }, [items]);
```

### Calling useEffect only once on component 
Pass an empty array to useEffect as the second parameter to tell React to only run that effect only once.
```bash
useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
    }
  }, []);

```
Now that we know about the dependency array, it will be a good practice to add it to the effect that we were using to save the items to save to local storage as well.

```bash
useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);
```
Finally , App component is ready:
```bash
import React, { useEffect, useState } from 'react';
import AddItemForm from './AddItemForm';
import './App.css';
import ItemList from './ItemList';
function App() {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    // assuming no duplicates for demo purposes
    setItems([...items, item]);
  };
 const removeItem = (itemToBeDeleted) => {
    setItems(items.filter((item) => itemToBeDeleted !== item));
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
    }
  }, []);
useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);
return (
    <div className="App">
      <header className="App-header">
        To Do items
        <ItemList items={items} removeItem={removeItem} />
        <AddItemForm addItem={addItem} />
      </header> </div>
  );}
export default App;

```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
