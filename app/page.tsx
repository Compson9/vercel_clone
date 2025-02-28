import Chart from "./components/Chart";
import CodeBase from "./components/CodeBase";
import Collaborative from "./components/Collaborative";
import Enterprise from "./components/Enterprise";
import { Globe } from "./components/Globe";
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
   <Enterprise/>
   <Globe/>
   <CodeBase />
   </div>
  );
}
