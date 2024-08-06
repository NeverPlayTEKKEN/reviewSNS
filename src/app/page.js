'use client'


import Header from "./components/Header";
import PostButton from "./components/PostButton";
import SubHeader from "./components/SubHeader";

const Home = () => {
  return (
    <div class="h-screen bg-emerald-50 flex flex-col">
      <Header />
      <SubHeader />
      <PostButton />
    </div>
  )
}

export default Home;