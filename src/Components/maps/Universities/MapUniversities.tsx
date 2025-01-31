import * as React from 'react';
import { useState, useMemo, useCallback, useRef } from 'react';
import  Map, { GeolocateControl, FullscreenControl, NavigationControl } from 'react-map-gl';
import ControlPanel from './ControlPanel';

import Universities from './Universities'
import Nav from '../../navbar/NavBar';
import GeocoderControl from '../../Search/Geo';


const TOKEN = 'pk.eyJ1Ijoic2Ftb3RhIiwiYSI6ImNrdGo3dnlrZTBpYzMycnFycXNxbHk4cnIifQ.iPh1u1wmQJodbRkjJKgreQ';



export default function MainMap(){

    const mapRef = React.useRef();

    const onSelectUniversity = useCallback(({ longitude, latitude }) => {
      mapRef.current?.flyTo({
        center: [longitude, latitude],
        zoom: 13,
        duration: 2000
      });
  }, []);

  function onSelectBack() {
    mapRef.current?.flyTo({
      zoom: 6.2,
      duration: 2000
    });
  };
    return(
        <div 
          id="map"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
          }}
        >
            <Nav />
            <Map
            initialViewState={{
              latitude: 54,
              longitude: 28,
              zoom: 6.1,
              minZoom: 6.1
            }}
            mapStyle="mapbox://styles/samota/cl320mp31001w14odwj52o62g"
            mapboxAccessToken={TOKEN}
            ref={mapRef}
          >

            <Universities />
            <GeolocateControl position="bottom-left" />
            <FullscreenControl position="bottom-left" />
            <NavigationControl position="bottom-left" />
            <GeocoderControl  mapboxAccessToken={TOKEN} position="top-left"/>
          </Map>

          <ControlPanel onSelectUniversity={onSelectUniversity} onSelectBack={onSelectBack}  />
         

        </div>
    )
}