'use client'
import Image from "next/image";
import { useRef, useState } from "react";

export default function Explore() {
    const videos = [
        { id: 1, src: "/video/explore/explore_1.mp4" },
        { id: 2, src: "/video/explore/explore_2.mp4" },
        { id: 3, src: "/video/explore/creative_explore_3.mp4" },
        { id: 4, src: "/video/explore/creative_explore_4.mp4" },
        { id: 5, src: "/video/explore/creative_explore_5.mp4" },
        { id: 6, src: "/video/explore/explore_6.mp4" },
        { id: 7, src: "/video/explore/explore_7.mp4" },
        { id: 8, src: "/video/explore/creative_explore_8.mp4" },
        { id: 9, src: "/video/explore/explore_9.mp4" },
    ];
    const [videoDurations, setVideoDurations] = useState({});
    const [playingVideo, setPlayingVideo] = useState(null);
    const [select, setSelect] = useState(0);
    const videoRefs = useRef({}); // 모든 비디오 ref를 객체로 관리

    // const handlePlay = (id, videoRef) => {
    //     if (videoRef.current) {
    //         if (playingVideo === id) {
    //             videoRef.current.pause();
    //             setPlayingVideo(null);
    //         } else {
    //             videoRef.current.play();
    //             setPlayingVideo(id);
    //         }
    //     }
    // };
    const handlePlay = (id) => {
        const videoRef = videoRefs.current[id];
        if (videoRef) {
            if (playingVideo === id) {
                videoRef.pause();
                setPlayingVideo(null);
            } else {
                videoRef.play();
                setPlayingVideo(id);
            }
        }
    };
    // const handleLoadedMetadata = (id, videoRef) => {
    //     if (videoRef.current) {
    //         const duration = videoRef.current.duration;
    //         const minutes = Math.floor(duration / 60);
    //         const seconds = Math.floor(duration % 60);
    //         setVideoDurations((prev) => ({
    //             ...prev,
    //             [id]: `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`, // 2:05 같은 형식으로 저장
    //         }));
    //     }
    // };
    const handleLoadedMetadata = (id) => {
        const videoRef = videoRefs.current[id];
        if (videoRef) {
            const duration = videoRef.duration;
            const minutes = Math.floor(duration / 60);
            const seconds = Math.floor(duration % 60);
            setVideoDurations((prev) => ({
                ...prev,
                [id]: `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`,
            }));
        }
    };

    const changeSelect = (num) => {
        setSelect(num)
    }

    return (
        <div className="mt-[68px] w-full px-3 pb-10">
            <div className="w-full h-[140px] bg-cover bg-center bg-no-repeat flex flex-col 
            items-center justify-center gap-[5px] rounded-[20px] overflow-hidden bg-[url('/image/explore_back.png')]">
                <h1 className="text-[18px] font-medium">Explore</h1>
                <p className="text-[14px]">Share your ideas with us!</p>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div className=" w-full border border-[#ffffff0a] rounded-[12px] p-px bg-[#ffffff0a] flex justify-between gap-1 text-[14px]">
                    <div onClick={() => changeSelect(0)} className={`w-[33%] text-center rounded-[10px] px-6 py-[6px] cursor-pointer bg-transparent  text-white ${select === 0 ? 'text-black bg-[linear-gradient(135deg,rgb(82,255,186)_9.27%,rgb(35,250,236)_46.96%,rgb(0,170,255)_88.5%)]' : ''} `}>
                        All
                    </div>
                    <div onClick={() => changeSelect(1)} className={`w-[33%] text-center rounded-[10px] px-6 py-[6px] cursor-pointer bg-transparent  text-white ${select === 1 ? 'text-black bg-[linear-gradient(135deg,rgb(82,255,186)_9.27%,rgb(35,250,236)_46.96%,rgb(0,170,255)_88.5%)]' : ''} `}>
                        Creatives
                    </div>
                    <div onClick={() => changeSelect(2)} className={`w-[33%] text-center rounded-[10px] px-6 py-[6px] cursor-pointer bg-transparent  text-white ${select === 2 ? 'text-black bg-[linear-gradient(135deg,rgb(82,255,186)_9.27%,rgb(35,250,236)_46.96%,rgb(0,170,255)_88.5%)]' : ''} `}>
                        Shorts
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4 text-[14px] mt-4">
                <span className="px-5 py-1 rounded-[8px] text-[#82fac2] bg-gradient-to-r from-[#a7ff1a1f] via-[#82fac21f] to-[#47d4ff1f]">Recommended</span>
                <div className="px-5 py-1 rounded-[8px] bg-[#ffffff14]">time</div>
            </div>
            <div className="grid gap-4 mt-4">
                {videos.filter((video) => {
                    if (select === 0) return true; // All: 모든 비디오 표시
                    if (select === 1) return video.src.includes('creative'); // Creatives: creative 포함된 비디오만
                    if (select === 2) return !video.src.includes('creative'); // Shorts: creative 없는 비디오만
                    return false;
                })
                    .map((video) => {
                        
                        return (
                            <div key={video.id} className="relative cursor-pointer">
                                <video onClick={() => handlePlay(video.id)} onLoadedMetadata={() => handleLoadedMetadata(video.id)}
                                    ref={(el) => (videoRefs.current[video.id] = el)} src={video.src} className="rounded-[4px] overflow-hidden w-full object-cover object-center"></video>
                                {playingVideo !== video.id && (
                                    <button
                                        onClick={() => handlePlay(video.id)}
                                        className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/30 text-white text-2xl rounded-lg"
                                    >
                                        ▶
                                    </button>
                                )}
                                {videoDurations[video.id] && (
                                    <span className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                                        {videoDurations[video.id]}
                                    </span>
                                )}
                                {playingVideo === video.id && (
                                    <div className="bg-infoBackGround w-full rounded-[4px] px-2 py-2 flex flex-col">
                                        <div className=" w-full py-4 flex justify-between text-[14px]">
                                            <div className="flex items-center gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#1f2429" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                                <span className="text-white">Palette</span>
                                            </div>
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                </svg>
                                                <span className="text-white">333</span>
                                            </div>
                                        </div>
                                        <span className="text-white font-semibold">Title</span>
                                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                )}

                            </div>
                        )
                    })}
            </div>
        </div>
    );
}
