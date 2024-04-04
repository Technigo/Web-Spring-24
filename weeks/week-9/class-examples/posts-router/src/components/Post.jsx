import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { NotFoundPage } from "./NotFoundPage"

import "./Post.scss"

export const Post = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Failed to fetch post. Check the url or try again later"
          )
        }
        return res.json()
      })
      .then((res) => {
        setPost(res)
      })
      .catch((error) => {
        setError(error.message)
      })
  }, [])

  console.log(post)
  return (
    (post && (
      <div className="container">
        <Link to="/" className="link">
          Go back
        </Link>
        <div>
          <h1 className="postTitle">Post details</h1>
          <h2>Title: {post.title}</h2>
          <div className="postText">Text: {post.body}</div>
        </div>
        <Link to={`/posts/${post.id}/comments`} className="link">
          Go to Comments
        </Link>
      </div>
    )) ||
    (error && <NotFoundPage />)
  )
}

/* 
First thing we need to do is add the post details url to the router and tell it to use the Post.jsx component when navigating to the url /posts/{:id}. In the App.js we create a new route with the path /posts/:id, stating that we are passing a variable with the name id. This id we can then use inside the component as local variable to retrieve the details of the specific post.

    <Route path="/posts/:id" element={<Post />} />

Then we will write a function to fetch info about a post passing the corresponding id. To achieve it, we will use the useParam() hook. This hook return a key/value object of the route param passed through the router

 */
