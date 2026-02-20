import React from 'react';

function CollectibleCard({ collectible }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', borderRadius: '5px' }}>
      <h3>{collectible.name}</h3>
      <p>Owner: {collectible.owner}</p>
      <button>Trade / Flip</button>
    </div>
  );
}

export default CollectibleCard;
