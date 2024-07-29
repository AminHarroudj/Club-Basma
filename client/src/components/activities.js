import ActivityCard from "./ActivityCard";
import img1 from "./1.jpg"
import img2 from "./2.jpg"
import img3 from "./3.jpg"
import img4 from "./4.jpg"
import img5 from "./5.jpg"
import img6 from "./6.jpg"
import imgA from "./a.jpg"
import imgB from "./b.jpg"
import imgC from "./c.jpg"
import imgD from "./d.jpg"
import imgE from "./e.jpg"
import imgF from "./f.jpg"

export default function Activities() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-4 pt-24" id="activities">
      <h1 className="text-4xl font-semibold text-blue-900 lg:text-5xl">نشاطات النادي العلمي بصمة :</h1>
      <div className="flex flex-col gap-8">
        <ActivityCard title="دورة برمجة المواقع">
            <img src={img1} alt="" className="w-96 rounded-xl"/>
            <img src={img2} alt="" className="w-96 rounded-xl"/>
            <img src={img3} alt="" className="w-96 rounded-xl"/>
            <img src={img4} alt="" className="w-96 rounded-xl"/>
            <img src={img5} alt="" className="w-96 rounded-xl"/>
            <img src={img6} alt="" className="w-96 rounded-xl"/>
        </ActivityCard>
        <ActivityCard title="لقاء توجيهي ل طلبة الباكالوريا">
            <img src={imgA} alt="" className="w-96 rounded-xl"/>
            <img src={imgB} alt="" className="w-96 rounded-xl"/>
            <img src={imgC} alt="" className="w-96 rounded-xl"/>
            <img src={imgD} alt="" className="w-96 rounded-xl"/>
            <img src={imgE} alt="" className="w-96 rounded-xl"/>
            <img src={imgF} alt="" className="w-96 rounded-xl"/>
        </ActivityCard>
      </div>
    </div>
  );
}
