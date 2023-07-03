import jacket from "../assets/images/jacket.png"
import handbag from "../assets/images/handbag.png"
import tshirt from "../assets/images/tshirt.png"
import dresses from "../assets/images/dress.png"
import jeans from "../assets/images/jeans.png"
import shoes from "../assets/images/shoe.png"
import sweater from "../assets/images/sweater.png"
import TopCategory from "../Components/TopCategory"
 export default function TopCategories(){
    return(
        <div  className="container mx-auto">
            <h2 className="flex justify-center text-5xl items-center mt-5 mb-5">Top Categories</h2>
            <div className="flex justify-between ">
            <TopCategory icon={jacket} category="Jackets"/>
            <TopCategory icon={handbag} category="Handbags"/>
            <TopCategory icon={tshirt} category="Shirts"/>
            <TopCategory icon={dresses} category="Dresses"/>
            <TopCategory icon={jeans} category="Jeans"/>
            <TopCategory icon={shoes} category="Shoes"/>
            <TopCategory icon={sweater} category="Sweaters"/>
            </div>
        </div>
    )
}