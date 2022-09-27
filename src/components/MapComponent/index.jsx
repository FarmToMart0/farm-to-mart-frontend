

import * as React from "react";
import { createRoot } from "react-dom/client";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { TextField } from "formik-material-ui";
import { Autocomplete } from '@mui/material';


const render = (status) => {
  return <h1>{status}</h1>;
};

function MapComponent (){
  const [isCkick,setIsClick] =React.useState(false)
 const [searchBox,setsearchBox]=React.useState(null)
    const [clicks, setClicks] = React.useState([]);
    const [zoom, setZoom] = React.useState(8); // initial zoom
    const [center, setCenter] = React.useState({
      lat: 6.7412438474587235,
      lng: 80.86148434562229,
    });



    const onClick = (e) => {
     
        // avoid directly mutating state
        setClicks([ e.latLng]);
      
      };
      const handleSearch = (e) => {
     
        // avoid directly mutating state
       setsearchBox(e)
      
      };
      
      const onIdle = (m) => {
       
        setZoom(m.getZoom());
        setCenter(m.getCenter().toJSON());
      };

  const form = (
    <div
      style={{
        padding: "1rem",
        flexBasis: "250px",
        height: "100%",
        overflow: "auto",
      }}
    >
      <label htmlFor="place-box">Place</label>
      <input
        type="text"
        id="place-box"
        name="place"
       
      />
      <br />
      <label htmlFor="zoom">Zoom</label>
      <input
        type="number"
        id="zoom"
        name="zoom"
        value={zoom}
        onChange={(event) => setZoom(Number(event.target.value))}
      />
      <br />
      <label htmlFor="lat">Latitude</label>
      <input
        type="number"
        id="lat"
        name="lat"
        value={center.lat}
        onChange={(event) =>
          setCenter({ ...center, lat: Number(event.target.value) })
        }
      />
      <br />
      <label htmlFor="lng">Longitude</label>
      <input
        type="number"
        id="lng"
        name="lng"
        value={center.lng}
        onChange={(event) =>
          setCenter({ ...center, lng: Number(event.target.value) })
        }
      />
      <h3>{clicks.length === 0 ? "Click on map to add markers" : "Clicks"}</h3>
      {clicks.map((latLng, i) => (
        <pre key={i}>{JSON.stringify(latLng.toJSON(), null, 2)}</pre>
      ))}
      <button onClick={() => setClicks([])}>Clear</button>
    </div>
  );

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Wrapper libraries={['places']} apiKey={"AIzaSyDXy9nOTTaWLVWgkJEQ28aJ56fCXbNkRUY"} render={render}>
        <Map
        handleSearch={handleSearch}
        searchBox={searchBox}
          center={center}
          onClick={onClick}
          onIdle={onIdle}
          zoom={zoom}
          style={{ flexGrow: "1", height: "100%" }}
        >
          {clicks.map((latLng, i) => (
            <Marker key={i} position={latLng} />
          ))}
        </Map>
      </Wrapper>
      {/* Basic form for controlling center and zoom of map. */}
      {form}
    </div>
  );
};


const Map = ({
  searchBox,
  handleSearch,
  onClick,
  onIdle,
  placeSearch,
  children,

  style,
  ...options
}) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();
 
  React.useEffect(() => {
    if (ref.current && !map) {
      const input = document.getElementById("place-box");
      const box = new window.google.maps.places.SearchBox(input);
      handleSearch(box);
      box.addListener("places_changed", () => {
        const places = box.getPlaces();
        if(places){
          console.log(places[0])
          
        }
    
      
      
      });
     
      
      
      
      console.log(new window.google.maps.Map(ref.current, {}))
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946
  React.useEffect(() => {
    if (map) {
      
      map.setOptions(options);
    }
  }, [map, options]);
 
  
// console.log(new window.google.maps.Autocomplete)
  // const searchBox = new window.google.maps.places.SearchBox(document.getElementById("place"));
  // console.log(new window.google.maps.places)


// map.addListener("bounds_changed", () => {
//           searchBox.setBounds(map.getBounds());
//         });
//         searchBox.addListener("places_changed", () => {
//           const places = searchBox.getPlaces();
      
//           if (places.length == 0) {
//             return;
//           }
      
//           // Clear out the old markers.
        
         
      
//           // For each place, get the icon, name and location.
//           const bounds = new window.google.maps.LatLngBounds();
      
//           places.forEach((place) => {
//             if (!place.geometry || !place.geometry.location) {
//               console.log("Returned place contains no geometry");
//               return;
//             }
       
           
      
//             // Create a marker for each place.
           
      
//             if (place.geometry.viewport) {
//               // Only geocodes have viewport.
//               bounds.union(place.geometry.viewport);
//             } else {
//               bounds.extend(place.geometry.location);
//             }
//           });
//           map.fitBounds(bounds);
//         });




  React.useEffect(() => {
    if (map) {


      ["click", "idle",'bounds_changed'].forEach((eventName) =>
        window.google.maps.event.clearListeners(map, eventName)
      );
      if (handleSearch) {
        map.addListener("bounds_changed", () => {
          searchBox.setBounds(map.getBounds()) ;
        });
      
        let markers = [];
      
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener("places_changed", () => {
          const places = searchBox.getPlaces();
      
          if (places.length == 0) {
            return;
          }
      
          // Clear out the old markers.
         
      
          // For each place, get the icon, name and location.
          const bounds = new window.google.maps.LatLngBounds();
      
          places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
              console.log("Returned place contains no geometry");
              return;
            }
      
            
            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }
     
      

      if (onClick) {
        map.addListener("click", onClick);
      }
      

      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle,searchBox]);

  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};
const Marker = (options) => {
    const [marker, setMarker] = React.useState();
  
    React.useEffect(() => {
      if (!marker) {
        setMarker(new window.google.maps.Marker());
      }
  
      // remove marker from map on unmount
      return () => {
        if (marker) {
          marker.setMap(null);
        }
      };
    }, [marker]);
    React.useEffect(() => {
      if (marker) {
        marker.setOptions(options);
      }
    }, [marker, options]);
    return null;
  };

// const deepCompareEqualsForMaps = createCustomEqual(
//   (deepEqual) => (a, b) => {
//     if (
//       isLatLngLiteral(a) ||
//       a instanceof google.maps.LatLng ||
//       isLatLngLiteral(b) ||
//       b instanceof google.maps.LatLng
//     ) {
//       return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
//     }

//     // TODO extend to other types

//     // use fast-equals for other objects
//     return deepEqual(a, b);
//   }
// );



// function useDeepCompareEffectForMaps(
//   callback: React.EffectCallback,
//   dependencies: any[]
// ) {
//   React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
// }

// window.addEventListener("DOMContentLoaded", () => {
//   const root = createRoot(document.getElementById("root")!);
//   root.render(<App />);
// });


export default MapComponent;
