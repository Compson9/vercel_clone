import Collaborative from "./components/Collaborative";
import MainHero from "./components/MainHero";
import MiniHero from "./components/MiniHero";
import Navbar from "./components/Navbar";
import Runaway from "./components/Runaway";


export default function Home() {
  return (
   <div>
   <Navbar/>
   <MiniHero/>
   <MainHero/>
   <Runaway/>
   <Collaborative/>

   </div>
  );
}
