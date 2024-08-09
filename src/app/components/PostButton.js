'use client'
import { PencilSquareIcon } from "@heroicons/react/24/outline"
import { useEffect, useState, useRef } from "react"
import PostImage from "./PostImage"

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
                <div onClick={handleClick} class="absolute right-8 bottom-16 flex flex-col items-center justify-center bg-amber-200 rounded-full h-20 w-20 shadow-lg">
                    <PencilSquareIcon class="w-8 h-8"/>
                    <div class="text-xs">レビュー</div>
                </div>
            )}
        </div>
    )
}

const PostWindow = () => {

    const [ image, setImage ] = useState(null)

    const onFileUpload = (file) => {
        const upload_file= file
        if(upload_file){
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                setButtonActive(true)
            }
            reader.readAsDataURL(file);
        }else{
            alert("no file")
        }
    }

    return (
        <div class="w-full bg-zinc-50">
            <PostImage onFileUpload={onFileUpload}/>
        </div>
    );
}

export default PostButton;