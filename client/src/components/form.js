import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'

export default function Form() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b2f68c57-5830-4763-8221-cac55c85986f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Successe!",
        text: "Your message sent successeful!",
        icon: "success"
      });
    }
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const createUser = () => {
    axios
      .post("https://club-basma.onrender.com/createUser", {
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
        onSubmit={onSubmit}
      >
        <label htmlFor="" className="text-xl">
          الاسم الكامل :
        </label>
        <input
          type="text"
          name="name"
          placeholder="الاسم و اللقب"
          className="py-2 px-4 rounded-full w-full outline-none text-black"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <label htmlFor="" className="text-xl">
          رقم الهاتف :
        </label>
        <input
          type="number"
          name="number"
          placeholder="رقم الهاتف"
          className="py-2 px-4 rounded-full w-full outline-none text-black"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          required
        />
        <label htmlFor="" className="text-xl">
          البريد الالكتروني :
        </label>
        <input
          type="email"
          name="email"
          placeholder="البريد الالكتروني"
          className="py-2 px-4 rounded-full w-full outline-none text-black"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <button
          className="bg-blue-800 py-2 px-10 rounded-full hover:bg-blue-900"
          type="submit"
          onClick={createUser}
        >
          اشتراك
        </button>
      </form>
    </div>
  );
}
