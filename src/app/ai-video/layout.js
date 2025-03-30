import AiVideoHeader from "../components/aivideoheader";
import SecondHeader from "../components/secondheader";

export default function AiVideoLayout({ children }) {
    return (
        <div className={` w-full flex flex-col justify-start items-center min-h-screen font-sans`}>
            <SecondHeader />
            <AiVideoHeader />
            {children} 
        </div>
    );
}
