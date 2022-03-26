import styled from "styled-components";
const Spinner = styled.div<IProps>`
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: transparent;
  border-radius: 50%;
  border: ${(props) => props.border} solid ${(props) => props.theme.textColor};
  border-top: ${(props) => props.border} solid
    ${(props) => props.theme.accentColor};
  box-sizing: border-box;
  animation: spinner 1s infinite linear;
  display: flex;
  justify-content: center;
  align-items: center;
  @keyframes spinner {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
interface IProps {
  width: string;
  height: string;
  border: string;
}
function Loading({ width, height, border }: IProps) {
  return <Spinner width={width} height={height} border={border} />;
}

export default Loading;
