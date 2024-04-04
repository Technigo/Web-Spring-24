import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { NotFoundPage } from "./NotFoundPage"
import "./Comments.scss"

export const Comments = () => {
  const { id } = useParams()
  const [comments, setComments] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Failed to fetch post. Check the url or try again later"
          )
        }
        return res.json()
      })
      .then((res) => {
        setComments(res)
      })
      .catch((error) => {
        setError(error.message)
      })
  }, [])

  console.log(comments)
  return (
    (
      <div className="container">
        <Link to="/" className="link">
          Go back
        </Link>
        <h1 className="title">Comments</h1>
        {comments &&
          comments.map((comment) => (
            <div className="comment" key={comment.id}>
              <div className="title">{comment.name}</div>
              <div className="body">{comment.email}</div>
              <div className="body">{comment.body}</div>
            </div>
          ))}
      </div>
    ) ||
    (error && <NotFoundPage />)
  )
}
