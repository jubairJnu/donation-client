import { Button } from "@/components/ui/button";
import CommonHeader from "../component/utils/CommonHeader";
import Container from "../component/utils/Container";
import ClothCard, { TClothsProps } from "./ClothCard";
import { Link } from "react-router-dom";
import { useGetClothsQuery } from "@/redux/features/cloths/clothApi";

const WinterCloths = () => {
  const { data: cloths, isLoading } = useGetClothsQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const showCloths = cloths?.slice(0, 6);

  return (
    <Container>
      <CommonHeader text="Winter Cloth" />
      {/* grid to show card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
        {showCloths?.map((cloth: TClothsProps) => (
          <ClothCard key={cloth._id} cloth={cloth} />
        ))}
      </div>
      <div className="my-8 flex justify-center ">
        <Link to="/winter-clothes">
          {" "}
          <Button size="lg">View All</Button>
        </Link>
      </div>
    </Container>
  );
};

export default WinterCloths;
