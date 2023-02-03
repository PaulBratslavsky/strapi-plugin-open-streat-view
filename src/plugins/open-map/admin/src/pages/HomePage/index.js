/*
 *
 * HomePage
 *
 */

import React, { useState } from 'react';
import MapComponent from '../../components/MapComponent';
// import MapModal from '../../components/MapModal';
// import pluginId from '../../pluginId';


const HomePage = () => {
  const [marker, setMarker] = useState();

  return (
    <div>
      <MapComponent marker={marker} setMarker={setMarker} />
      {/* {marker && <MapModal marker={marker} setMarker={setMarker} />} */}
    </div>
  );
};

export default HomePage;
