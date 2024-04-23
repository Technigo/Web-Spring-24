import images from "../assets/images-videos.json"
import styled from "styled-components"

export const Footer = () => {
  const { logo } = images
  return (
    <StyledFooter>
      <FooterLogo src={logo} alt="logo" />
      <p>Technigo Education Team</p>
      <p>October 20, 2023</p>
    </StyledFooter>
  )
}

const StyledFooter = styled.section`
  display: flex;
  justify-content: center;
  padding: 5em;
  flex-direction: column;
  align-items: center;
`

const FooterLogo = styled.img`
  width: 20%;
  margin-bottom: 1em;
`
