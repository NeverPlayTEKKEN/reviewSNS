'use client'
import { StarIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const Star = () => {

    const [ starCount, setStarCount ] = useState([1, 0, 0, 0, 0])

    const handleClick = (num) => {
        const starArray = Array(5).fill(0)

        for(var i=0; i<num; i++){
            starArray[i] = 1
        }
        setStarCount(starArray)
    }

    const handleColor = (is_yellow) => {
        var style
        is_yellow ? (style = "text-yellow-400") : (style = "text-gray-400")
        return style
    }
    
    return (
        <div class="flex">
            <button onClick={()=>handleClick(1)} class={handleColor(starCount[0])} ><StarIcon class="h-6 w-6" /></button>
            <button onClick={()=>handleClick(2)} class={handleColor(starCount[1])} ><StarIcon class="h-6 w-6" /></button>
            <button onClick={()=>handleClick(3)} class={handleColor(starCount[2])} ><StarIcon class="h-6 w-6" /></button>
            <button onClick={()=>handleClick(4)} class={handleColor(starCount[3])} ><StarIcon class="h-6 w-6" /></button>
            <button onClick={()=>handleClick(5)} class={handleColor(starCount[4])} ><StarIcon class="h-6 w-6" /></button>

        </div>
    )
}

export default Star;