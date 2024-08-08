'use client'

import { useState } from "react";
import { UserCircleIcon, CakeIcon } from "@heroicons/react/24/solid"
import Link from "next/link";

const Header = (props) => {

    const [isLogin, setLogin] = useState(false);
    const [isVisible, setVisible] = useState(false);
    

    const handleClick = (event) => {
        event.stopPropagation()
        setVisible(!isVisible)
    }

    const handleClose = () => {
        setVisible(false)
    }

    return (
        <div onClick={handleClose} class="w-full">
            <div class="w-full h-14 border-b bg-gradient-to-r from-white to-emerald-100 grid grid-cols-2 items-center ">
                <div class="mx-2 flex justify-start items-end"><CakeIcon class="h-10 w-10" /><div class="text-lg">Cocoret</div></div>
                <div class="mx-2 flex justify-end">
                    <div onClick={handleClick} class="flex flex-col items-center">
                        < UserCircleIcon class="w-10 h-10 text-emerald-900" />
                    </div>
                </div>
            </div>
            { isVisible ? (<HeaderWindow isLogin={isLogin}/>):(" ")}
        </div>
    )
}

const HeaderWindow = (props) => {
    return (
        <div class="absolute top-12 right-0  bg-neutral-50 p-2 border">
            <Link href="/">
                {props.isLogin ? (" "):(<div>ログイン</div>)}
            </Link>
        </div>
    )
}

export default Header;