'use client'
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function FourthMain() {
    const leftVideos = [
        { id: 1, src: "/video/videoshow1_1.mp4" },
        { id: 2, src: "/video/videoshow1_2.mp4" },
        { id: 3, src: "/video/videoshow1_3.mp4" },
        { id: 4, src: "/video/videoshow1_4.mp4" },
        { id: 5, src: "/video/videoshow1_5.mp4" },
        { id: 6, src: "/video/videoshow1_6.mp4" },
        { id: 7, src: "/video/videoshow1_7.mp4" },
        { id: 8, src: "/video/videoshow1_8.mp4" },
        { id: 9, src: "/video/videoshow1_9.mp4" },
        { id: 10, src: "/video/videoshow1_10.mp4" },
    ];
    const rightVideos = [
        { id: 11, src: "/video/videoshow2_1.mp4" },
        { id: 12, src: "/video/videoshow2_2.mp4" },
        { id: 13, src: "/video/videoshow2_3.mp4" },
        { id: 14, src: "/video/videoshow2_4.mp4" },
        { id: 15, src: "/video/videoshow2_5.mp4" },
        { id: 16, src: "/video/videoshow2_6.mp4" },
        { id: 17, src: "/video/videoshow2_7.mp4" },
        { id: 18, src: "/video/videoshow2_8.mp4" },
        { id: 19, src: "/video/videoshow2_9.mp4" },
        { id: 20, src: "/video/videoshow2_10.mp4" },
    ];
    const [videoDurations, setVideoDurations] = useState({});
    const [playingVideo, setPlayingVideo] = useState(null);

    const handlePlay = (id, videoRef) => {
        if (videoRef.current) {
            if (playingVideo === id) {
                videoRef.current.pause();
                setPlayingVideo(null);
            } else {
                videoRef.current.play();
                setPlayingVideo(id);
            }
        }
    };
    const handleLoadedMetadata = (id, videoRef) => {
        if (videoRef.current) {
            const duration = videoRef.current.duration;
            const minutes = Math.floor(duration / 60);
            const seconds = Math.floor(duration % 60);
            setVideoDurations((prev) => ({
                ...prev,
                [id]: `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`, // 2:05 같은 형식으로 저장
            }));
        }
    };
    return (
        <div className="flex flex-col gap-4 mt-4 w-full">
            <div className=" flex gap-4 w-full">
                <div className=" w-[50%] rounded-[4px] flex flex-col gap-4">
                    {leftVideos.map((video) => {
                        const videoRef = useRef(null);
                        return (
                            <div key={video.id} className="overflow-hidden w-full object-cover object-center rounded-[4px] relative">
                                <video onClick={() => handlePlay(video.id, videoRef)} onLoadedMetadata={() => handleLoadedMetadata(video.id, videoRef)}
                                    ref={videoRef} src={video.src} className="rounded-[4px] overflow-hidden w-full object-cover object-center "></video>
                                {playingVideo !== video.id && (
                                    <button
                                        onClick={() => handlePlay(video.id, videoRef)}
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
                                        <div className=" w-full p-4 flex justify-between text-[14px]">
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
                <div className=" w-[50%] rounded-[4px] flex flex-col gap-4">
                    {rightVideos.map((video) => {
                        const videoRef = useRef(null);
                        return (
                            <div key={video.id} className="overflow-hidden w-full object-cover object-center rounded-[4px] relative">
                                <video onClick={() => handlePlay(video.id, videoRef)} onLoadedMetadata={() => handleLoadedMetadata(video.id, videoRef)}
                                    ref={videoRef} src={video.src} className="rounded-[4px] overflow-hidden w-full object-cover object-center "></video>
                                {playingVideo !== video.id && (
                                    <button
                                        onClick={() => handlePlay(video.id, videoRef)}
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
            <div className="w-full mt-[30px] mb-14 flex justify-center">
                <Link href="/explore" className="flex items-center justify-center w-[216px] h-10 rounded-full text-[#0b0c1a] text-[14px] bg-gradient-to-r from-[#A4FE28] via-[#7DF7C7] to-[#4AD6FC]">
                    Explore More
                </Link>
            </div>
        </div>
    );
}
