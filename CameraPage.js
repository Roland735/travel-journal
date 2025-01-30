"use client";
import { useState } from "react";

export default function CameraPage() {
    const [image, setImage] = useState(null);

    const captureImage = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.createElement("video");
        video.srcObject = stream;
        video.play();

        const canvas = document.createElement("canvas");
        setTimeout(() => {
            const ctx = canvas.getContext("2d");
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            setImage(canvas.toDataURL("image/png"));
            stream.getTracks().forEach(track => track.stop());
        }, 1000);
    };

    return (
        <div>
            <button onClick={captureImage}>Take Picture</button>
            {image && <img src={image} alt="Captured" />}
        </div>
    );
}
