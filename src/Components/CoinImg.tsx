import { useState } from "react";
import styled from "styled-components";
import Loading from "./Loading";
const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
interface IProps {
  coinId: string;
}
function CoinImg({ coinId }: IProps) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <Loading width={`35px`} height={`35px`} border={`5px`} />}
      <Img
        src={`https://cryptocurrencyliveprices.com/img/${coinId}.png`}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
            "https://cdn-icons-png.flaticon.com/128/1429/1429978.png";
        }}
        loading="lazy"
        onLoad={() => setLoading(false)}
        alt="coinImg"
      />
    </>
  );
}

export default CoinImg;
