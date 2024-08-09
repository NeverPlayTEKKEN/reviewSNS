'use client'
import { PencilSquareIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import PostWindow from "./PostWindow"


const PostButton = () => {
    const [isVisible, setVisible] = useState(false)

    const handleClick = () => {
        setVisible(!isVisible)
    }

    return (
        <div>
            {isVisible ? (
                <div onClick={handleClick} class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div onClick={(event) => {event.stopPropagation()}} class="bg-zinc-50 w-full mx-2">
                        <div class="h-8 border bg-gradient-to-r from-white to-emerald-100 mb-4 pl-4 text-justify flex items-center text-lg">投稿する</div>
                        <PostWindow />
                    </div>
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

export default PostButton;