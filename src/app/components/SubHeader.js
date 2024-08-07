'use client'

import Link from "next/link";

const SubHeader = () => {
    return (
        <div class="h-10 w-full mb-6 border-b bg-zinc-50 grid grid-cols-4">
            <div class="flex flex-center items-center">
                <Link href="/" class="w-full border-r text-center text-sm">ホーム</Link>
            </div>
            <div class="flex flex-center items-center">
                <Link href="/post_review" class="w-full border-x text-center text-sm">投稿する</Link>
            </div>
            <div class="flex flex-center items-center">
                <Link href="/search_post" class="w-full border-x text-center text-sm">探す</Link>
            </div>
            <div class="flex flex-center items-center">
                <Link href="/trend" class="w-full border-l text-center text-sm">トレンド</Link>
            </div>
        </div>
        
    )
}

export default SubHeader;