import basmaImg from "./basma.jpg";
import About from "./about";
import Activities from "./activities";
import Form from "./form";

export default function Home() {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center text-center gap-8 p-4 pt-24"
        id="home"
      >
        <div>
          <img src={basmaImg} alt="basmaImg" className="w-96 rounded-full" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl lg:text-6xl">النادي العلمي بصمة</h1>
          <h1 className="text-4xl font-semibold text-blue-900 lg:text-6xl">
            Club Scientifique BASMA
          </h1>
        </div>
      </div>
      <About />
      <Activities />
      <Form />
    </div>
  );
}
