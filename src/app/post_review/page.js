'use client'

import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import PostWindow from "../components/PostWindow";

const postReview = () => {
    

    return (
        <div className="bg-zinc-50 flex flex-col min-h-screen">
            <Header />
            <SubHeader />
            <PostWindow />
        </div>
    )
}

export default postReview;