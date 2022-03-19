import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 10rem;
`;
const Header = styled.header`
  font-family: "Nanum Brush Script", cursive;
  position: fixed;
  color: ${(props) => props.theme.accentColor};
  width: 100%;
  height: 4rem;
  font-size: 36px;
  font-weight: bold;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #999;
  padding: 40px;
  z-index: 10;
`;
const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin: 1rem 1rem 4rem 1rem;
`;
const Profile = styled.div`
  width: 15rem;
  height: 15rem;
  background-color: white;
  border-radius: 50%;
  background: url(https://avatars.githubusercontent.com/u/79053495?v=4) center
    center no-repeat;
  background-size: 100% 100%;
  margin: 1rem;
  border: 10px solid #7f8fa6;
  box-sizing: content-box;
`;
const Logo = styled.h1`
  font-size: 48px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.accentColor},
    #0fbff3
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Info = styled.div`
  text-align: center;
  font-size: 24px;
  p {
    margin: 10px;
  }
`;
export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Header>
        <Link to={"/"}>
          <Logo>Coinpaprika API</Logo>
        </Link>
      </Header>
      <Container>
        <Profile></Profile>
        <Title>Cottonwood</Title>
        <Info>
          <p>geon0529@gmail.com</p>
          <p>https://cottonwood-moa.tistory.com/</p>
          <p>https://github.com/Cottonwood-moa</p>
          <p>+82-10-2831-6735</p>
        </Info>
      </Container>
    </>
  );
}
