import Sec2 from "/sec2.png";

export default function Section2() {
  return (
    <div className="max-w-[1800px] w-full mx-auto flex items-center justify-between">
      <img className="max-w-[670px] w-full" src={Sec2} alt="Section 2" />
      <div className="container mx-auto text-white max-w-[588px] w-full">
        <h2 className="text-center">Our Values</h2>
        <p>
         
          At Local Face, our perfume retail store is built on a foundation of
          passion and authenticity. We believe in celebrating the individuality
          of every customer, providing a diverse collection of scents that
          resonate with their unique personality and style. Our dedicated team
          of fragrance enthusiasts is committed to creating a welcoming and
          inclusive environment, where connections are forged, and inspiration
          thrives. Embracing sustainability and continuous learning, Local Face
          strives to be more than just a shopping destination; we are a
          community that inspires and empowers individuals on their fragrance
          journey.
        </p>
      </div>
    </div>
  );
}
