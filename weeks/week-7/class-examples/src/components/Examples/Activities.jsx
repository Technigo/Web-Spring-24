import { useState, useEffect } from "react"
import "./Activities.css"
import Lottie from "lottie-react"
import animationData from "../../assets/animation.json"

export const Activites = ({ mode }) => {
  const [activity, setActivity] = useState(null)
  const [loading, setLoading] = useState(true)

  const url = "https://www.boredapi.com/api/activity"
  const buttonClass = mode ? "button-dark" : "button-light"

  /*  ******** one way to fetch data async/await ********

  const fetchActivities = async () => {
    setLoading(true)
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setActivity(data.activity)
        }
      })
      .catch((error) => {
        console.error("Error fetching the dog fact:", error)
      })

    setLoading(false)
  } */

  // ******** another way to fetch data try/catch ********
  const fetchActivities = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data) {
        setActivity(data.activity)
      }
    } catch (error) {
      console.error("Error fetching activity", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchActivities()
    }, 1000)
  }, [])

  return (
    <div className="loadingContainer">
      {loading && (
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: 200, height: 200 }}
        />
      )}

      <div className="loadingText">{loading ? "Loading..." : activity}</div>
      {!loading && (
        <div className="buttonContainer">
          <button
            className={`loadActivity ${buttonClass}`}
            onClick={fetchActivities}
          >
            Get Another Activity
          </button>
        </div>
      )}
    </div>
  )
}

/* 
fetchActivities it's called when the button is clicked, triggering a re-render of the component

In this case, it's perfectly fine because the fetchActivities function is meant to be called when the user requests new data by clicking the button. The useEffect hook is used to fetch initial data when the component mounts, ensuring that data is available as soon as the component is rendered. */