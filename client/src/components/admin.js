import axios from "axios";
import { useEffect, useState } from "react";

export default function Admin() {
  useEffect(() => {
    axios
      .get("https://club-basma.onrender.com/users")
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  const [users, setUsers] = useState([]);

  return (
    <div className="flex justify-center items-center text-center text-2xl pt-24">
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-semibold">الاعضاء المشتركين :</h1>
        {users.map((user) => {
          return (
            <div>
              <ul className="p-2 grid grid-cols-3 border">
                <li>{user.name}</li>
                <li>{user.phone}</li>
                <li>{user.email}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
