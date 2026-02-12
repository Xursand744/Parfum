import Banner from '../../public/Banner.png'

export default function Home() {
  return (
    <div className="text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className=''>
          <h1 className='text-6xl font-light max-w-[752px] w-full mb-[14px]'>Elevate Your Spirit with Victory Scented Fragrances!</h1>
          <p className='text-[24px] font-light mb-[64px] max-w-[532px] w-full'> Shop now and embrace the sweet smell of victory with Local Face.</p>
          <button className='bg-[#AB572D] py-[14px] px-[30px] rounded-xl'>Shop Now</button>
        </div>

        <img  src={Banner} alt="Banner" />
      </div>
    </div>
  );
}
