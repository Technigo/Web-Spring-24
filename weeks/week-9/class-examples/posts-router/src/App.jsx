import "./App.scss"
import { routes } from "./routes/routes"

export const App = () => {
  return <div>{routes}</div>
}

/* 
As you might know, everything in React is a component. Each component returns a template (HTML) with logic included (JavaScript). Since we will create two pages (posts and post details), we’ll create two components to keep code nicely separated by functionality.

In the src folder create a folder called `components` or `pages` and inside this folder create two files called `Posts.jxs` and `Post.jsx`.


Now, if you run the application you should see a list posts. When clicking on a post, the application should navigate to the details page and showing the details of the selected post.

This is how you can consume API’s in React in combination of the React Router.
 */
