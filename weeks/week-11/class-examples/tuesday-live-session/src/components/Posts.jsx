import { useEffect } from "react"

import { usePostStore } from "../stores/usePostStore"

export const Posts = () => {
  const { loading, fetchPosts, posts } = usePostStore()

  useEffect(() => {
    fetchPosts()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h2>Posts</h2>
      {posts.map(post => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </>
  )
}
