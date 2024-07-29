import logoImg from "./logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-blue-800 mt-12" id="footer">
      <div className="flex flex-col gap-10 justify-center items-center text-center p-10 md:flex-row md:gap-24">
        <div>
          <img
            src={logoImg}
            alt=""
            className="bg-white rounded-full w-56 h-56"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-3 text-xl">
          <div className="flex items-center gap-2">
            <FaLocationDot />
            الموقع :
          </div>
          <div>مقر مدرسة الرائد , زيغود يوسف , قسنطينة</div>
          <div className="flex items-center gap-2">
            <FaEnvelope /> البريد الالكتروني :
          </div>
          <div>club.scientifique.basma@gmail.com</div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center text-xl">
          <h1>مواقع التواصل الاجتماعي :</h1>
          <div className="flex flex-row-reverse gap-6 text-4xl">
            <FaFacebookSquare className="hover:text-sky-500" />
            <FaInstagram className="hover:text-sky-500" />
            <SiGmail className="hover:text-sky-500" />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center text-center gap-2 text-md p-4">
        <FaRegCopyright /> حروج محمد الأمين | Harroudj Mohammed El Amin
      </div>
    </div>
  );
}
