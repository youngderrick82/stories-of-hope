
import VideoCarousel from "@/components/video-carousel";


export default function Home() {
  return (
    <div className="h-full">
      <div className="carousel-content max-w-[1440px] m-auto flex">
        <div className="carousel">
        <VideoCarousel/>
        </div>
      </div>
      </div>
  );
}
