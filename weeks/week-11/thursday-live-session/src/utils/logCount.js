import { useCountStore } from "../stores/useCountStore"

export const logCount = () => {
  const state = useCountStore.getState()
  console.log("Logged count: ", state.count)
}
