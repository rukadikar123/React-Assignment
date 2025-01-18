import React, { useEffect, useRef } from 'react'
import {default as olMap} from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Style, Icon } from 'ol/style';
import { fromLonLat } from 'ol/proj';
import { Feature } from 'ol';
import { Vector as VectorLayer } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import { Point } from 'ol/geom';

function Map({profile}) {
const ref=useRef(null)
const mapInstance = useRef(null);

useEffect(() => {
  if(!profile) return null

  if (mapInstance.current) {
    mapInstance.current.setTarget(null); 
  }
  
  try {
    const map=new olMap({
      target:ref.current,
      layers:[
        new TileLayer({
          source:new OSM()
        }),
  
      ],
      view:new View({
        center:fromLonLat([profile.lng , profile.lat]),
        zoom:15,
      })
    });
  
    const marker=new Feature({
      geometry:new Point(fromLonLat([profile?.lng , profile?.lat]))
    });
  
    marker.setStyle(
      new Style({
        image:new Icon({
          src:'https://cdn-icons-png.flaticon.com/512/684/684908.png',
          scale:0.05
        })
      })
    )
  
    const vectorSource= new VectorSource({
      features:[marker],
    });
  
    const vectorLayer=new VectorLayer({
      source:vectorSource
    })
  
    map.addLayer(vectorLayer)
    console.log(profile);

    mapInstance.current = map;
    console.log('Map initialized:', map);
  } catch (error) {
    console.log(error);
     
  }

  return () => {
    if (mapInstance.current) {
      mapInstance.current.setTarget(null);
    }
  };

}, [profile])

    
  return (
    <div ref={ref} className=' h-[65vh] w-full'>
      {!profile && <p>Loading map...</p>}
    </div>
  )
}

export default Map