# Explanation

## The React Router

React Router is a library used in React applications to manage client-side routing, enabling the creation of single-page applications (SPAs). It is essential because it helps you navigate between different views or components within your application without the need to reload the entire page.

Remember that React apps, by nature, are single-page applications (SPAs), where everything initially loads with the first page visit, and subsequent navigation is done within that single page. This is where React Router comes into play. React Router is essential because it provides a structured way to manage and control the navigation within your React SPA. Without it, you'd be faced with the challenge of manually showing and hiding components based on URL changes and handling browser history, which can quickly become complex and error-prone. React Router simplifies this process, allowing you to define routes and associate them with specific components, ensuring that as users navigate your app, the appropriate content is displayed without the need for full-page reloads. It's a crucial tool for building organized and responsive React applications that provide a seamless user experience.

## Why do we use the router?

- Client-Side Routing: React Router helps you switch between different parts of your app without reloading the entire page.

- Single-Page Apps (SPAs): React apps load once and then update content as you navigate, making them faster and more fluid.

- Bookmarking and Link Sharing: It lets you have clean and shareable URLs for specific app sections, like regular websites.

- Nested Pages: React Router supports organizing your app into sections with multiple levels, making it easier to manage complex interfaces.

## How to install a router in your react app ?

Run this command:

```js
npm install react-router-dom
```

## Tutorial

Here is a little tutorial from the official [docs](https://reactrouter.com/en/main/start/tutorial)

## Common Router components

### BrowserRouter

- Purpose: The root component that you place around your application. It provides the routing functionality to your app.
- How It Works: Wraps your entire app with a `<BrowserRouter>` component in the top-level component.

```js
<BrowserRouter>{/* Your app components here */}</BrowserRouter>
```

### Routes

- Purpose: A component that defines the routes available in your app and maps them to specific components.
- How It Works: Inside `<Routes>`, you define individual `<Route>` components that specify the path and component to render for each route.

```js
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

### Route

- Purpose: Specifies a single route and the component to render when that route is matched.
- How It Works: Inside a `<Routes>` component, you use `<Route>` elements to define routes and associate them with components.

```js
<Route path="/products" element={<Products />} />
```

### Link

- Purpose: A component used for navigating between different routes in your application.
- How It Works: You wrap text or elements with `<Link>` tags and set the `to` prop to the target route's URL.

```js
<Link to="/about">About Us</Link>
```

### NavLink

- Purpose: A special type of link that adds styling when the link's route matches the current URL.
- How It Works: Similar to `<Link>`, but `<NavLink>` provides a `className` or `style` attribute when the route is active.

```js
<NavLink to="/contact">Contact Us</NavLink>
```

### Navigate

- Purpose: A programmatic way to navigate to a different route within your React components.
- How It Works: You import the `useNavigate` hook or `navigate` function and call it with the target route when you want to change routes programmatically.

```js
import { useNavigate } from "react-router-dom";

export const MyComponent = () => {
  const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate("/about");
  };

  return <button onClick={goToAboutPage}>Go to About</button>;
};
```

### useParams Hook

- Purpose: A hook used for extracting route parameters from the current URL.
- How It Works: `useParams` is part of the react-router-dom package and allows you to access the parameters defined in your route's path.

```js
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { productId } = useParams();

  return <div>Product ID: {productId}</div>;
};
```

- In the above example, if the current URL matches a route like /products/:productId, useParams allows you to access the productId parameter from the URL.

- This hook is particularly useful for dynamically displaying content based on URL parameters, such as showing details for a specific product when the product's ID is in the URL.

- Remember to import useParams from react-router-dom and use it within a component that is rendered by a Route that includes route parameters.

# React Router Exercise: Rolling Stones' Top 500 Songs

Welcome to this lesson's exercise! We'll be diving into react-router-dom and harnessing the useParams() hook.

## Overview

You'll be working with a songs.json file, which contains a "songs" key. This key holds an array of the Rolling Stones' 500 best songs. Each song object has details like rank, title, artist, album, and year.

## Objective

- Fetch and display song titles on the homepage.
- Use the song's title as a key to create dynamic routes. For instance, if a song's title is "Imagine", the route should be /song/imagine.
- When a song title is clicked, it should route to a dynamic page displaying all the song's details.

## Rule

Always use the song's title key to generate the dynamic route for each song's detailed view.

## Looking for some hints?

While working on the exercise, students should pay close attention to how data is passed between components and how dynamic routes are set up and utilized. Understanding the flow of data and the structure of routes will be key to successfully completing the exercise.

Lets take a look at the following components.

### **1. src/App.jsx (Main App component of the React application)**

- This file sets up the main structure of the application.
- It uses the `BrowserRouter` from `react-router-dom` to enable routing within the app.
- The `nav` section contains links to navigate through the app. Currently, there's a link to the home page.
- The `Routes` component is used to render the routes defined in the `routes.jsx` file.

### **2. src/pages/Home.jsx (A React component for the home page)**

- This component displays a list of the "Rolling Stones 500 Greatest Songs of all Time".
- Songs data is imported from a JSON file and is mapped to display each song with a link.
- The link for each song is dynamically generated based on the song's title. This will be crucial when setting up dynamic routes.

### **3. src/pages/SongInfo.jsx (A React component displaying song information)**

- This component is responsible for displaying detailed information about a specific song.
- It uses the `useParams` hook from `react-router-dom` to fetch the song title from the URL.
- Based on the song title from the URL, it finds the corresponding song from the imported JSON data.
- If the song is found, it displays its title, artist, album, and year. If not, it displays a "Song not found!" message.

### **4. src/routes/routes.jsx (Contains the routes for the React app)**

- This file defines the routes for the application.
- There's a default route that points to the `Home` component.
- A dynamic route is set up for individual songs using the `:songTitle` parameter. This route renders the `SongInfo` component.
