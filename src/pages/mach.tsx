import React, { useEffect, useState } from 'react';

const API_KEY = '8721a961d2e94213af64fa5788231058'; // استخدم مفتاحك الخاص

const fetchFootballMatches = async () => {
  const url = 'https://api.football-data.org/v4/matches';

  try {
    const response = await fetch(url, {
      method: 'GET',
    
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}. Response: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching football matches:', error);
    return null;
  }
};

const MatchesPage: React.FC = () => {
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getMatches = async () => {
      const data = await fetchFootballMatches();
      if (data && data.matches) {
        setMatches(data.matches);
      }
      setLoading(false);
    };

    getMatches();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Football Matches</h1>
      <ul>
        {matches.map((match: any) => (
          <li key={match.id}>
            <strong>{match.homeTeam.name}</strong> vs <strong>{match.awayTeam.name}</strong>
            <div>Date: {new Date(match.utcDate).toLocaleDateString()}</div>
            <div>Score: {match.score.fullTime.home} - {match.score.fullTime.away}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchesPage;
