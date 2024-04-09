# React Context API

React Context API provides a way to pass data through the component tree without having to pass props down manually at every level. It's designed to share data that can be considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language.

## Why use Context API?

1. **Avoids Prop Drilling:** Context API helps in avoiding prop drilling, which occurs when props are passed through multiple levels of components. This makes the code cleaner and more maintainable.

2. **Global State Management:** It enables you to manage global state across your application without relying on libraries like Redux.

3. **Simplifies Passing Data:** With Context API, data can be provided to any component in the component tree, without explicitly passing it through each level of the tree.

## Basic Concepts

### Context

A context in React represents the data that will be shared across components. It consists of two parts:

- **Provider:** The Provider component is used to wrap the components that need access to the context. It accepts a value prop to provide the data.
  
- **Consumer:** The Consumer component is used within the child components that need access to the context data. It allows consuming the data provided by the Provider.

### createContext

The `createContext()` function is used to create a new context. It returns an object with Provider and Consumer components.

```jsx
const MyContext = React.createContext(defaultValue);
```

- `defaultValue` (optional): This is the default value for the context. It is only used when a component does not find a matching Provider above it in the tree.

### useContext Hook

The `useContext` hook allows functional components to consume context without using a Consumer component.

```jsx
const contextValue = useContext(MyContext);
```

## Example

Let's create a simple example to demonstrate how Context API works:

```jsx
import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a context
const ThemeContext = createContext('light');

// Step 2: Create a Provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Step 3: Consume the context
const ThemeToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme}>
      Toggle Theme ({theme})
    </button>
  );
};

// Step 4: Wrap the components with the Provider
const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>React Context API Example</h1>
        <ThemeToggler />
      </div>
    </ThemeProvider>
  );
};

export default App;
```

In this example:

- We create a `ThemeContext` using `createContext`.
- We define a `ThemeProvider` component to provide the theme state and setter function to the components below it.
- We use the `useContext` hook in the `ThemeToggler` component to consume the `ThemeContext` and toggle between light and dark themes.
- Finally, we wrap our `App` component with the `ThemeProvider` to provide the theme context to all child components.

## Conclusion

React Context API is a powerful tool for managing state in your React applications, especially when dealing with global data that needs to be accessed by multiple components. It simplifies the process of passing data through the component tree and helps in writing more maintainable and scalable code.

For more information, refer to the [official React documentation on Context](https://reactjs.org/docs/context.html).
