import Image from "next/image";
import Link from "next/link";

export default function SecondHeader() {
    return (
        <div className="w-full flex justify-between bg-[#0D1116] px-3 h-[68px] items-center fixed z-50 ">
            <Link href="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="url(#grad1)" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#52ffba', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#00aaff', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                </svg>
            </Link>
            <div className=" w-[10vmax] text-[14px] h-9 text-[#0b0c1a] py-2 bg-gradient-to-r from-[#A4FE28] via-[#7DF7C7] to-[#4AD6FC] rounded-3xl text-center">Sign In</div>
        </div>
    );
}
