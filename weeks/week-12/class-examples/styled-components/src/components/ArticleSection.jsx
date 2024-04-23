import images from "../assets/images-videos.json"
import { ArticleCard } from "./ArticleCard"
import styled from "styled-components"

export const ArticleSection = () => {
  const {
    articleImg1,
    articleImg2,
    articleImg3,
    articleImg4,
    articleImg5,
    articleImg6,
    articleImg7,
    articleImg8,
  } = images

  const cardData = [
    {
      date: "1 june 2024",
      image: articleImg1,
      heading: "The Evolution of Electronic Music: From Theremins to Synths",
    },
    {
      date: "1 june 2024",
      image: articleImg2,
      heading: "Exploring Subgenres in Electronic Music: A Sonic Adventure",
    },
    {
      date: "1 june 2024",
      image: articleImg3,
      heading: "The Role of DJs in Electronic Music: Beyond the Beats",
    },
    {
      date: "1 june 2024",
      image: articleImg4,
      heading: "The Impact of Electronic Music Festivals on Global Culture",
    },
    {
      date: "1 june 2024",
      image: articleImg5,
      heading:
        "Women Pioneers in Electronic Music: Breaking Barriers and Shaping Sound",
    },
    {
      date: "1 june 2024",
      image: articleImg6,
      heading:
        "The Connection Between Visuals and Electronic Music: A Synesthetic Experience",
    },
    {
      date: "1 june 2024",
      image: articleImg7,
      heading:
        "The Influence of Electronic Music on Mainstream Pop: A Harmonious Blend",
    },
    {
      date: "1 june 2024",
      image: articleImg8,
      heading: "The Future of Electronic Music: Innovation and Beyond",
    },
  ]

  return (
    <div>
      <ArticlesSectionH2>Recent Articles</ArticlesSectionH2>
      <Articles>
        <ArticleCard data={cardData} />
      </Articles>
    </div>
  )
}

const ArticlesSectionH2 = styled.h2`
  text-align: center;
  padding-top: 1em;
`

const Articles = styled.div`
  // mobile
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 2em;

  @media screen and (min-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

/* For Mobile Devices – 320px — 480px.
iPads and Tablets – 481px — 768px.
Laptops and small screen – 769px — 1024px.
Large screens and Desktops – 1025px — 1200px.
TV and Extra Large Screens – 1201px and more. */
