import comma from "../../../assets/comma.png";

export type TTestimonialProps = {
  donorReview: {
    name: string;
    review: string;
  }; // Add this line
};

// motion

const TestimonialCard = ({ donorReview }: TTestimonialProps) => {
  return (
    <div className="w-full md:w-[390px] h-full md:h-[290px]  border-[1px] border-slate-200 rounded-md relative z-0 flex flex-col mx-auto hover:bg-primary-blue  transition-all  ">
      <img
        className="w-10 absolute -top-3 z-20 inset-0 left-3 "
        src={comma}
        alt=""
      />

      <div className="flex-grow pt-10 px-5 text-slate-700 hover:text-white">
        <p className="text-justify leading-relaxed">{donorReview?.review}</p>
      </div>

      <div className="pb-5 px-5 text-slate-700">
        <p className="mt-7 text-[18px]">{donorReview?.name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
