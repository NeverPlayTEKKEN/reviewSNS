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

    const capturePhoto = () => {
        const canvas = document.createElement('canvas');
        const video = videoRef.current;
        if (video) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = canvas.toDataURL('image/png');
            console.log(imageData); // ここで画像データを処理
        }
    };

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                }
            })
            .catch((err) => {
                console.error("Error accessing camera: ", err);
            });
    }, []);

    return (
        <div className="bg-zinc-50 z-50 p-1">
            <video ref={videoRef} width="600" height="400" />
            <div className="flex justify-center">
                <button onClick={capturePhoto} className="bg-emerald-900 text-white mt-1 rounded-sm w-16">撮影</button>
            </div>
        </div>
    );
}

export default PostButton;