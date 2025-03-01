import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Define all required styles inline
const containerStyles = {
    width: '100%',
    height: '100%',
    position: 'relative'
};

const mapContainerStyles = {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1 
};

const leafletStyles = {
    height: '100%',
    width: '100%'
};

// Fix for missing Leaflet marker
const customIcon = new L.Icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

const ORS_API_KEY = import.meta.env.VITE_OPEN_ROUTE_SERVICE_MAPS_API;

const LiveTracking = () => {
    const [currentPosition, setCurrentPosition] = useState(null);
    const [address, setAddress] = useState("Fetching location...");

    useEffect(() => {
        if (!navigator.geolocation) {
            console.error("Geolocation is not supported by this browser.");
            setAddress("Geolocation not supported");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentPosition({ lat: latitude, lng: longitude });
                getAddressFromCoordinates(latitude, longitude);
            },
            (error) => {
                console.error("Error getting location:", error.message);
                setAddress("Location access denied");
            }
        );

        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentPosition({ lat: latitude, lng: longitude });
                getAddressFromCoordinates(latitude, longitude);
            },
            (error) => {
                console.error("Error watching position:", error.message);
            },
            { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    const getAddressFromCoordinates = async (latitude, longitude) => {
        try {
            if (!ORS_API_KEY) {
                throw new Error("API Key is missing");
            }

            const url = `https://api.openrouteservice.org/geocode/reverse?api_key=${ORS_API_KEY}&point.lon=${longitude}&point.lat=${latitude}`;
            const response = await axios.get(url);

            if (response.data.features.length > 0) {
                setAddress(response.data.features[0].properties.label);
            } else {
                setAddress("Address not found");
            }
        } catch (err) {
            console.error("Error fetching address:", err.message);
            setAddress("Error fetching address");
        }
    };

    return (
        <div style={containerStyles}>
            {currentPosition ? (
                <div style={mapContainerStyles}>
                    <MapContainer 
                        center={currentPosition} 
                        zoom={15} 
                        scrollWheelZoom={true}
                        dragging={true}
                        touchZoom={true}
                        doubleClickZoom={true}
                        zoomControl={true}
                        style={leafletStyles}
                        className="!h-full !w-full relative"
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={currentPosition} icon={customIcon}>
                            <Popup>{address}</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            ) : (
                <p className="text-lg font-semibold text-gray-700">Loading map...</p>
            )}
            
            <div className="absolute bottom-4 left-0 right-0 z-10">
                <p className="text-lg font-semibold text-gray-700 text-center bg-white/80 p-2 mx-4 rounded-lg">
                    {address}
                </p>
            </div>
        </div>
    );
};

export default LiveTracking;