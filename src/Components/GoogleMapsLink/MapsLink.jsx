import React from 'react';

function GoogleMapsLink({ destination }) {
  const encodedDestination = encodeURIComponent(destination);
  const url = `https://www.google.com/maps/search/?api=1&query=${encodedDestination}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className='link-to-maps large-p'>
      Regimiento 3 de Caballeria 328
    </a>
  );
}

export default GoogleMapsLink;