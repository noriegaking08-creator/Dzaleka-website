import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Supporters from "./components/Supporters";
import Gallery from "./components/Gallery";
import Developer from "./components/Developer";
import Contact from "./components/Contact";
import { fetchJSON } from "./Api";
import Spinner from "./components/Spinner";

export default function App(){
  const [active,setActive] = useState<string>("Home");
  const [about,setAbout] = useState<any>(null);
  const [achievements,setAchievements] = useState<any[]>([]);
  const [supporters,setSupporters] = useState<any[]>([]);

  useEffect(()=>{
    fetchJSON("/about").then((j: any) => setAbout(j.data)).catch(() => setAbout({overview:""}));
    fetchJSON("/achievements").then((j: any) => setAchievements(j.data)).catch(() => setAchievements([]));
    fetchJSON("/supporters").then((j: any) => setSupporters(j.data)).catch(() => setSupporters([]));
  },[]);

  return (
    <div className="app">
      <Navbar active={active} setActive={setActive} />
      {!about ? <div className="card center"><Spinner /></div> : null}
      <div style={{padding:12}}>
        {active === "Home" && <Home about={about} />}
        {active === "About" && <About about={about} supporters={supporters} />}
        {active === "Achievements" && <Achievements achievements={achievements} />}
        {active === "Supporters" && <Supporters supporters={supporters} />}
        {active === "Gallery" && <Gallery />}
        {active === "Developer" && <Developer />}
        {active === "Contact" && <Contact />}
      </div>

      <div className="footer center">
        <div style={{marginBottom:6}}>Thank you to UNHCR, EU, JRS and the Government of Malawi for supporting Dzaleka CDSS.</div>
        <div style={{fontSize:13}}>© Dzaleka CDSS — Built with intent to honour teachers and students. Developer: Ndizeye Noriega</div>
      </div>
    </div>
  );
}