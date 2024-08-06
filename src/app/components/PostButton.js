'use client'
import { PencilSquareIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

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
    return(
        <div onClick={(e)=>{e.stopPropagation()}} class="bg-zinc-50 z-50">
            <div>ここにカメラを表示</div>
            <input type={"text"} />
        </div>
    )
}

export default PostButton;