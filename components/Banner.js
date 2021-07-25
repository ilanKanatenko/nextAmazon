import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import img1 from "../public/amazon_image1.jpg";
import img2 from "../public/amazon_image2.jpg";
import img3 from "../public/amazon_image3.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image src={img1} loading="lazy" alt="carousel " />
        </div>
        <div>
          <Image src={img2} loading="lazy" alt="carousel " />
        </div>
        <div>
          <Image src={img3} loading="lazy" alt="carousel " />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
