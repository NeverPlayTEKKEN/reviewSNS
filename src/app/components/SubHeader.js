'use client'

import Link from "next/link";
import { HomeIcon, PencilSquareIcon, MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";

const SubHeader = () => {
    return (
        <div class="w-full mb-6 border-b bg-white grid grid-cols-4">
            <div class="flex justify-center items-center pt-2 pb-1 border-r">
                <Link href="/" class="w-full flex flex-col items-center justify-center text-xs"><HomeIcon class="h-7 w-7" />ホーム</Link>
            </div>
            <div class="flex justify-center items-center pt-2 pb-1 border-r">
                <Link href="/notice" class="w-full flex flex-col items-center justify-center text-xs"><BellIcon class="h-7 w-7" />通知</Link>
            </div>
            <div class="flex justify-center items-center pt-2 pb-1 border-r">
                <Link href="/post_review" class="w-full flex flex-col items-center justify-center text-xs"><PencilSquareIcon class="h-7 w-7" />投稿する</Link>
            </div>
            <div class="flex justify-center items-center pt-2 pb-1 border-r">
                <Link href="/search_post" class="w-full flex flex-col items-center justify-center text-xs"><MagnifyingGlassIcon class="h-7 w-7" />検索</Link>
            </div>
        </div>
        
    )
}

export default SubHeader;