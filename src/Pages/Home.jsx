import Nav from "../Components/Nav"
import Hero from "../Components/Hero"
import TopCategories from "../Components/TopCategories"
import Collections from "../Components/Collections"
import Footer  from "../Components/Footer"

export default function Home(){
    return(
        <div>
            <div className="bg-[url('assets/images/background1.png')] bg-no-repeat bg-right-top bg-contain">
            <Nav/>
            <Hero/>
            </div>
            <TopCategories />
            <Collections/>
            <Footer/>
            
        </div>
    )
}
