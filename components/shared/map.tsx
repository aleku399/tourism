"use client";

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl, { Map } from 'mapbox-gl'; 
import "./styles.css";
 

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxla3UzOTkiLCJhIjoiY2praDBkbXpzMDlxNjNrcDBqNGUwc3kzeSJ9.Jfwtzm5tQfXFiWBjIQUvUA';

interface Props {
  latitude: number;
  longitude: number;
}

export default function MapComp({latitude, longitude}: Props) {
  const mapContainer = useRef<HTMLDivElement | null>(null); 
  const map = useRef<Map | null>(null); 
  const [lng, setLng] = useState();
  const [lat, setLat] = useState();
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (!mapContainer.current) return; 
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [longitude, latitude],
        zoom: zoom
      });

    }
  }, [latitude, longitude, zoom]);

  return (
    <div className="z-10 w-full  px-5">
      <div ref={mapContainer} className="map-container mb-2"  />
    </div>
  );
}
