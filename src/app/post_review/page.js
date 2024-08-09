'use client'

import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { useState } from 'react';
import Star from "../components/Star";
import { PencilSquareIcon, ChevronDownIcon } from "@heroicons/react/24/solid"
import Image from "next/image";
import PostImage from "../components/PostImage";

const postReview = () => {
    const [ isButtonActive, setButtonActive] = useState(false)
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
        <div className="bg-zinc-50 flex flex-col min-h-screen">
            <Header />
            <SubHeader />
            <div class="flex justify-center">
                <div class="flex flex-col items-center w-2/3">
                    {isButtonActive ? (<div class="relative w-full bg-zinc-100 aspect-video border-2 border-dashed mt-4 mb-4"><Image src={image} layout="fill" objectFit="contain"/></div>):(<PostImage onFileUpload={onFileUpload} />)}
                    <Star />
                    <textarea class="mt-4 mb-4 border w-full h-20"></textarea>
                    <DropDownReview isActive={isButtonActive} />
                    <div class="w-full flex justify-end text-sm mb-4">
                        <button class={isButtonActive ? ("flex items-center px-4 py-2 rounded-md shadow bg-amber-200"):("flex items-center py-2 px-4 rounded-md shadow bg-gray-200")}>
                            <PencilSquareIcon class="h-6 w-6" /><div class="text-lg">投稿</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default postReview;



const DropDownReview = (props) => {

    const [isOpen, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!isOpen)
    }

    return (
        <div class="flex flex-col w-full mt-4 mb-10">
            <div
                onClick={handleClick}
                class={
                    props.isActive ?("flex items-center border-b w-fit"):("flex items-center text-gray-400")}
            >
                もっと詳しく
                <ChevronDownIcon class="h-4 w-4 font-bold"/>
            </div>
            {props.isActive ? (""): (<div class="text-xs text-gray-400">※写真をアップロードしてください</div>)}
            {isOpen&&props.isActive ? (
                <div class="flex flex-col">
                    <div class="mt-3">メーカー</div>
                    <input type="text" class="border"/>
                    <div class="mt-3">型番</div>
                    <input type="text" class="border"/>
                    <div class="mt-3">買ったお店</div>
                    <input type="text" class="border" />
                </div>
            ):("")}
            
        </div>
    )
}