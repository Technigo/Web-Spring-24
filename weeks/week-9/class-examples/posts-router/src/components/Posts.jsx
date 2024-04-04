import { useEffect, useState } from "react"
import "./Posts.scss"
import { Link } from "react-router-dom"

export const Posts = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Failed to fetch posts. Check the url or try again later"
          )
        }
        return res.json()
      })
      .then((res) => {
        setPosts(res)
      })
      .catch((error) => {
        setError(error.message)
      })
  }, [])

  return (
    (posts.length && (
      <div>
        <h1>Posts</h1>
        <div className="posts">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="title">{post.title}</div>
              <div className="body">{post.body.slice(0, 75)}...</div>
              <Link to={`/posts/${post.id}`}>
                <div className="link">Read more</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )) ||
    (error && <div>{error}</div>)
  )
}

/* 
Let’s start with the posts page. We want to call an API which returns JSON with a list of posts. We want to show this list of posts and make sure each posts redirects to the post details page.

We want this page to show up when we launch the application, so we need to let the Router know to use this component. We will create our Routes in the App component. The Routes component is the place where a component is project based on the current url of the browser. So when we are on the root path of the application, show the Posts component.

Now finally let’s fetch some data from an API inside the Posts component. To do this we will use the useEffect hook and the useState hook from React and the Javascript method called fetch.

After retrievieng a list of posts from the API and storing it inside the variable called `posts`, we can create the template of the Posts page to display the list of posts.

When we click on one of the posts, we want to go to the post details page. There are several ways to achieve this, one of them for example using the Link component and pass the path to the Post page with the post id.

  <Link to={`/posts/${post.id}`}>

Now when you start the app you will see a list of posts. When you click on one of the posts, the browser will navigate to posts/{:id}, showing an empty page for now. Let’s go add the Post details component next


 */
