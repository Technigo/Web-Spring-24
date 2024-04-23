import styled from "styled-components"

export const ArticleCard = ({ data }) => {
  return data.map((info, index) => (
    <Card key={index}>
      <CardContent>
        <Date>{info.date}</Date>
        <Title>{info.heading}</Title>
      </CardContent>
      <CardImg src={info.image} alt="article-image" />
    </Card>
  ))
}

const Card = styled.div`
  width: 100%;
  height: 280px;
  border-radius: 1em;
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 300ms;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const CardContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  padding: 30px 20px 20px 20px;
  bottom: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
`

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Date = styled.p`
  font-size: 0.5em;
  color: #ffffffe6;
  margin-bottom: 4px;
`

const Title = styled.p`
  font-size: 1em;
  color: #fff;
`
