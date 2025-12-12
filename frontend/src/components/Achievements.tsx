import React from "react";

interface Achievement {
  id: number;
  title: string;
  summary: string;
  details: string;
  year: number;
}

const Achievements: React.FC<{ achievements: Achievement[] }> = ({ achievements }) => {
  return (
    <div className="card">
      <h3>School Achievements</h3>
      {achievements.length > 0 ? (
        achievements.map(a => (
          <div key={a.id} className="achievement-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4>{a.title}</h4>
              <div className="badge">{a.year}</div>
            </div>
            <p>{a.summary}</p>
            <p style={{ marginTop: 8, fontSize: 14, color: '#6b7280' }}>{a.details}</p>
          </div>
        ))
      ) : (
        <p>No achievements to display</p>
      )}
    </div>
  );
};

export default Achievements;