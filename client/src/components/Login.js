import Footer from "./footer";
import LogForm from "./LogForm";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [_, setCookies] = useCookies(["access_token"]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("https://club-basma.onrender.com/login", {
      username,
      password,
    });
    setCookies("access_token", response.data.token);
    window.localStorage.setItem("userID",response.data.adminID)
    console.log(response);
  };

  return (
    <div>
      <div className="bg-blue-800 py-2 flex justify-center items-center text-center">
        <h1>مرحبا بك في النادي العلمي بصمة</h1>
      </div>
      <div className="flex flex-col justify-center items-center py-20 gap-10">
        <h1 className="text-3xl lg:text-6xl font-semibold">تسجيل الدخول :</h1>
        <LogForm
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          onSubmit={onSubmit}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Login;
