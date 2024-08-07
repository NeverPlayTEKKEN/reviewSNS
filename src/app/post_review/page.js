'use client'

import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { useRef } from 'react';
import Star from "../components/Star";

const postReview = () => {
    return (
        <div className="bg-zinc-50 flex flex-col">
            <Header />
            <SubHeader />
            <div class="flex flex-col items-center">
                <PostImage />
                <Star />
                <input type="text" class="mt-4 mb-4 border h-12 text-sm" />
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
        <div class="flex justify-center items-center w-2/3 bg-zinc-100 aspect-video border-2 border-dashed mb-4">
            <input type='file' ref={fileInputRef} class='hidden' />
            <button onClick={handleButtonClick} class="text-xs bg-amber-200 p-1 rounded-md shadow">画像を選択</button>
        </div>
    )
}