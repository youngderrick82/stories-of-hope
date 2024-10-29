
import VideoCarousel from "@/components/video-carousel";


export default function Home() {
  return (
    <div className="md:bg-gradient-to-r md:from-[#F15C22] md:via-[#F7931D] md:to-[#FFC840] bg-gradient-to-b from-[#F15C22] via-[#F7931D] to-[#FFC840] h-full">
      <div className="carousel-content max-w-[1440px] m-auto flex">
        <div className="carousel">
        <VideoCarousel/>
        </div>
      </div>
      </div>
  );
}
