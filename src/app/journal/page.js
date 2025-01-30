"use client";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

export default function JournalPage() {
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getLocation = () => {
        setIsLoading(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                });
                setIsLoading(false);
            },
            (error) => {
                console.error(error);
                setIsLoading(false);
            }
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 max-w-md w-full">
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                    <FaLocationArrow className="text-blue-400" />
                    Travel Coordinates
                </h2>

                <button
                    onClick={getLocation}
                    disabled={isLoading}
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${isLoading ? 'bg-blue-400/50 cursor-not-allowed' :
                        'bg-blue-500 hover:bg-blue-600 hover:scale-[1.02]'
                        } text-white shadow-lg`}
                >
                    {isLoading ? 'Detecting...' : '📍 Get My Location'}
                </button>

                {location && (
                    <div className="mt-6 animate-fade-in">
                        <div className="bg-black/20 p-4 rounded-xl">
                            <p className="text-white/90 font-mono flex items-center gap-2">
                                <span className="text-yellow-400">Lat:</span>
                                {location.lat.toFixed(6)}
                            </p>
                            <p className="text-white/90 font-mono flex items-center gap-2 mt-2">
                                <span className="text-yellow-400">Lon:</span>
                                {location.lon.toFixed(6)}
                            </p>
                        </div>

                        <div className="mt-4 bg-white/5 p-4 rounded-xl border border-dashed border-white/20">
                            <p className="text-sm text-white/80 italic">
                                🌟 Pro tip: Use these coordinates to remember
                                exactly where your adventure took place!
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}