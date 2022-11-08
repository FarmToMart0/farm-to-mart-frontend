import  './style.css';
import World from "@svg-maps/sri-lanka";
import {SVGMap , CheckboxSVGMap } from 'react-svg-map'
import { RadioSVGMap } from "react-svg-map";
/*import 'react-svg-map/lib/index.css'*/
function MapSL() {

  return (
    <div className="App">
       <SVGMap 
       onLocationClick={(e)=>{
            console.log('e',e.target.id,e.target.getAttribute('name'),e.target.ariaLabel)
            }
          }
            
            onLocationMouseOver={()=>{}} onLocationMouseMove={()=>{}} onLocationMouseOut={()=>{

        }} locationClassName="location" className="mysvg" map={World} />
    </div>
  );
}

export default MapSL;