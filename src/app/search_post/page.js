'use client'

import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const searchPost = () => {

    const handleSearch = () => {
    }

    return (
        <div class="w-full min-h-screen bg-zinc-50 flex flex-col items-center">
            <Header />
            <SubHeader />
            <div>
                <div class="flex justify-center items-center">
                    <input onChange={handleSearch} class="border"/>
                    <MagnifyingGlassIcon class="h-6 w-6" />
                </div>
            </div>
        </div>
    )
}

export default searchPost;