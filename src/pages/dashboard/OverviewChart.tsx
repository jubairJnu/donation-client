import { useGetDonationQuery } from "@/redux/features/donation/donatoinApi";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

type TDonation = {
  category: string;
  donation: number;
};

const OverviewChart = () => {
  const { data: donations } = useGetDonationQuery(undefined);
  console.log(donations, "donation data");

  const data = donations?.map((donation: TDonation) => ({
    name: donation?.category,
    value: donation?.donation,
  }));

  return (
    <div className=" h-screen">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewChart;
