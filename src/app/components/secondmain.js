'use client'
import Image from "next/image";
import { useRef, useState } from "react";

export default function SecondMain() {
    const videos = [
        { id: 1, src: "/video/sample.mp4" },
        { id: 2, src: "/video/sample2.mp4" },
        { id: 3, src: "/video/sample3.mp4" },
        { id: 4, src: "/video/sample4.mp4" },
    ];
    const [videoDurations, setVideoDurations] = useState({});
    const [playingVideo, setPlayingVideo] = useState(null);

    const videoRefs = useRef({}); // 모든 비디오 ref를 객체로 관리

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
    return (
        <div className="mt-8 w-full">
            <div className="flex justify-between">
                <span className="text-[18px] font-medium text-white">Trending Shorts</span>
                <div className="flex items-center bg-[#1f2429] px-4 py-1 rounded-full">
                    <span className="text-[14px] text-white">More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
            <div className="grid gap-4 mt-4">
                {videos.map((video) => {
                    
                    return (
                        <div key={video.id} className="relative cursor-pointer">
                            <video onClick={() => handlePlay(video.id)} onLoadedMetadata={() => handleLoadedMetadata(video.id)}
                                ref={(el) => (videoRefs.current[video.id] = el)} src={video.src} className="rounded-[4px] overflow-hidden w-full object-cover object-center h-[204px]"></video>
                            {playingVideo === video.id && (
                                <div className="absolute top-[160px] w-full p-4 flex justify-between text-[14px]">
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
                            )}
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
                                <div className="bg-infoBackGround w-full rounded-[4px] px-2 py-2">
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
