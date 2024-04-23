import heroData from "../assets/images-videos.json"
import styled from "styled-components"

export const Hero = () => {
  const { logo, image } = heroData

  return (
    <StyledHero image={image}>
      <HeroInnerContainer>
        <HeroLogo src={logo} alt="logo" />
        <HeroContent>
          <h1>Discover Electronic Music and Events</h1>
          <p>Read our latest Articles</p>
        </HeroContent>
      </HeroInnerContainer>
    </StyledHero>
  )
}

const StyledHero = styled.div`
  background: url(${(props) => props.image}) no-repeat center center / cover;
  height: 460px;
`

const HeroInnerContainer = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    padding: 0em 1em;
  }
`

const HeroLogo = styled.img`
  max-width: 18%;
  margin-bottom: 1em;

  @media screen and (min-width: 991px) {
    max-width: 20%;
    margin-bottom: 2em;
  }
`
