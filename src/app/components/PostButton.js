'use client'
import { PencilSquareIcon } from "@heroicons/react/24/outline"
import { useEffect, useState, useRef } from "react"

const PostButton = () => {
    const [isVisible, setVisible] = useState(false)

    const handleClick = () => {
        setVisible(!isVisible)
    }

    return (
        <div>
            {isVisible ? (
                <div onClick={handleClick} class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <PostWindow />
                </div>
            ):(
                <div onClick={handleClick} class="absolute right-2 bottom-16 flex flex-col items-center bg-amber-200 rounded-full p-3 shadow-lg">
                    <PencilSquareIcon class="w-6 h-6"/>
                    <div class="text-xs">レビュー</div>
                </div>
            )}
        </div>
    )
}

const PostWindow = () => {

    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isCameraActive, setCameraActive] = useState(false);

    useEffect(() => {
        startCamera();
        return () => {
            stopCamera();
        }
    }, []);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({video:true});
            videoRef.current.play();
            setCameraActive(true);
        } catch (error) {
            console.error('Error accessing the camera: ', error);
        }
    }

    const stopCamera = () => {
        const stream = videoRef.current.srcObject;
        if (stream) {
            const tracks = stream.getTrack();
            tracks.forEach(track => track.stop());
            videoRef.current.strObject = null;
        }
        setCameraActive(false);
    }

    const capturePhoto = () => {
        const context = canvasRef.current.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    };

    return (
        <div>
            <video ref={videoRef} style={{ width: '100%' }} />
            <button onClick={capturePhoto} disabled={!isCameraActive}>Capture Photo</button>
            <canvas ref={canvasRef} style={{ display: 'none' }} width="640" height="480" />
        </div>
    );
}

export default PostButton;