"use client";
import { useState } from "react";

export default function JournalPage() {
    const [location, setLocation] = useState(null);

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => setLocation({ lat: position.coords.latitude, lon: position.coords.longitude }),
            (error) => console.error(error)
        );
    };

    return (
        <div>
            <button onClick={getLocation}>Get My Location</button>
            {location && <p>Lat: {location.lat}, Lon: {location.lon}</p>}
        </div>
    );
}
