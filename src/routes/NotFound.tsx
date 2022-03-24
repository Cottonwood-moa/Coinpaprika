import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 56px;
    margin: 2rem;
    background: linear-gradient(
      to right top,
      ${(props) => props.theme.accentColor},
      #1bd6bc
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  div {
    font-size: 36px;
    cursor: pointer;
  }
`;
function NotFound() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(-1);
  };
  return (
    <Container>
      <h1>404 NOT FOUND</h1>
      <div onClick={onClick}>&larr; GO TO BACK</div>
    </Container>
  );
}

export default NotFound;
