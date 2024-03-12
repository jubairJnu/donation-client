import { useGetDonationQuery } from "@/redux/features/donation/donatoinApi";
import Container from "./component/utils/Container";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type TotalDonationEntry = {
  email: string;
  donation: number;
  name: string;
};

const DonnerLeaderboard = () => {
  const { data: donations } = useGetDonationQuery(undefined);
  const calculateTotalDonation = (): TotalDonationEntry[] => {
    const donationsTyped = donations as TotalDonationEntry[];
    const totalDonationByEmail = donationsTyped?.reduce(
      (acc, { email, donation, name }) => {
        acc[email] = acc[email] || { donation: 0, name }; // Initialize with name
        acc[email].donation += donation;
        return acc;
      },
      {} as { [email: string]: TotalDonationEntry }
    );

    if (!totalDonationByEmail) {
      return []; // Return an empty array if totalDonationByEmail is undefined or null
    }

    // Convert object into an array of objects
    const totalDonationArray = Object.entries(totalDonationByEmail).map(
      ([email, { donation, name }]) => ({
        email,
        donation,
        name, // Include name property
      })
    );

    return totalDonationArray;
  };

  const totalDonationbyEmail = calculateTotalDonation();

  return (
    <div className="min-h-screen">
      <Container>
        <h1 className="text-2xl font-bold text-center mb-16 mt-5">
          Donation Leaderboard
        </h1>
        <Table className=" text-center">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center text-lg font-bold">
                Email
              </TableHead>
              <TableHead className="text-center text-lg font-bold">
                Name
              </TableHead>
              <TableHead className="text-center text-lg font-bold">
                Total Donation
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {totalDonationbyEmail?.map((totalDonations) => (
              <TableRow key={totalDonations.email}>
                <TableCell>{totalDonations.email}</TableCell>
                <TableCell>{totalDonations.name}</TableCell>
                <TableCell>{totalDonations?.donation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
};

export default DonnerLeaderboard;
