'use client'

import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { useRef, useState } from 'react';
import Star from "../components/Star";
import { CameraIcon, PencilSquareIcon } from "@heroicons/react/24/solid"

const postReview = () => {
    const [isButtonActive, setButtonActive] = useState(false)
    return (
        <div className="bg-zinc-50 flex flex-col">
            <Header />
            <SubHeader />
            <div class="flex justify-center">
                <div class="flex flex-col items-center w-fit">
                    <PostImage />
                    <Star />
                    <input type="text" class="mt-4 mb-4 border h-12 text-sm" />
                    <div class="w-full flex justify-end text-sm mb-4">
                        <button class={isButtonActive ? ("flex items-center py-1 px-2 rounded-md shadow bg-amber-200"):("flex items-center py-1 px-2 rounded-md shadow bg-gray-200")}>
                            <PencilSquareIcon class="h-6 w-6" /><div class="text-xs">投稿</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default postReview;

const PostImage = () => {
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    }

    return (
        <div class="flex justify-center items-center w-full bg-zinc-100 aspect-video border-2 border-dashed mb-4">
            <input type='file' ref={fileInputRef} class='hidden' />
            <button onClick={handleButtonClick} class="flex flex-col items-center text-xs bg-amber-200 p-1 rounded-md shadow"><CameraIcon class="h-6 w-6" /><div class="text-xs">アップロード</div></button>
        </div>
    )
}