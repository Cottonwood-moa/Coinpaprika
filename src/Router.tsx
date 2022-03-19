import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Weeks from "./routes/Weeks";
import Price from "./routes/Price";
import Year from "./routes/Year";
import CandleStick from "./routes/CandleStick";
import About from "./routes/About";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />}>
          <Route path="/:coinId" element={<Coin />}>
            <Route path="weeks" element={<Weeks />} />
            <Route path="year" element={<Year />} />
            <Route path="price" element={<Price />} />
            <Route path="candlestick" element={<CandleStick />} />
          </Route>
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
