import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full px-3 ">
            <div className="w-full border-t border-[#333] flex flex-col px-7 py-10 gap-[70px]">
                <div className="w-[180px] aspect-[2252/541] relative">
                    <Image
                        src="/image/logo_main.png"
                        alt="logo"
                        fill
                        sizes="180px"
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
                <div className="space-y-12">
                    <span className="text-[15px]">About</span>
                    <div className="space-y-4 text-[14px]">
                        <div className="flex items-center cursor-pointer h-[30px]">
                            <span className="mb-[3px]">Terms of Service</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="size-3.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                        <div className="flex items-center cursor-pointer h-[30px]">
                            <span className="mb-[3px]">Privacy Policy</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="size-3.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                        <div className="flex items-center cursor-pointer h-[30px]">
                            <span className="mb-[3px]">Terms of Paid Service</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="size-3.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                        <div className="flex items-center cursor-pointer h-[30px]">
                            <span className="mb-[3px]">Credits Policy</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="size-3.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                        <div className="flex items-center cursor-pointer h-[30px]">
                            <span className="mb-[3px]">Community Guidelines</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="size-3.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="space-y-12 flex flex-col">
                    <span className="text-[15px]">Contact Us</span>
                    <span className="text-[15px]">official@plai.com</span>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-4">
                    <div className="w-[150px] aspect-[323/327] bg-white relative rounded-[8px] overflow-hidden ">
                        <Image
                            src="/image/qr.png"
                            alt="logo"
                            fill
                            sizes="150px"
                            style={{ objectFit: "cover" }}
                            className="px-2 py-2 "
                            priority
                        />
                    </div>
                    <span className="text-[15px]">X</span>
                </div>
                <span className="text-center text-[#4e495a] text-[12px]">plai.com 2025 © All rights Reserved</span>
            </div>
        </div>
    );
}
