import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 10rem;
`;
const Header = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
  font-family: "Pacifico", cursive;
  position: fixed;
  background-color: ${(props) => props.theme.bgColor};
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
  img {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
  }
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
      <Header>
        <img
          src="https://media0.giphy.com/media/zXk5wajcwNspI23pvV/giphy.gif?cid=ecf05e47pq8pdc3lblhfqab4q1t14yc277gd2zr7b8d6c463&rid=giphy.gif&ct=s"
          alt="logo"
        />
        <Link to={"/"}>Coinpaprika API</Link>
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
