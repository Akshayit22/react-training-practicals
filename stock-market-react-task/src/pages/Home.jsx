import { Navbar } from "../components/Navbar";
import { Portfolio } from "../components/Portfolio";
import { StockList } from "../components/StockList";

function Home() {
  return (
    <div className="flex flex-col gap-3 m-5">
      <Navbar />
      <div className="flex gap-2">
        <div className="w-full">
          <StockList />
        </div>
        <div className="w-full">
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default Home;
