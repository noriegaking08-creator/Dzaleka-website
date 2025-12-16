import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Achievements from '../components/Achievements';
import Supporters from '../components/Supporters';
import Gallery from '../components/Gallery';
import Developer from '../components/Developer';
import Contact from '../components/Contact';
import Spinner from '../components/Spinner';
import { fetchJSON } from '../utils/api';

export default function App() {
  const [active, setActive] = useState<string>('Home');
  const [about, setAbout] = useState<any>(null);
  const [achievements, setAchievements] = useState<any[]>([]);
  const [supporters, setSupporters] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch all data in parallel
        const [aboutRes, achievementsRes, supportersRes] = await Promise.all([
          fetchJSON('/api/about').catch(() => ({ status: 'error', data: { overview: '' } })),
          fetchJSON('/api/achievements').catch(() => ({ status: 'error', data: [] })),
          fetchJSON('/api/supporters').catch(() => ({ status: 'error', data: [] }))
        ]);

        if (aboutRes.status === 'ok') setAbout(aboutRes.data);
        else setAbout({ overview: 'Dzaleka CDSS provides secondary education to refugees and host community students in Dzaleka Refugee Camp, Dowa, Malawi.' });

        if (achievementsRes.status === 'ok') setAchievements(achievementsRes.data);
        else setAchievements([]);

        if (supportersRes.status === 'ok') setSupporters(supportersRes.data);
        else setSupporters([]);

      } catch (err) {
        setError('Failed to load data. Please try again later.');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Show loading spinner only if still loading and no data has been loaded
  if (loading && !about) {
    return (
      <div className="app">
        <div className="card center">
          <Spinner />
          <p>Loading school information...</p>
        </div>
      </div>
    );
  }

  // Show error message if there was an error
  if (error) {
    return (
      <div className="app">
        <Navbar active={active} setActive={setActive} />
        <div className="card center">
          <p style={{ color: 'red' }}>{error}</p>
          <button className="btn" onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar active={active} setActive={setActive} />
      <div style={{ padding: 12 }}>
        {active === 'Home' && <Home about={about} />}
        {active === 'About' && <About about={about} supporters={supporters} />}
        {active === 'Achievements' && <Achievements achievements={achievements} />}
        {active === 'Supporters' && <Supporters supporters={supporters} />}
        {active === 'Gallery' && <Gallery />}
        {active === 'Developer' && <Developer />}
        {active === 'Contact' && <Contact />}
      </div>

      <div className="footer center">
        <div style={{ marginBottom: 6 }}>Thank you to UNHCR, EU, JRS and the Government of Malawi for supporting Dzaleka CDSS.</div>
        <div style={{ fontSize: 13 }}>© Dzaleka CDSS — Built with intent to honour teachers and students. Developer: Ndizeye Noriega</div>
      </div>
    </div>
  );
}