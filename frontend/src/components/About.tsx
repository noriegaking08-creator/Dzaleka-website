import React from "react";

interface AboutData {
  overview: string;
  hours?: string;
  population_served?: string;
}

interface Supporter {
  name: string;
  role: string;
}

const About: React.FC<{ about: AboutData | null; supporters: Supporter[] }> = ({ about, supporters }) => {
  return (
    <div className="card">
      <h3>About Dzaleka CDSS</h3>
      <p>{about?.overview || "No information available"}</p>
      
      {about?.hours && (
        <div style={{ marginTop: 12 }}>
          <div className="info-row">
            <div>🕒</div>
            <div>
              <div style={{ fontWeight: 600 }}>Hours</div>
              <div>{about.hours}</div>
            </div>
          </div>
        </div>
      )}
      
      {about?.population_served && (
        <div style={{ marginTop: 12 }}>
          <div className="info-row">
            <div>👥</div>
            <div>
              <div style={{ fontWeight: 600 }}>Population Served</div>
              <div>{about.population_served}</div>
            </div>
          </div>
        </div>
      )}
      
      <h3 style={{ marginTop: 24 }}>Our Supporters</h3>
      <div className="grid">
        {supporters.length > 0 ? (
          supporters.map((s, i) => (
            <div key={i} className="card">
              <div style={{ fontWeight: 600 }}>{s.name}</div>
              <div style={{ fontSize: 14, color: '#6b7280', marginTop: 4 }}>{s.role}</div>
            </div>
          ))
        ) : (
          <div>No supporters information available</div>
        )}
      </div>
    </div>
  );
};

export default About;