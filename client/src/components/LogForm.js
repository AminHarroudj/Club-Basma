function LogForm({ username, setUsername, password, setPassword , onSubmit }) {
  return (
    <div>
      <form
        action=""
        className="text-xl flex flex-col justify-center items-start gap-2 w-96"
        onSubmit={onSubmit}
      >
        <label htmlFor="username">اسم المستخدم :</label>
        <input
          type="text"
          name="username"
          placeholder="اسم المستخدم"
          className="w-full p-2 rounded-xl outline-none text-black"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="password">كلمة المرور :</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="كلمة المرور"
          className="w-full p-2 rounded-xl outline-none text-black"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          type="submit"
          className="mt-4 py-2 px-6 rounded-xl hover:bg-blue-950 bg-blue-900"
        >
          تسجيل الدخول
        </button>
      </form>
    </div>
  );
}

export default LogForm;
