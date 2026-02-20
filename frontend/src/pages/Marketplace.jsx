import React, { useEffect, useState } from 'react';
import CollectibleCard from '../components/CollectibleCard';

function Marketplace() {
  const [collectibles, setCollectibles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/collectibles')
      .then(res => res.json())
      .then(data => setCollectibles(data));
  }, []);

  return (
    <div>
      <h1>Marketplace</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {collectibles.map(c => (
          <CollectibleCard key={c.id} collectible={c} />
        ))}
      </div>
    </div>
  );
}

export default Marketplace;
