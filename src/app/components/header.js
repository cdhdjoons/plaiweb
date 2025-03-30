import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full flex justify-end bg-[#0D1116] px-3 h-[68px] items-center fixed z-50 ">
      <div className=" w-[10vmax] text-[14px] h-9 text-[#0b0c1a] py-2 bg-gradient-to-r from-[#A4FE28] via-[#7DF7C7] to-[#4AD6FC] rounded-3xl text-center">Sign In</div>
    </div>
  );
}
