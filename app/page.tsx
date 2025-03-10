import Chart from "./components/Chart";
import CodeBase from "./components/CodeBase";
import Collaborative from "./components/Collaborative";
import Deploy from "./components/Deploy";
import Enterprise from "./components/Enterprise";
import Expert from "./components/Expert";
import Footer from "./components/Footer";
import Framework from "./components/Framework";
import { Globe } from "./components/Globe";
import MainHero from "./components/MainHero";
import MiniHero from "./components/MiniHero";
import Navbar from "./components/Navbar";
import Reliability from "./components/Reliability";
import Rollback from "./components/Rollback";
import Runaway from "./components/Runaway";

export default function Home() {
  return (
    <div>
      <Navbar />
      <MiniHero />
      <MainHero />
      <Runaway />
      <Collaborative />
      <Chart />
      <Rollback />
      <Enterprise />
      <Globe />
      <CodeBase />
      <Framework />
      <Reliability/>
      <Deploy/>
      <Expert/>
      <Footer/>
    </div>
  );
}
