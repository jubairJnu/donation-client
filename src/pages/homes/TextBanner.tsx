import { Button } from "@/components/ui/button";

const TextBanner = () => {
  return (
    <div className=" absolute top-[120px]  md:top-56  lg:top-1/2 transform  -translate-y-3/4  lg:-translate-y-1/2 flex  flex-col justify-center  w-full  mx-auto text-sm md:text-xl lg:text-[54px] uppercase font-bold  text-white ">
      <h1 className="  ms-10">Wrap Someone in</h1>
      <h1 className="lg:mt-10 ms-10">
        <span className="text-primary-blue ">Warmth</span>
      </h1>
      <div className="ms-28 lg:mt-16 pb-1">
        <Button size="rounded">Donate Now</Button>
      </div>
    </div>
  );
};

export default TextBanner;
