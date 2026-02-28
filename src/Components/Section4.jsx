import Rasm1 from "/on1.png";
import Rasm2 from "/on2.png";
import Rasm3 from "/on3.png";
import Rasm4 from "/on4.png";
import Rasm5 from "/on5.png";
import Rasm6 from "/on6.png";
import Rasm7 from "/on7.png";
export default function Section4() {
  return (
    <div className="container mx-auto">
      <h2>Our Collections</h2>
      <div className="grid grid-cols-6 place-items-stretch gap-4">
        <img  className="col-span-2 max-h-[460px] h-full" src={Rasm1} alt="Rasm 1" />
        <img className="grid max-h-[460px] h-full col-span-4" src={Rasm2} alt="Rasm 2" />
        <img className="max-h-[460px] h-full grid col-span-3" src={Rasm3} alt="Rasm 3" />
        <img className="max-h-[460px] h-full grid col-span-3" src={Rasm4} alt="Rasm 4" />
        <img className="max-h-[460px] h-full col-span-2" src={Rasm5} alt="Rasm 5" />
        <img className="max-h-[460px] h-full col-span-2" src={Rasm6} alt="Rasm 6" />
        <img className="max-h-[460px] h-full col-span-2" src={Rasm7} alt="Rasm 7" />
      </div>
    </div>
  );
}
