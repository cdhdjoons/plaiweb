import Image from "next/image";
import FirstMain from "./components/firstmain";
import SecondMain from "./components/secondmain";
import ThirdMain from "./components/thirdmain";
import FourthMain from "./components/fourthmain";

export default function Home() {
  return (
    <div className=" min-h-screen w-full max-w-[700px] pt-[68px] ">
      <main className=" w-full flex flex-col items-center px-3">
        <FirstMain />
        <SecondMain />
        <ThirdMain />
        <FourthMain />
      </main>
    </div>
  );
}
