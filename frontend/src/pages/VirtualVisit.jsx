import React, { useEffect, useRef, useState } from 'react';
import Marzipano from 'marzipano';
import './VirtualVisit.css';

const VirtualVisit = () => {
  const viewerRef = useRef(null);
  const panoViewerRef = useRef(null);
  const [floors, setFloors] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [centralPanorama, setCentralPanorama] = useState(null);
  const [minimapImage, setMinimapImage] = useState(null);
  const [minimapHotspots, setMinimapHotspots] = useState([]);

  useEffect(() => {
    fetch('/api/floors').then(res => res.json()).then(data => setFloors(data));
    panoViewerRef.current = new Marzipano.Viewer(viewerRef.current);
  }, []);

  useEffect(() => {
    if (selectedFloor) {
      fetch(`/api/rooms/by-floor/${selectedFloor}`).then(res => res.json()).then(data => setRooms(data));
      fetch(`/api/floors/${selectedFloor}`).then(res => res.json()).then(data => setMinimapImage(data.minimapImage));
      fetch(`/api/rooms/minimap-hotspots/${selectedFloor}`).then(res => res.json()).then(data => setMinimapHotspots(data));
    }
  }, [selectedFloor]);

  useEffect(() => {
    if (selectedRoom) {
      fetch(`/api/panoramas/central/${selectedRoom}`)
        .then(res => res.json())
        .then(data => {
          setCentralPanorama(data);
          displayPanorama(data);
        });
    }
  }, [selectedRoom]);

  const displayPanorama = (panoData) => {
    panoViewerRef.current.clear();
    const source = Marzipano.ImageUrlSource.fromString(panoData.image_url);
    const geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);
    const limiter = Marzipano.RectilinearView.limit.traditional(1024, 100*Math.PI/180);
    const view = new Marzipano.RectilinearView(null, limiter);
    const scene = panoViewerRef.current.createScene({ source, geometry, view, pinFirstLevel: true });

    panoData.hotspots.forEach(hs => {
      const el = document.createElement('div');
      el.className = 'hotspot';
      el.innerHTML = hs.label;
      el.onclick = () => alert(hs.description);
      scene.hotspotContainer().createHotspot(el, { yaw: hs.yaw, pitch: hs.pitch });
    });

    scene.switchTo();
  };

  return (
    <div className="virtual-visit-container">
      <header className="navbar">
        <div className="logo">Virtual British Museum</div>
        <nav>
          <a href="/collections">Collections</a>
          <a href="/reserve-visit">Reserve a Visit</a>
          <a href="/virtual-visit" className="active">Virtual Visit</a>
        </nav>
      </header>

      <div className="control-panel">
        <label>Floor
          <select onChange={e => setSelectedFloor(e.target.value)} defaultValue="">
            <option value="">Select Floor</option>
            {floors.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
          </select>
        </label>

        <label>Room
          <select onChange={e => setSelectedRoom(e.target.value)} defaultValue="">
            <option value="">Select Room</option>
            {rooms.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
          </select>
        </label>
      </div>

      <div className="viewer-wrapper">
        <div className="viewer" ref={viewerRef}></div>
        {minimapImage && (
          <div className="minimap">
            <img src={minimapImage} alt="Minimap" className="minimap-image" />
            {minimapHotspots.map(hs => (
              <div
                key={hs.id}
                className="minimap-hotspot"
                style={{ top: `${hs.y}%`, left: `${hs.x}%` }}
                onClick={() => setSelectedRoom(hs.room_id)}
              >
                {hs.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VirtualVisit;
