import * as React from 'react';
import { useState, useMemo, useCallback, useRef } from 'react';
import  Map, { GeolocateControl, FullscreenControl, NavigationControl } from 'react-map-gl';
import Nav from '../../navbar/NavBar';
import { MapboxStyleDefinition, MapboxStyleSwitcherControl } from "mapbox-gl-style-switcher";
import GeocoderControl from '../../Search/Geo';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2Ftb3RhIiwiYSI6ImNrdGo3dnlrZTBpYzMycnFycXNxbHk4cnIifQ.iPh1u1wmQJodbRkjJKgreQ';


export default function MainMap(){
    const mapRef = React.useRef();
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
            mapStyle="mapbox://styles/samota/cl2xb6yj200qy14ksluanjh96"
            mapboxAccessToken={MAPBOX_TOKEN}
            ref={mapRef}
          >

            <GeolocateControl position="bottom-left" />
            <FullscreenControl position="bottom-left" />
            <NavigationControl position="bottom-left" />
         
            <GeocoderControl  mapboxAccessToken={MAPBOX_TOKEN} position="top-left"/>
          </Map>

        </div>
    )
}