import styled from "styled-components"

export const VideoSection = () => {
  return (
    <VideoWrapper>
      <Iframe src="https://www.youtube.com/embed/K7xzmkpwNoA" />
    </VideoWrapper>
  )
}

const VideoWrapper = styled.section`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
`

// iframe is used to display a web page within a web page
const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

// The top: 0; and left: 0; rules are not strictly necessary in this context, but they serve to ensure that the iframe takes up the entire viewport area.
