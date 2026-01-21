import imgRectangle12176 from "figma:asset/c199ccfd162cd14d2f50a6bac646c6a8366c90e6.png";
import imgImage17 from "figma:asset/bd3e6860d674ba070b2d1ca41444463fc811f56d.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute left-0 size-[88px] top-0" data-name="image 17">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
      </div>
      <div className="absolute contents left-[92px] top-[23px]" data-name="Mask group">
        <div className="absolute bg-white h-[49px] left-[90px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2px] mask-size-[140px_46px] top-[21px] w-[143px]" style={{ maskImage: `url('${imgRectangle12176}')` }} />
      </div>
    </div>
  );
}