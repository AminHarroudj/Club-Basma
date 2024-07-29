import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const createUser = () => {
    axios
      .post("http://localhost:3001/createUser", {
        name: name,
        phone: phone,
        email: email,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div
      className="flex flex-col justify-center items-center gap-8 pt-20"
      id="form"
    >
      <h1 className="text-4xl font-semibold">انضم الينا للنادي :</h1>
      <form
        action=""
        className="flex flex-col justify-center items-start gap-4 bg-sky-200 bg-opacity-30 rounded-xl w-3/4 p-6 lg:w-2/4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="" className="text-xl">
          الاسم الكامل :
        </label>
        <input
          type="text"
          placeholder="الاسم و اللقب"
          className="py-2 px-4 rounded-full w-full outline-none text-black"
          onChange={(e)=>{
            setName(e.target.value)
          }}
          required
        />
        <label htmlFor="" className="text-xl">
          رقم الهاتف :
        </label>
        <input
          type="number"
          name=""
          id=""
          placeholder="رقم الهاتف"
          className="py-2 px-4 rounded-full w-full outline-none text-black"
          onChange={(e)=>{
            setPhone(e.target.value)
          }}
          required
        />
        <label htmlFor="" className="text-xl">
          البريد الالكتروني :
        </label>
        <input
          type="email"
          name=""
          id=""
          placeholder="البريد الالكتروني"
          className="py-2 px-4 rounded-full w-full outline-none text-black"
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required
        />
        <button
          className="bg-blue-800 py-2 px-10 rounded-full hover:bg-blue-900"
          onClick={createUser}
        >
          اشتراك
        </button>
      </form>
    </div>
  );
}
