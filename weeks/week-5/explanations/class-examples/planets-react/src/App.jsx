import { Header } from "./components/Common/Header"
import { Planet } from "./components/Planet/Planet"
import data from "./data.json"

const App = () => {
  const { planets } = data
  const renderPlanets = planets.map(
    ({ id, name, diameter, distance, moons, description, atmosphere }) => (
      <Planet
        name={name}
        diameter={diameter}
        distance={distance}
        key={id}
        moons={moons}
        description={description}
        atmosphere={atmosphere}
      />
    )
  )

  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <p className="title">🪐 Planets in our solar system ☀️</p>
        <section className="planetOuter">{renderPlanets}</section>
      </div>
    </div>
  )
}

export default App
