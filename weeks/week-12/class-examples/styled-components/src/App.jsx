import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <div>elements go here</div>
      </Main>
    </>
  )
}

/* *: Selects all elements on the page.
 *::before and *::after: Selects pseudo-elements before and after every element. */

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
  margin: 0;
  padding: 0;
  list-style: none;
  }

  body {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  background-color: #eff7f6;
}

h1 {
  font-weight: 600;
  color: #262626;
  font-size: 24px;
}

h2,
h3,
h4,
h5,
h6 {
  font-weight: 300;
  color: #262626;
}
`

const Main = styled.section`
  min-width: 100%;
`
