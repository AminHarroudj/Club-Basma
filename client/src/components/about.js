import aboutImg from "./about.jpg"
import { useRef } from "react"

export default function About(){
    return(
        <div className="flex flex-col justify-center items-center text-center gap-8 p-4 pt-24 lg:flex-row lg:text-start lg:px-12" id="about">
            <div className="flex flex-col gap-8 lg:w-1/2">
                <h1 className="text-4xl font-semibold text-blue-900 lg:text-5xl">التعريف بالنادي :</h1>
                <p className="text-2xl">النادي العلمي لجمعية العلماء المسلمين "بصمة" الذي تندرج تحته عدة نشاطات و دورات علمية و تعليمية في شتى المجالات الاكثر طلبا في سوق العمل مثل : البرمجة , التصميم ...</p>
            </div>
            <div>
                <img src={aboutImg} alt="aboutImg" className="w-96 rounded-full"/>
            </div>
        </div>
    )
}