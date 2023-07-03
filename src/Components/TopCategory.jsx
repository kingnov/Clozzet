
export default function TopCategory({icon, category}){
    return(
        <div>
            <div className="bg-contain space-between">
            <div className="rounded-full  bg-gray-200">
             <img src={icon}  className="w-40  p-4"/>

            </div>
            <h4 >{category}</h4>
            </div>
         
        </div>
        

    )
}