import {AiOutlineSearch} from "react-icons/ai"
export default function Hero(){
    return(
        <div className="container mx-auto flex">
            <div className="w-[100%] sm:w-[50%] " >
                <h1 className="text-7xl font-bold  " >Choose the look that <span className="text-[#45C9A1]">suits</span> you best</h1>
                <p className="text-3xl my-5 sm:text-2xl">Every day is a fashion show & the world is your runway.Clozzet will elevate your wardrobe with the best collections.
                Be exclusive, Be Devine, Be yourself. Explore outfits that willmake you comfortably beautiful.True style never dies.
</p>
            <div className="flex gap-10 mt-3">
                <button className="bg-[#45C9A1] rounded-full my-1 p-5 shadow-lg py-4 px-[6em]" >Shop Now</button>
                <button className="bg-white text-[#45C9A1] rounded-full p-5  shadow-lg py-4 px-[6em]">About Us</button>
            </div>
            <div className="border-2 rounded-full mt-6 flex justify-start items-center p-3">
            <AiOutlineSearch size={50}/>
            <input className="w-[100%] sm-w-[50%] p-4 border-1 outline-none text-4xl" type="text" placeholder="Search" />
            </div>
            </div>
            <div className="hidden sm:block w-[50%] bg-[url('assets/images/hero2.png')] bg-no-repeat bg-right bg-contain">

            </div>
        </div>
    )
}

