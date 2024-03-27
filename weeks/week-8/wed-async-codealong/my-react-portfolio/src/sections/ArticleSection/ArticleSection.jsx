import { Card } from "../../components/Card/Card"
import "./ArticleSection.css"

export const ArticleSection = ({ sectionTitle, backgroundColor }) => {
  return (
    <section className={`grid-section ${backgroundColor}-background`}>
      <h2 className="section-title">{sectionTitle}</h2>
      <div className="article-grid">
        <Card
          color="pink"
          mode="landscape"
          source="https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="This is an article version card"
          description="See the title, Lorem ipsum"
          direction="column"
        />
        <Card
          color="pink"
          mode="landscape"
          source="https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="This is an article version card"
          description="See the title, Lorem ipsum"
          direction="column"
        />
        <Card
          color="pink"
          mode="landscape"
          source="https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="This is an article version card"
          description="See the title, Lorem ipsum"
          direction="column"
        />
      </div>
    </section>
  )
}