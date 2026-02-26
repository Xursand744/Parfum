// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../public/parfume.png";
import Old1 from "../../public/Old1.png";
import Old2 from "../../public/Old2.png";
import Old3 from "../../public/Old3.png";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

// Import Swiper styles
import "swiper/css";

export default () => {
  return (
    <div className="container mx-auto  my-36">
      <div>
        <h1 className="text-[#AB572D] text-2xl font-bold text-center text-[68px] my-[90px]">
          Best selling products
        </h1>
      </div>
      <Swiper
        className="text-white max-h-[442px] h-full"
        navigation={true}
        spaceBetween={50}
        slidesPerView={4}
       modules={[Navigation]}
      >
        <SwiperSlide className="  max-w-[250px] w-full h-full">
          <div className="rounded-[10px] flex flex-col  items-center justify-between py-2 bg-[#3d3d3db5] h-full">
            <div className="w-[250px] h-[350px] object-cover ">
              <img className="w-full h-full" src={img} alt="" />
            </div>
            <p>Luxurious Elixir Rough</p>
            <p className="text-[#AB572D]">
              $ 220.00 <span className="text-[white]">100ml</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="  max-w-[250px] w-full h-full">
          <div className="rounded-[10px] flex flex-col  items-center justify-between  py-2 bg-[#3d3d3db5]">
            <div className="w-[250px] h-[350px] object-cover">
              <img className="w-full h-full" src={Old2} alt="" />
            </div>
            <p>The Golden Legacy</p>
            <p className="text-[#AB572D]">
              $ 160.00 <span className="text-[white]">100ml</span>{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="  max-w-[250px] w-full h-full">
          <div className="rounded-[10px] flex flex-col  items-center  justify-between py-2 bg-[#3d3d3db5]">
            <div className="w-[250px] h-[350px] object-cover">
              <img className="w-full h-full" src={Old1} alt="" />
            </div>
            <p>Luxurious Elixir</p>
            <p className="text-[#AB572D] ">
              $ 250.00 <span className="text-[white]">100ml</span>
            </p>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide className=" max-w-[250px] w-full h-full">
          <div className="rounded-[10px] flex flex-col  items-center justify-between  py-2 bg-[#3d3d3db5]">
            <div className="w-[250px] h-[350px] object-cover">
              <img className="w-full h-full" src={Old3} alt="" />
            </div>
            <p>Luxurious Essence</p>
            <p className="text-[#AB572D]">
              $ 260.00 <span className="text-[white]">100ml</span>
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="  max-w-[250px] w-full h-[442px]">
          <div className="rounded-[10px] flex flex-col  items-center justify-between  py-2 bg-[#3d3d3db5]">
            <div className="w-[250px] h-[350px] object-cover">
              <img className="w-full h-full" src={Old3} alt="" />
            </div>
            <p>Luxurious Essence</p>
            <p className="text-[#AB572D]">
              $ 260.00 <span className="text-[white]">100ml</span>
            </p>
          </div>
        </SwiperSlide>
         <SwiperSlide className="  max-w-[250px] w-full h-full">
          <div className="rounded-[10px] flex flex-col  items-center  py-2 justify-between bg-[#3d3d3db5]">
            <div className="w-[250px] h-[350px] object-cover">
              <img className="w-full h-full" src={Old1} alt="" />
            </div>
            <p>Luxurious Elixir</p>
            <p className="text-[#AB572D] ">
              $ 250.00 <span className="text-[white]">100ml</span>
            </p>
          </div>{" "}
        </SwiperSlide>
           <SwiperSlide className="  max-w-[250px] w-full h-full">
          <div className="rounded-[10px] flex flex-col  items-center justify-between  py-2 bg-[#3d3d3db5]">
            <div className="w-[250px] h-[350px] object-cover">
              <img className="w-full h-full" src={Old2} alt="" />
            </div>
            <p>The Golden Legacy</p>
            <p className="text-[#AB572D]">
              $ 160.00 <span className="text-[white]">100ml</span>{" "}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
