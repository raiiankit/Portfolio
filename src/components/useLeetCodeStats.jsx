// hooks/useLeetCodeStats.js
import { useEffect, useState } from 'react';

const useLeetCodeStats = (username) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error(err));
  }, [username]);

  return stats;
};

export default useLeetCodeStats;


