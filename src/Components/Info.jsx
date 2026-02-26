import Rasm from "/bg.png";
import Praz from "/prazrachniy.png";

export default function Info() {
  return (
    <div>
      <div className="container mx-auto relative">
        <img className="w-full" src={Rasm} alt="Rasm" />
        <img className="absolute top-0 w-full" src={Praz} alt="Prazrachniy" />
        <div className="absolute top-[50%] left-[50%] text-center translate-x-[-50%] translate-y-[-50%] max-w-[746px] w-full">
          <h2 className=" text-[#AB572D] text-[50px] font-medium mb-[30px]">Welcome to Local Face</h2>
          <p className="text-white font-light text-[20px]">
            Welcome to Local Face Perfumes, where the spirit of victory and
            triumph come alive through scents that empower and inspire. Our
            curated collection, aptly named "Victory Scented," is a celebration
            of success and elegance, designed to unleash your victorious
            essence. Indulge in the sweet taste of triumph with captivating
            fragrances that tell the tale of your achievements. At Local Face,
            we believe that every victory deserves a signature scent, and we are
            dedicated to providing unforgettable fragrances that elevate your
            spirit and empower your journey.
          </p>
        </div>
      </div>
    </div>
  );
}
