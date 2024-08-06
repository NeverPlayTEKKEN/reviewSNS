'use client'

import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid"
import Link from "next/link";

const Header = () => {
    const [isLogin, setLogin] = useState(false);
    const [isVisible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!isVisible)
    }

    return (
        <div>
            <div class="w-full h-12 shadow-sm bg-neutral-50 grid grid-cols-3 items-center ">
                <div class="mx-2 flex justify-start">ロゴ</div>
                <div class="mx-2 flex justify-center">タイトル</div>
                <div class="mx-2 flex justify-end">
                    <div onClick={handleClick} class="flex flex-col items-center">
                        < UserCircleIcon class="w-6 h-6 text-emerald-900" />
                    </div>
                </div>
            </div>
            { isVisible ? (<HeaderWindow isLogin={isLogin}/>):(" ")}

            </div>
    )
}

const HeaderWindow = (props) => {
    return (
        <Link href="/" class="absolute top-12 right-0  bg-neutral-50 p-2">
            {props.isLogin ? (" "):(<div>ログイン</div>)}
        </Link>
    )
}

export default Header;