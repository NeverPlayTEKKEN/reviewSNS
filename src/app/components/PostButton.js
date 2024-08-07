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
                <div onClick={handleClick} class="absolute right-8 bottom-16 flex flex-col items-center bg-amber-200 rounded-full p-4 shadow-lg">
                    <PencilSquareIcon class="w-8 h-8"/>
                    <div class="text-xs">レビュー</div>
                </div>
            )}
        </div>
    )
}

const PostWindow = () => {

    return (
        <div></div>
    );
}

export default PostButton;