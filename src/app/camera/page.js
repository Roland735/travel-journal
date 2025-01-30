"use client";
import { useState, useRef } from "react";
import { FaMicrophone, FaStop, FaDownload, FaPlay } from "react-icons/fa";

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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 p-6 text-white">
            <div className="bg-white shadow-lg p-6 rounded-xl text-gray-900 max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-4">📍 Travel Voice Memo</h2>
                <p className="text-sm text-center text-gray-600 mb-4 italic">
                    &quot;Capture the sounds of your journey – a bustling market, crashing waves, or your thoughts on a mountain peak.&quot;
                </p>

                <div className="flex justify-center">
                    {!recording ? (
                        <button
                            onClick={startRecording}
                            className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-md transition-all">
                            <FaMicrophone className="animate-pulse" />
                            <span>Start Recording</span>
                        </button>
                    ) : (
                        <button
                            onClick={stopRecording}
                            className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-md transition-all">
                            <FaStop />
                            <span>Stop Recording</span>
                        </button>
                    )}
                </div>

                {audioURL && (
                    <div className="mt-6 flex flex-col items-center">
                        <h3 className="font-semibold text-center text-gray-700">Your Travel Memo 🎙️</h3>
                        <audio controls src={audioURL} className="mt-2 w-full"></audio>
                        <a
                            href={audioURL}
                            download="travel-memo.mp3"
                            className="mt-4 flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-md transition-all">
                            <FaDownload />
                            <span>Download Memo</span>
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
