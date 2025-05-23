import AiHeader from "../components/aiheader";
import SecondHeader from "../components/secondheader";

export default function ExploreLayout({ children }) {
    return (
        <div className={` w-full flex flex-col justify-start items-center min-h-screen font-sans`}>
            <SecondHeader />
            {children} {/* image.js, video.js의 내용이 여기에 렌더링됨 */}
        </div>
    );
}
