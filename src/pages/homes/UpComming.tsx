import CommonHeader from "../component/utils/CommonHeader";
import Container from "../component/utils/Container";
import upcomming from "../../assets/upcomming-01.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { useAppSelector } from "@/redux/hooks/Hooks";
import { currentTheme } from "@/redux/features/theme/themeSlice";

const UpComming = () => {
  const isDark = useAppSelector(currentTheme);
  return (
    <Container>
      <CommonHeader text="Upcomming Event" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div className="w-full lg:w-1/2 p-10 ">
          <img className="max-h-80 rounded-md" src={upcomming} alt="" />
        </div>

        {/* event list */}
        <div className={`w-full lg:w1/2  flex flex-col justify-between gap-10  border-e-2 ${isDark ? "bg-black text-white " : "bg-slate-50"} `} >
          <div className="flex justify-between gap-10">
            <div className="text-[30px] font-bold text-center ps-2">
              <h2 className="border-e-2  border-yellow-600 pe-10 ">05</h2>
              <h2 className="text-primary-blue text-[25px] border-e-2  border-yellow-600 pe-10 py-8">
                Mar
              </h2>
            </div>

            <div>
              <h3 className="text-dark-blue font-bold text-[28px]">
                Distribution of Cloths among the needy people
              </h3>
              <div className="flex gap-10 items-center mt-5 text-lg font-semibold">
                <p className="flex items-center gap-3">
                  <FaRegClock /> <span>8.00 am</span>
                </p>
                <p className="flex items-center gap-3">
                  <FaLocationDot /> <span>Gaza Central Mosque</span>
                </p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="flex justify-between gap-10 ">
            <div className="text-[30px] font-bold text-center ps-2">
              <h2 className="border-e-2  border-yellow-600 pe-10 ">05</h2>
              <h2 className="text-primary-blue text-[25px] border-e-2  border-yellow-600 pe-10 py-8">
                Mar
              </h2>
            </div>

            <div>
              <h3 className="text-dark-blue font-bold text-[28px]">
                Distribution of Cloths among the needy people
              </h3>
              <div className="flex gap-10 items-center mt-5 text-lg font-semibold">
                <p className="flex items-center gap-3">
                  <FaRegClock /> <span>8.00 am</span>
                </p>
                <p className="flex items-center gap-3">
                  <FaLocationDot /> <span>Gaza Central Mosque</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UpComming;
