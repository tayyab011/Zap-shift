import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { useLoaderData } from 'react-router';
const Coverage = () => {
    const mapref=useRef(null)
    const serviceCenter=useLoaderData();
    console.log(serviceCenter)
    const position = [23.685, 90.3563];


    const searchHandler=(e)=>{
      const location =e.target.value
      const district =serviceCenter.find(data=>data.district.toLowerCase().includes(location.toLowerCase()))
      console.log(district)
      if (district) {
        const coord =[district.latitude,district.longitude]
      mapref.current.flyTo(coord,14)
      }
    }
    return (
      <div className="w-7/12 mx-auto">
        <form action="">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={searchHandler}
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </form>
        <div className="border w-full h-[800px]">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className="h-[800px]"
            ref={mapref}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {serviceCenter.map((center, index) => (
              <Marker
                key={index}
                position={[center.latitude, center.longitude]}
              >
                <Popup>
                  <strong>{center.district}</strong> <br />
                  Service Area : {center.covered_area.join(" , ")}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    );
};

export default Coverage;