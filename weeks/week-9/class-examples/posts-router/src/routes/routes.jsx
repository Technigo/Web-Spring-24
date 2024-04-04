import { Posts } from "../components/Posts"
import { Post } from "../components/Post"
import { NotFoundPage } from "../components/NotFoundPage"
import { Route, Routes } from "react-router-dom"
import { Comments } from "../components/Comments"

export const routes = (
  <Routes>
    <Route path="/" element={<Posts />} />
    <Route path="/posts/:id/comments" element={<Comments />} />
    <Route path="/posts/:id" element={<Post />} />
    <Route path="/posts" element={<Posts />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
)
