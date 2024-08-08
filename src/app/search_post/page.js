'use client'

import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { MagnifyingGlassIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/solid";

const searchPost = () => {

    const handleSearch = () => {
    }

    return (
        <div class="w-full min-h-screen bg-zinc-50 flex flex-col items-center">
            <Header />
            <SubHeader />
            <div class="w-2/3 mt-4 flex flex-col justify-center items-center">
                <div class="flex justify-center">
                    <input onChange={handleSearch} class="w-full border"/>
                    <MagnifyingGlassIcon class="h-6 w-6" />
                </div>
                <Trend />
            </div>
        </div>
    )
}

const Trend = () => {
    return (
        <div class="w-full mt-8">
            <div class="w-full flex items-center justify-start"><ArrowTrendingUpIcon class="w-4 h-4" />トレンド</div>
        </div>
    )
}

export default searchPost;