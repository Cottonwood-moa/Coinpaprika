import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Outlet, useLocation, useParams, useMatch } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinInfo, fetchPriceInfo } from "../api";
import { RouterState, InfoData, PriceData } from "./ICoin";
const Container = styled.div`
  position: absolute;
  padding: 5rem 5rem 5rem 35rem;
  width: 100%;
  min-width: 800px;
  @media only screen and (max-width: 1150px) {
    padding: 5rem;
  }
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
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
const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  color: #f5f6fa;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Tabs = styled.div`
  display: flex;
`;
interface ITab {
  isActive: boolean;
}
const Tab = styled.span<ITab>`
  flex: 1;
  margin: 1rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) => (props.isActive ? props.theme.accentColor : "#f5f6fa")};
  a {
    display: block;
  }
`;
function Coin() {
  // react-router-dom v6 이상이신 분들은
  // const { coinId } = useParams(); 이렇게만 해주셔도 됩니다.
  // useParams쓰는 순간 타입이 string or undefined로 됩니다.
  const { coinId } = useParams();
  const location = useLocation();
  const state = location?.state as RouterState;
  // const [info, setInfo] = useState<InfoData>();
  // const [priceInfo, setPriceIngo] = useState<PriceData>();
  // const [loading, setLoading] = useState<boolean>(true);
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/weeks");
  const yearMatch = useMatch("/:coinId/year");
  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["info", coinId],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchPriceInfo(coinId),
    {
      refetchInterval: 5000,
    }
  );
  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (
  //       await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
  //     ).json();
  //     const priceData = await (
  //       await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
  //     ).json();
  //     setInfo(infoData);
  //     setPriceIngo(priceData);
  //     setLoading(false);
  //   })();
  // }, []);
  const loading = infoLoading || priceLoading;
  return (
    <Container>
      <Header>
        <Title>
          {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price:</span>
              <span>
                $
                {priceData?.error
                  ? `no data`
                  : priceData?.quotes?.USD?.price.toFixed(3)}
              </span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>
                {priceData?.error ? `no data` : priceData?.total_supply}
              </span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>
                {priceData?.error ? `no data` : priceData?.max_supply}
              </span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={yearMatch !== null}>
              <Link to={`/${coinId}/year`}>last year</Link>
            </Tab>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/weeks`}>last 4 weeks</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>rate of change</Link>
            </Tab>
          </Tabs>
        </>
      )}
      <Outlet context={coinId} />
    </Container>
  );
}
export default Coin;
