import { useSecondCountStore } from "../stores/useSecondCountStore"

export const logSecondCount = () => {
  const state = useSecondCountStore.getState()
  console.log("Second Logged count: ", state.count)
}
