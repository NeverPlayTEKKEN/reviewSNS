'use client'

import { useRef } from "react";
import { CameraIcon } from "@heroicons/react/24/solid"

const PostImage = (props) => {
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    }

    return (
        <div class="flex justify-center items-center w-full bg-zinc-100 aspect-video border-2 border-dashed mt-4 mb-4">
            <input type="file" accept="image/*" onChange={() => props.onFileUpload(fileInputRef.current.files[0])} ref={fileInputRef} class='hidden' />
            <button onClick={handleButtonClick} class="flex flex-col items-center text-xs bg-amber-200 p-1 rounded-md shadow"><CameraIcon class="h-8 w-8" /><div class="text-xs">アップロード</div></button>
        </div>
    )
}

export default PostImage;