import { useQuery } from "react-query";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";

const Container = styled.div``;
const CoinsContainer = styled.div`
  position: fixed;
  padding: 7rem 20px;
  width: 30rem;
  min-width: 20rem;
  height: 100vh;
  overflow-y: scroll;
  z-index: 5;
  @media only screen and (max-width: 1150px) {
    display: none;
  }
`;
const Header = styled.header`
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
const CoinsList = styled.ul``;
const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 15px;
  a {
    display: flex;
    align-items: center;
    transition: 0.2s;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  return (
    <>
      <Header>
        <img
          src="https://media4.giphy.com/media/jQWAZxNu6hW698itBs/giphy.gif?cid=ecf05e47nf1gm4w6o02p40vczhcisznpjo85a2fctablsd60&rid=giphy.gif&ct=s"
          alt="logo"
        />
        Coinpaprika API
      </Header>
      <Container>
        <CoinsContainer>
          {isLoading ? (
            <Loader>Loading</Loader>
          ) : (
            <CoinsList>
              {data?.slice(0, 99).map((coin) => {
                return (
                  <Coin key={coin.id}>
                    <Link
                      to={{
                        pathname: `/${coin.id}/chart`,
                      }}
                      state={{
                        name: coin.name,
                      }}
                    >
                      <Img
                        src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                        alt=""
                      />
                      {coin.name} &rarr;
                    </Link>
                  </Coin>
                );
              })}
            </CoinsList>
          )}
        </CoinsContainer>
        <Outlet />
      </Container>
    </>
  );
}
export default Coins;
