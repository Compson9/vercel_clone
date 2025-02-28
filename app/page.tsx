import Chart from "./components/Chart";
import Collaborative from "./components/Collaborative";
import MainHero from "./components/MainHero";
import MiniHero from "./components/MiniHero";
import Navbar from "./components/Navbar";
import Rollback from "./components/Rollback";
import Runaway from "./components/Runaway";


export default function Home() {
  return (
   <div>
   <Navbar/>
   <MiniHero/>
   <MainHero/>
   <Runaway/>
   <Collaborative/>
   <Chart/>
   <Rollback/>
   </div>
  );
}
