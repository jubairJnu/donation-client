import { useGetAllVlounteerQuery } from "@/redux/features/volunteer.api";
import CommonHeader from "./component/utils/CommonHeader";

import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Container from "./component/utils/Container";

type Tvolunteer = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
};

const Aboutus = () => {
  const { data: volunteers } = useGetAllVlounteerQuery(undefined);
  console.log(volunteers);

  return (
    <div className="mt-20">
      <Container>
        <h1 className="mb-10 text-center font-bold text-2xl">About Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
          <div>
            <h1 className="text-center text-xl font-bold mb-5">Mission</h1>
            <p className="text-slate-700 text-justify">
              Efficiently distribute winter clothes to those in need, ensuring
              access to warmth and protection, particularly in harsh conditions.
              Foster inclusivity and address the pressing need for winter
              clothing.
            </p>
          </div>
          <div className="bg-primary-blue p-10 rounded-md">
            <h1 className="text-center text-xl font-bold mb-5">Objectives</h1>
            <p className="text-gray-200 text-justify">
              Accessibility: Make winter clothes accessible to all, leveraging
              technology and partnerships. Efficiency: Optimize management and
              distribution, minimizing wastage and maximizing impact. Community
              Engagement: Facilitate collaboration among volunteers,
              organizations,
            </p>
          </div>
          <div className="bg-slate-200 p-10 rounded-md">
            <h1 className="text-center text-xl font-bold mb-5">Impact</h1>
            <p className="text-zinc-800 text-justify">
              Provide crucial protection against cold-related illnesses and
              fatalities. Empower individuals, maintaining dignity and fostering
              resilience. Strengthen community resilience to cold weather
              emergencies.
            </p>
          </div>
        </div>

        <CommonHeader text="Our Volunteers" />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {volunteers?.map((volunteer: Tvolunteer) => (
            <div
              key={volunteer._id}
              className="bg-slate-100 shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)]  rounded-xl py-5 px-3 "
            >
              <h2 className="text-xl">
                <span className="font-bold me-2">Name:</span> {volunteer?.name}{" "}
              </h2>
              <div className="flex items-center gap-3 justify-between mt-5">
                <p className="flex items-center justify-center gap-2">
                  <span className="text-green-500 text-xl">
                    <IoMdMail />
                  </span>

                  {volunteer?.email}
                </p>
                <p className="flex items-center justify-center gap-1">
                  <span className="text-green-500 text-xl">
                    <FaPhoneAlt />
                  </span>
                  {volunteer?.phone}
                </p>
              </div>
              <p className="flex items-center gap-2 mt-5">
                <span className="text-green-500 text-xl">
                  <FaLocationDot />
                </span>
                {volunteer?.location}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Aboutus;
