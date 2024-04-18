import { create } from "zustand"

export const usePostStore = create(set => ({
  loading: false,
  posts: [],
  fetchPosts: async () => {
    set({ loading: true })

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=4")
      
      if (!response.ok) {
        throw new Error("Failed to fetch posts")
      }

      const data = await response.json()
      console.log(data)
      set({ posts: data })

    } catch (error) {
      console.log("Error fetching data: ", error)
    } finally {
      set({ loading: false })
    }
  }
}))
