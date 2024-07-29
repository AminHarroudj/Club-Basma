import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-blue-800 bg-opacity-70 flex justify-between items-center py-2 px-4 lg:px-12 lg:py-4 fixed left-0 right-0">
      <a href="#home" className="text-2xl font-semibold text-white lg:text-3xl">
        اترك <span className="text-sky-500">بصمتك</span>
      </a>
      <div
        className={`bg-blue-800 bg-opacity-70 py-4 absolute top-12 flex flex-col justify-center items-center text-center right-0 left-0 gap-4  ${
          open ? "block" : "hidden"
        } lg:flex lg:static lg:flex-row lg:gap-8 lg:py-0 lg:bg-transparent text-white`}
      >
        <ul className="flex flex-col gap-4 lg:flex-row lg:gap-12">
          <li>
            <a
              href="#home"
              className="text-lg hover:text-sky-500 lg:text-lg font-medium"
            >
              الصفحة الرئيسية
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-lg hover:text-sky-500 lg:text-lg font-medium"
            >
              حول
            </a>
          </li>
          <li>
            <a
              href="#activities"
              className="text-lg hover:text-sky-500 lg:text-lg font-medium"
            >
              النشاطات
            </a>
          </li>
        </ul>
        <hr className="border-1 w-full border-gray-300 lg:w-px lg:h-8 lg:bg-gray-400" />
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-4">
          <a href="#form"><button className="text-lg hover:text-sky-500 lg:text-lg font-medium lg:text-white lg:bg-sky-500 lg:rounded-full lg:py-1 lg:px-4 lg:hover:text-white lg:hover:bg-sky-600">
            اشتراك
          </button></a>
        </div>
      </div>
      <FaBars
        className="text-2xl text-white cursor-pointer lg:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      />
    </div>
  );
}
