import data from "../assets/images-videos.json"
import styled from "styled-components"

export const NavBar = () => {
  const { logo } = data
  return (
    <StyledHeader>
      <Logo src={logo} alt="Logo" />
      <StyledNavBar>
        <NavBarUL>
          <NavBarLi>
            <AnchorLinks href="https://technigo-news-site-grid-demo.netlify.app/#articles">
              Articles
            </AnchorLinks>
          </NavBarLi>
          <NavBarLi>
            <AnchorLinks href="https://ra.co/events/se/stockholm">
              Events
            </AnchorLinks>
          </NavBarLi>
        </NavBarUL>
      </StyledNavBar>
      <NavBarButton>Change Language</NavBarButton>
      <MobileNav> ☰ </MobileNav>
    </StyledHeader>
  )
}

//Styled Components
const StyledHeader = styled.div`
  display: flex;
  padding: 1em 2em;
  align-items: center;
  justify-content: space-between;
`
const Logo = styled.img`
  width: 50px;
  @media screen and (min-width: 991px) {
    animation-name: fadeIn;
    animation-duration: 0.5s;
    animation-delay: 0.2s;
    animation-fill-mode: both;
  }
`

const StyledNavBar = styled.nav`
  // hide elements on mobile
  display: none;

  @media screen and (min-width: 991px) {
    display: flex;
    justify-content: center;
  }
`

const NavBarUL = styled.ul`
  display: flex;
  justify-content: center;
`

const NavBarLi = styled.li`
  padding-left: 1em;
`

const AnchorLinks = styled.a`
  color: #000000;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    color: #f95738;
    font-size: 17px;
    transition: all 0.2s ease-in-out;
  }
`

// change language
const NavBarButton = styled.button`
  background-color: #262626;
  color: #eff7f6;
  padding: 1em 2em;
  border: none;
  border-radius: 0.5em;
  // hide in small screen
  display: none;

  &:hover {
    cursor: pointer;
    color: #f95738;
  }

  @media screen and (min-width: 991px) {
    // show in
    display: block;
  }
`

const MobileNav = styled.span`
  font-size: 24px;
  line-height: 1;

  @media screen and (min-width: 991px) {
    display: none;
  }
`
