"use client";
import { useState, useRef } from "react";
import { FaMicrophone, FaStop, FaDownload, FaPlay, FaWaveSquare } from "react-icons/fa";

export default function TravelVoiceMemo() {
    const [recording, setRecording] = useState(false);
    const [audioURL, setAudioURL] = useState(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: "audio/mp3" });
                const url = URL.createObjectURL(audioBlob);
                setAudioURL(url);
                audioChunksRef.current = [];
            };

            mediaRecorder.start();
            mediaRecorderRef.current = mediaRecorder;
            setRecording(true);
        } catch (error) {
            console.error("Error accessing microphone:", error);
            alert("Please allow microphone access in your browser settings.");
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && recording) {
            mediaRecorderRef.current.stop();
            setRecording(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-900 to-rose-900 flex items-center justify-center p-6 relative">
            <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 max-w-lg w-full">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-rose-500/20 rounded-xl">
                        <FaWaveSquare className="text-2xl text-rose-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Travel Voice Memo</h2>
                </div>

                <p className="text-white/80 italic mb-8 text-center bg-black/20 p-4 rounded-xl border border-white/10">
                    🎙️ &rdquo;Capture the soul of your journey - bustling markets,
                    ocean whispers, mountain echoes...&rdquo;
                </p>

                <div className="flex justify-center">
                    {!recording ? (
                        <button
                            onClick={startRecording}
                            className="flex items-center gap-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 px-8 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <FaMicrophone className="text-xl animate-pulse" />
                            <span className="font-semibold">Start Adventure Recording</span>
                        </button>
                    ) : (
                        <button
                            onClick={stopRecording}
                            className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 px-8 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-pulse"
                        >
                            <FaStop className="text-xl" />
                            <span className="font-semibold">Stop recording</span>
                        </button>
                    )}
                </div>

                {audioURL && (
                    <div className="mt-8 animate-fade-in-up">
                        <div className="bg-black/20 p-6 rounded-2xl border border-white/10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-emerald-500/20 rounded-lg">
                                    <FaPlay className="text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">Your Travel Memory </h3>
                            </div>

                            <audio
                                controls
                                src={audioURL}
                                className="w-full mt-4 rounded-lg [&::-webkit-media-controls-panel]:bg-gray-800 [&::-webkit-media-controls-play-button]:bg-white/10 [&::-webkit-media-controls-timeline]:bg-white/20"
                            />

                            <a
                                href={audioURL}
                                download="travel-memory.mp3"
                                className="mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-[1.02] shadow-lg w-full"
                            >
                                <FaDownload />
                                Download Memory
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}