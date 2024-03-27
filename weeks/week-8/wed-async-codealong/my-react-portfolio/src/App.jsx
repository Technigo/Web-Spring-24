import "./App.css"
import { Card } from "./components/Card/Card"
import { Photo } from "./components/Photo/Photo"
import { ArticleSection } from "./sections/ArticleSection/ArticleSection"

const App = () => {
  return (
    <main>
      <h1>Matilda's portfolio</h1>
      <ArticleSection
        sectionTitle="My words"
        backgroundColor="pink"
      />
      {/* <Card
        color="pink"
        mode="landscape"
        source="https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="This is an article version card"
        description="See the title, Lorem ipsum"
        direction="row"
      /> */}
      {/* <Card
        color="blue"
        mode="portrait"
        source="https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="This is a project version card"
        description="See the title, Lorem ipsum"
        direction="row"
      /> */}
      {/* <Photo
        color="pink"
        mode="landscape"
        source="https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Photo
        color="blue"
        mode="portrait"
        source="https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Photo
        color="yellow"
        source="https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      /> */}
    </main>
  )
}

export default App
